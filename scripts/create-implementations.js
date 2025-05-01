const fs = require("fs");
const path = require("path");

// Define the base directory for the algorithm trainer
const baseDir = path.resolve(__dirname, "../src/components/algorithm-trainer");

// Define the patterns file path
const patternsFilePath = path.join(baseDir, "patterns.ts");

// Read the patterns file
const patternsContent = fs.readFileSync(patternsFilePath, "utf8");

// Extract the algorithmPatterns object
const algorithmPatternsMatch = patternsContent.match(
  /export const algorithmPatterns: Record<PatternKey, AlgorithmPattern> = ({[\s\S]*?});/
);
if (!algorithmPatternsMatch) {
  console.error("Could not find algorithmPatterns in the patterns.ts file");
  process.exit(1);
}

const algorithmPatternsStr = algorithmPatternsMatch[1];

// Parse the algorithmPatterns object
const patterns = {};
let currentPattern = null;
let currentKey = null;
let bracketCount = 0;
let inString = false;
let stringChar = null;
let buffer = "";

// Improved pattern extraction
const patternRegex = /"([^"]+)":\s*{([^}]*)}/g;
let match;

while ((match = patternRegex.exec(algorithmPatternsStr)) !== null) {
  const key = match[1];
  const patternContent = match[2];

  // Extract pattern properties
  const titleMatch = patternContent.match(/title:\s*"([^"]+)"/);
  const descriptionMatch = patternContent.match(/description:\s*"([^"]+)"/);
  const timeComplexityMatch = patternContent.match(
    /timeComplexity:\s*"([^"]+)"/
  );
  const spaceComplexityMatch = patternContent.match(
    /spaceComplexity:\s*"([^"]+)"/
  );
  const pseudocodeMatch = patternContent.match(/pseudocode:\s*`([\s\S]*?)`/);
  const exampleMatch = patternContent.match(/example:\s*`([\s\S]*?)`/);
  const implementationMatch = patternContent.match(
    /implementation:\s*`([\s\S]*?)`/
  );

  if (
    titleMatch &&
    descriptionMatch &&
    timeComplexityMatch &&
    spaceComplexityMatch &&
    pseudocodeMatch &&
    exampleMatch &&
    implementationMatch
  ) {
    patterns[key] = {
      title: titleMatch[1],
      description: descriptionMatch[1],
      timeComplexity: timeComplexityMatch[1],
      spaceComplexity: spaceComplexityMatch[1],
      pseudocode: pseudocodeMatch[1],
      example: exampleMatch[1],
      implementation: implementationMatch[1],
    };
  }
}

// Define the directory structure for different pattern types
const patternDirectories = {
  // Sorting algorithms
  "Quick Sort": "sorting",
  "Merge Sort": "sorting",
  "Stack Sort": "sorting",
  "Heap Sort": "sorting",
  "Bubble Sort": "sorting",
  "Selection Sort": "sorting",
  "Insertion Sort": "sorting",

  // Searching algorithms
  "Binary Search": "searching",
  "Binary Search on Answer": "searching",
  "Linear Search": "searching",

  // Array algorithms
  "Two Sum": "array",
  "Two Sum Dict": "array",
  "Two Sum Two Pointers": "array",
  "Sliding Window": "array",
  "Bit Manipulation": "array",
  "Two Pointers": "array",
  "Prefix Sum": "array",
  "Kadane's Algorithm": "array",
  "Matrix Traversal": "array",
  "Matrix Traversal Recursive": "array",
  "Matrix Spiral Traversal": "array",
  "Matrix Spiral Recursive": "array",

  // Dynamic Programming
  "Dynamic Programming": "dynamic-programming",
  "Dynamic Programming Fibonacci": "dynamic-programming",
  "Dynamic Programming Iterative": "dynamic-programming",
  "Dynamic Programming Coin Change": "dynamic-programming",

  // Greedy algorithms
  Greedy: "greedy",
  "Greedy Activity Selection": "greedy",
  "Greedy Fractional Knapsack": "greedy",
  "Greedy Job Scheduling": "greedy",
  "Greedy Huffman Coding": "greedy",
  "Greedy Dijkstra": "greedy",

  // Backtracking
  Backtracking: "backtracking",

  // Graph algorithms
  "Topological Sort": "graph",
  DFS: "graph",
  "DFS Linked List": "graph",
  "DFS Binary Tree": "graph",
  BFS: "graph",
  "BFS Linked List": "graph",
  "Floyd Cycle Detection": "graph",

  // Tree algorithms
  Tree: "tree",
  "Binary Search Tree": "tree",

  // Data structures
  "Stack Implementation": "data-structures",
  "Queue Implementation": "data-structures",
  "Linked List": "data-structures",
  "Circular Linked List": "data-structures",
  "Hash Table": "data-structures",
  "Heap Implementation": "data-structures",
  Trie: "data-structures",
  "Monotonic Stack": "data-structures",
  "Monotonic Queue": "data-structures",

  // String algorithms
  "Rabin-Karp": "string",
  "KMP Algorithm": "string",
  "Manacher's Algorithm": "string",
  "Z-Algorithm": "string",
};

