import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .toLowerCase();
}

function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "")
    .replace(/-/g, "")
    .replace(/_/g, "");
}

function toTitleCase(str: string): string {
  // Special cases
  const specialCases: Record<string, string> = {
    "kadane's algorithm": "Kadane's Algorithm",
    "a* search": "A* Search",
    "manacher's algorithm": "Manacher's Algorithm",
    "binary search on answer": "Binary Search on Answer",
    "knuth-morris-pratt": "Knuth-Morris-Pratt",
    "rabin-karp": "Rabin-Karp",
    "a star": "A* Search",
    "bellman-ford": "Bellman-Ford",
    "floyd-warshall": "Floyd-Warshall",
    "hopcroft-karp": "Hopcroft-Karp",
    "suffix array": "Suffix Array",
    "suffix tree": "Suffix Tree",
    "prefix sum": "Prefix Sums",
    "prefix sums": "Prefix Sums",
    "matrix chain multiplication": "Matrix Chain Multiplication",
    "matrix exponentiation": "Matrix Exponentiation",
    "matrix spiral traversal": "Matrix Spiral Traversal",
    "matrix traversal": "Matrix Traversal",
    "network flow": "Network Flow",
    "maximum bipartite matching": "Maximum Bipartite Matching",
    "state compression dp": "State Compression DP",
    "digit dp": "Digit DP",
    "tree dp": "Tree DP",
    "probability dp": "Probability DP",
    "graph dijkstra": "Graph Dijkstra",
    "graph kosaraju": "Graph Kosaraju",
    "monotonic queue": "Monotonic Queue",
    "monotonic stack": "Monotonic Stack",
    "queue implementation": "Queue Implementation",
    "stack implementation": "Stack Implementation",
    "circular linked list": "Circular Linked List",
    "hash table": "Hash Table",
    "heap implementation": "Heap Implementation",
    "linked list": "Linked List",
    "fast fourier transform": "Fast Fourier Transform",
    "job scheduling": "Job Scheduling",
    "fractional knapsack": "Fractional Knapsack",
    "hungarian algorithm": "Hungarian Algorithm",
    "radix sort": "Radix Sort",
    string: "String",
    "rotate matrix": "Matrix Operations",
    "bit manipulation": "Bit Manipulation",
  };

  const lowerStr = str.toLowerCase();
  if (specialCases[lowerStr]) {
    return specialCases[lowerStr];
  }

  // Special acronyms that should stay uppercase
  const acronyms = new Set(["KMP", "BFS", "DFS", "DP", "AVL", "B", "FFT", "LCP", "SCC", "SCCs"]);

  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => {
      const upperWord = word.toUpperCase();
      if (acronyms.has(upperWord)) {
        return upperWord;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

function fixFileNaming(filePath: string): void {
  const dir = path.dirname(filePath);
  const fileName = path.basename(filePath);
  const ext = path.extname(filePath);

  // Skip if already in correct format
  if (/^[a-z0-9]+(-[a-z0-9]+)*\.(ts|tsx)$/.test(fileName)) {
    return;
  }

  const newFileName = toKebabCase(fileName.replace(ext, "")) + ext;
  const newPath = path.join(dir, newFileName);

  if (filePath !== newPath) {
    fs.renameSync(filePath, newPath);
    console.log(`Renamed: ${filePath} -> ${newPath}`);
  }
}

function fixPatternVariable(content: string): string {
  return content.replace(/const\s+([a-zA-Z0-9_]+)\s*=/g, (_, varName) => {
    const newVarName = toCamelCase(varName) + "Pattern";
    return `const ${newVarName} =`;
  });
}

function fixPatternKey(content: string): string {
  return content.replace(/"([^"]+)":/g, (_, key) => {
    const newKey = toTitleCase(key);
    return `"${newKey}":`;
  });
}

function fixFileContent(filePath: string): void {
  let content = fs.readFileSync(filePath, "utf-8");
  const originalContent = content;

  // Fix pattern variables
  content = fixPatternVariable(content);

  // Fix pattern keys in index files
  if (path.basename(filePath) === "index.ts") {
    content = fixPatternKey(content);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed content in: ${filePath}`);
  }
}

function fixDirectory(dirPath: string): void {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fixDirectory(fullPath);
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      fixFileNaming(fullPath);
      fixFileContent(fullPath);
    }
  }
}

function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const patternsDir = path.join(__dirname, "..", "patterns");
  console.log("Starting to fix naming conventions...");
  fixDirectory(patternsDir);
  console.log("Finished fixing naming conventions!");
}

main();
