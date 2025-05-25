const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

// Map of old import paths to new shared paths
const importMappings = {
  // Core Algorithm Components
  "@/components/features/algorithm-trainer/components/core/AlgorithmTrainer":
    "@algo-trainer/shared/components/algorithm-trainer/AlgorithmTrainer",
  "@/components/features/algorithm-trainer/components/core/AlgorithmSelector":
    "@algo-trainer/shared/components/algorithm-trainer/AlgorithmSelector",
  "@/components/features/algorithm-trainer/components/core/AlgorithmDebugger":
    "@algo-trainer/shared/components/algorithm-trainer/AlgorithmDebugger",
  "@/components/features/algorithm-trainer/components/core/AlgorithmComparison":
    "@algo-trainer/shared/components/algorithm-trainer/AlgorithmComparison",
  "@/components/features/algorithm-trainer/components/core/PythonTechniques":
    "@algo-trainer/shared/components/algorithm-trainer/PythonTechniques",

  // Visualization Components
  "@/components/features/algorithm-trainer/components/visualization/AlgorithmVisualizer":
    "@algo-trainer/shared/components/visualization/AlgorithmVisualizer",
  "@/components/features/algorithm-trainer/components/visualization/CodeEditor":
    "@algo-trainer/shared/components/visualization/CodeEditor",
  "@/components/features/algorithm-trainer/components/visualization/ReplCard":
    "@algo-trainer/shared/components/visualization/ReplCard",
  "@/components/features/algorithm-trainer/components/visualization/AnswerCard":
    "@algo-trainer/shared/components/visualization/AnswerCard",
  "@/components/features/algorithm-trainer/components/visualization/PatternCard":
    "@algo-trainer/shared/components/visualization/PatternCard",
  "@/components/features/algorithm-trainer/components/visualization/TestCases":
    "@algo-trainer/shared/components/visualization/TestCases",

  // Data Structures
  "@/components/features/algorithm-trainer/patterns/data-structures/queue-implementation":
    "@algo-trainer/shared/data-structures/queue",
  "@/components/features/algorithm-trainer/patterns/data-structures/stack-implementation":
    "@algo-trainer/shared/data-structures/stack",
  "@/components/features/algorithm-trainer/patterns/data-structures/linked-list":
    "@algo-trainer/shared/data-structures/linked-list",
  "@/components/features/algorithm-trainer/patterns/data-structures/doubly-linked-list":
    "@algo-trainer/shared/data-structures/doubly-linked-list",
  "@/components/features/algorithm-trainer/patterns/data-structures/circular-linked-list":
    "@algo-trainer/shared/data-structures/circular-linked-list",
  "@/components/features/algorithm-trainer/patterns/data-structures/binary-search-tree":
    "@algo-trainer/shared/data-structures/binary-search-tree",
  "@/components/features/algorithm-trainer/patterns/data-structures/red-black-tree":
    "@algo-trainer/shared/data-structures/red-black-tree",
  "@/components/features/algorithm-trainer/patterns/data-structures/b-tree":
    "@algo-trainer/shared/data-structures/b-tree",
  "@/components/features/algorithm-trainer/patterns/data-structures/heap-implementation":
    "@algo-trainer/shared/data-structures/heap",
  "@/components/features/algorithm-trainer/patterns/data-structures/hash-table":
    "@algo-trainer/shared/data-structures/hash-table",
  "@/components/features/algorithm-trainer/patterns/data-structures/trie":
    "@algo-trainer/shared/data-structures/trie",
  "@/components/features/algorithm-trainer/patterns/data-structures/segment-tree":
    "@algo-trainer/shared/data-structures/segment-tree",
  "@/components/features/algorithm-trainer/patterns/data-structures/sparse-table":
    "@algo-trainer/shared/data-structures/sparse-table",
  "@/components/features/algorithm-trainer/patterns/data-structures/union-find":
    "@algo-trainer/shared/data-structures/union-find",

  // Graph Algorithms
  "@/components/features/algorithm-trainer/patterns/graph/dfs-graph":
    "@algo-trainer/shared/algorithms/graph/dfs",
  "@/components/features/algorithm-trainer/patterns/graph/graph-representation":
    "@algo-trainer/shared/algorithms/graph/representation",

  // Types
  "@/components/features/algorithm-trainer/types/types":
    "@algo-trainer/shared/types/algorithm-types",

  // Stores
  "@/components/features/practice/Practice": "@algo-trainer/shared/stores/practice-store.tsx",
  "@/components/features/algorithm-trainer/hooks/usePatternManager":
    "@algo-trainer/shared/stores/pattern-store",
  "@/components/features/algorithm-trainer/hooks/usePanelManager":
    "@algo-trainer/shared/stores/panel-store",

  // Utils
  "@/lib/utils": "@algo-trainer/shared/utils/common",
  "@/lib/pseudocode/utils/pattern-mapping": "@algo-trainer/shared/utils/pattern-mapping",
};

// Function to update imports in a file
async function updateImportsInFile(filePath) {
  try {
    let content = await fs.readFile(filePath, "utf8");
    let modified = false;

    // Update import statements
    for (const [oldPath, newPath] of Object.entries(importMappings)) {
      const importRegex = new RegExp(`from ['"]${oldPath}['"]`, "g");
      const requireRegex = new RegExp(`require\\(['"]${oldPath}['"]\\)`, "g");

      if (importRegex.test(content) || requireRegex.test(content)) {
        content = content.replace(importRegex, `from '${newPath}'`);
        content = content.replace(requireRegex, `require('${newPath}')`);
        modified = true;
      }
    }

    if (modified) {
      await fs.writeFile(filePath, content, "utf8");
      console.log(`Updated imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Function to process all TypeScript and JavaScript files
async function updateAllImports() {
  const files = glob.sync("src/**/*.{ts,tsx,js,jsx}", {
    ignore: ["**/node_modules/**", "**/dist/**", "**/build/**"],
  });

  for (const file of files) {
    await updateImportsInFile(file);
  }
}

// Execute the update
updateAllImports().catch(console.error);