// Create implementation files for each pattern
Object.entries(patterns).forEach(([key, pattern]) => {
  // Skip if key is null or empty
  if (!key || key === "null") {
    console.warn(`Skipping pattern with invalid key: ${key}`);
    return;
  }

  let dir = patternDirectories[key];

  // If no directory is defined for this pattern, use "other"
  if (!dir) {
    dir = "other";
    console.log(
      `No specific directory defined for pattern: ${key}, using "other" category`
    );
  }

  // Create a filename from the pattern key
  const fileName =
    key
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "") + ".ts";

  const filePath = path.join(baseDir, "patterns", dir, fileName);

  // Create the directory if it doesn't exist
  const dirPath = path.join(baseDir, "patterns", dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }

  // Create the implementation file
  const fileContent = `import { AlgorithmPattern } from "../../types";

export const ${key
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "")}Pattern: AlgorithmPattern = {
  title: "${pattern.title}",
  description: "${pattern.description}",
  timeComplexity: "${pattern.timeComplexity}",
  spaceComplexity: "${pattern.spaceComplexity}",
  pseudocode: \`${pattern.pseudocode}\`,
  example: \`${pattern.example}\`,
  implementation: \`${pattern.implementation}\`
};
`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`Created pattern file: ${filePath}`);

  // Update the index.ts file for this directory
  const indexPath = path.join(baseDir, "patterns", dir, "index.ts");
  let indexContent = "";

  // Check if index.ts exists
  if (fs.existsSync(indexPath)) {
    indexContent = fs.readFileSync(indexPath, "utf8");
  } else {
    indexContent = `import { AlgorithmPattern } from "../../types";

export const ${dir.replace(
      /-/g,
      "_"
    )}Patterns: Partial<Record<string, AlgorithmPattern>> = {
  // ${dir} patterns will be added here
};
`;
  }

  // Add import for this pattern
  const importStatement = `import { ${key
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "")}Pattern } from "./${fileName.replace(
    ".ts",
    ""
  )}";\n`;

  if (!indexContent.includes(importStatement)) {
    indexContent = indexContent.replace(
      /import { AlgorithmPattern } from "\.\.\/\.\.\/types";/,
      `import { AlgorithmPattern } from "../../types";\n${importStatement}`
    );
  }

  // Add pattern to the patterns object
  const patternKey = key
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
  const patternEntry = `  "${key}": ${patternKey}Pattern,\n`;

  if (!indexContent.includes(patternEntry)) {
    indexContent = indexContent.replace(
      /export const \w+Patterns: Partial<Record<string, AlgorithmPattern>> = {/,
      `export const ${dir.replace(
        /-/g,
        "_"
      )}Patterns: Partial<Record<string, AlgorithmPattern>> = {\n${patternEntry}`
    );
  }

  fs.writeFileSync(indexPath, indexContent);
  console.log(`Updated index file: ${indexPath}`);
});

// Update the main patterns/index.ts file
const mainIndexPath = path.join(baseDir, "patterns", "index.ts");
let mainIndexContent = `import { AlgorithmPattern } from "../types";

// Import all pattern categories
`;

// Add imports for all directories
const allDirectories = [...new Set(Object.values(patternDirectories))];
allDirectories.push("other"); // Add "other" category

allDirectories.forEach((dir) => {
  const dirName = dir.replace(/-/g, "_");
  mainIndexContent += `import { ${dirName}Patterns } from "./${dir}";\n`;
});

// Add the export
mainIndexContent += `
// Combine all patterns
export const algorithmPatterns: Record<string, AlgorithmPattern> = {
  ...Object.entries({
`;

// Add all directories
allDirectories.forEach((dir, index, array) => {
  const dirName = dir.replace(/-/g, "_");
  mainIndexContent += `    ...${dirName}Patterns${
    index < array.length - 1 ? "," : ""
  }\n`;
});

mainIndexContent += `  }).reduce((acc, [_, patterns]) => ({ ...acc, ...patterns }), {})
};
`;

fs.writeFileSync(mainIndexPath, mainIndexContent);
console.log(`Created main index file: ${mainIndexPath}`);

console.log("Pattern files creation complete!");
