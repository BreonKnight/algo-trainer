const fs = require("fs");
const path = require("path");

// Define the base directory for the algorithm trainer
const baseDir = path.resolve(__dirname, "../src/components/algorithm-trainer");

// Define the patterns file path
const patternsFilePath = path.join(baseDir, "patterns.ts");

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

for (let i = 0; i < algorithmPatternsStr.length; i++) {
  const char = algorithmPatternsStr[i];

  // Handle string literals
  if (
    (char === '"' || char === "'" || char === "`") &&
    algorithmPatternsStr[i - 1] !== "\\"
  ) {
    if (!inString) {
      inString = true;
      stringChar = char;
    } else if (char === stringChar) {
      inString = false;
    }
  }

  // If we're in a string, just add the character to the buffer
  if (inString) {
    buffer += char;
    continue;
  }

  // Handle object keys
  if (char === '"' && bracketCount === 0) {
    const keyMatch = algorithmPatternsStr.slice(i).match(/"([^"]+)":/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      i += keyMatch[0].length - 1;
      continue;
    }
  }

  // Handle opening braces
  if (char === "{") {
    bracketCount++;
    if (bracketCount === 1 && currentKey) {
      currentPattern = {};
      patterns[currentKey] = currentPattern;
    }
  }

  // Handle closing braces
  if (char === "}") {
    bracketCount--;
    if (bracketCount === 0 && currentKey) {
      currentKey = null;
    }
  }

  // Add character to buffer
  buffer += char;

  // If we've reached the end of a pattern, process it
  if (bracketCount === 0 && currentKey === null && buffer.trim()) {
    // Extract the pattern properties
    const titleMatch = buffer.match(/title:\s*"([^"]+)"/);
    const descriptionMatch = buffer.match(/description:\s*"([^"]+)"/);
    const timeComplexityMatch = buffer.match(/timeComplexity:\s*"([^"]+)"/);
    const spaceComplexityMatch = buffer.match(/spaceComplexity:\s*"([^"]+)"/);
    const pseudocodeMatch = buffer.match(/pseudocode:\s*`([\s\S]*?)`/);
    const exampleMatch = buffer.match(/example:\s*`([\s\S]*?)`/);
    const implementationMatch = buffer.match(/implementation:\s*`([\s\S]*?)`/);

    if (
      titleMatch &&
      descriptionMatch &&
      timeComplexityMatch &&
      spaceComplexityMatch &&
      pseudocodeMatch &&
      exampleMatch &&
      implementationMatch
    ) {
      const pattern = {
        title: titleMatch[1],
        description: descriptionMatch[1],
        timeComplexity: timeComplexityMatch[1],
        spaceComplexity: spaceComplexityMatch[1],
        pseudocode: pseudocodeMatch[1],
        example: exampleMatch[1],
        implementation: implementationMatch[1],
      };

      patterns[currentKey] = pattern;
    }

    buffer = "";
  }
}

// Create directories if they don't exist
const categories = [
  "sorting",
  "searching",
  "array",
  "dynamic-programming",
  "greedy",
  "backtracking",
  "graph",
  "tree",
  "data-structures",
  "string",
];

categories.forEach((category) => {
  const dirPath = path.join(baseDir, "patterns", category);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
});

// Create index.ts files for each directory
Object.values(patternDirectories).forEach((dir) => {
  const indexPath = path.join(baseDir, "patterns", dir, "index.ts");
  if (!fs.existsSync(indexPath)) {
    fs.writeFileSync(
      indexPath,
      `import { AlgorithmPattern } from "../../types";

export const ${dir.replace(
        /-/g,
        "_"
      )}Patterns: Partial<Record<string, AlgorithmPattern>> = {
  // ${dir} patterns will be added here
};
`
    );
  }
});

// Create individual pattern files
Object.entries(patterns).forEach(([key, pattern]) => {
  const dir = patternDirectories[key];
  if (!dir) {
    console.warn(`No directory defined for pattern: ${key}`);
    return;
  }

  const fileName =
    key
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "") + ".ts";
  const filePath = path.join(baseDir, "patterns", dir, fileName);

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
  console.log(`Created file: ${filePath}`);

  // Update the index.ts file for this directory
  const indexPath = path.join(baseDir, "patterns", dir, "index.ts");
  let indexContent = fs.readFileSync(indexPath, "utf8");

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
Object.values(patternDirectories).forEach((dir) => {
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
Object.values(patternDirectories).forEach((dir, index, array) => {
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

console.log("Pattern extraction complete!");
