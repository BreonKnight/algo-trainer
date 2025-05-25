const fs = require("fs-extra");
const path = require("path");

// Define the source and destination mappings
const fileMappings = {
  // Common Components
  "src/components/common/ErrorBoundary.tsx": "shared/components/common/ErrorBoundary.tsx",
  "src/components/common/ProblemCard.tsx": "shared/components/common/ProblemCard.tsx",
  "src/components/common/ThemeProvider.tsx": "shared/components/common/ThemeProvider.tsx",
  "src/components/common/index.ts": "shared/components/common/index.ts",

  // Core Algorithm Components
  "src/components/features/algorithm-trainer/components/core/AlgorithmTrainer.tsx":
    "shared/components/algorithm-trainer/AlgorithmTrainer.tsx",
  "src/components/features/algorithm-trainer/components/core/AlgorithmSelector.tsx":
    "shared/components/algorithm-trainer/AlgorithmSelector.tsx",
  "src/components/features/algorithm-trainer/components/core/AlgorithmDebugger.tsx":
    "shared/components/algorithm-trainer/AlgorithmDebugger.tsx",
  "src/components/features/algorithm-trainer/components/core/AlgorithmComparison.tsx":
    "shared/components/algorithm-trainer/AlgorithmComparison.tsx",
  "src/components/features/algorithm-trainer/components/core/PythonTechniques.tsx":
    "shared/components/algorithm-trainer/PythonTechniques.tsx",

  // Algorithm Practice Components
  "src/components/features/algorithm-practice/AlgoGuide.tsx":
    "shared/components/algorithm-practice/AlgoGuide.tsx",
  "src/components/features/algorithm-practice/SolutionCard.tsx":
    "shared/components/algorithm-practice/SolutionCard.tsx",

  // Algorithm Tutorials Components
  "src/components/features/algorithm-tutorials/AlgorithmTutorials.tsx":
    "shared/components/algorithm-tutorials/AlgorithmTutorials.tsx",
  "src/components/features/algorithm-tutorials/TutorialListItem.tsx":
    "shared/components/algorithm-tutorials/TutorialListItem.tsx",

  // Progress Components
  "src/components/features/progress/ProgressView.tsx":
    "shared/components/progress/ProgressView.tsx",
  "src/components/features/progress/progress.tsx": "shared/components/progress/progress.tsx",

  // Systems Design Components
  "src/components/features/systemsDesign/SystemsDesign.tsx":
    "shared/components/systems-design/SystemsDesign.tsx",
  "src/components/features/systemsDesign/chapters.ts":
    "shared/components/systems-design/chapters.ts",

  // Timer Components
  "src/components/features/timer/Timer.tsx": "shared/components/timer/Timer.tsx",

  // Tutorial Components
  "src/components/features/tutorials/AlgorithmTutorial.tsx":
    "shared/components/tutorials/AlgorithmTutorial.tsx",
  "src/components/features/tutorials/types.ts": "shared/components/tutorials/types.ts",

  // Visualization Components
  "src/components/features/algorithm-trainer/components/visualization/AlgorithmVisualizer.tsx":
    "shared/components/visualization/AlgorithmVisualizer.tsx",
  "src/components/features/algorithm-trainer/components/visualization/CodeEditor.tsx":
    "shared/components/visualization/CodeEditor.tsx",
  "src/components/features/algorithm-trainer/components/visualization/ReplCard.tsx":
    "shared/components/visualization/ReplCard.tsx",
  "src/components/features/algorithm-trainer/components/visualization/AnswerCard.tsx":
    "shared/components/visualization/AnswerCard.tsx",
  "src/components/features/algorithm-trainer/components/visualization/PatternCard.tsx":
    "shared/components/visualization/PatternCard.tsx",
  "src/components/features/algorithm-trainer/components/visualization/TestCases.tsx":
    "shared/components/visualization/TestCases.tsx",

  // Data Structures
  "src/components/features/algorithm-trainer/patterns/data-structures/queue-implementation.ts":
    "shared/data-structures/queue.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/stack-implementation.ts":
    "shared/data-structures/stack.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/linked-list.ts":
    "shared/data-structures/linked-list.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/doubly-linked-list.ts":
    "shared/data-structures/doubly-linked-list.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/circular-linked-list.ts":
    "shared/data-structures/circular-linked-list.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/binary-search-tree.ts":
    "shared/data-structures/binary-search-tree.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/red-black-tree.ts":
    "shared/data-structures/red-black-tree.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/b-tree.ts":
    "shared/data-structures/b-tree.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/heap-implementation.ts":
    "shared/data-structures/heap.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/hash-table.ts":
    "shared/data-structures/hash-table.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/trie.ts":
    "shared/data-structures/trie.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/segment-tree.ts":
    "shared/data-structures/segment-tree.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/sparse-table.ts":
    "shared/data-structures/sparse-table.ts",
  "src/components/features/algorithm-trainer/patterns/data-structures/union-find.ts":
    "shared/data-structures/union-find.ts",

  // Graph Algorithms
  "src/components/features/algorithm-trainer/patterns/graph/dfs-graph.ts":
    "shared/algorithms/graph/dfs.ts",
  "src/components/features/algorithm-trainer/patterns/graph/graph-representation.ts":
    "shared/algorithms/graph/representation.ts",

  // Types
  "src/components/features/algorithm-trainer/types/types.ts": "shared/types/algorithm-types.ts",

  // Stores
  "src/components/features/practice/Practice.tsx": "shared/stores/practice-store.tsx",
  "src/components/features/algorithm-trainer/hooks/usePatternManager.ts":
    "shared/stores/pattern-store.ts",
  "src/components/features/algorithm-trainer/hooks/usePanelManager.ts":
    "shared/stores/panel-store.ts",

  // Utils
  "src/lib/utils.ts": "shared/utils/common.ts",
  "src/lib/pseudocode/utils/pattern-mapping.ts": "shared/utils/pattern-mapping.ts",
};

// Function to move files
async function moveFiles() {
  for (const [source, destination] of Object.entries(fileMappings)) {
    const sourcePath = path.join(process.cwd(), source);
    const destPath = path.join(process.cwd(), destination);

    try {
      // Create destination directory if it doesn't exist
      await fs.ensureDir(path.dirname(destPath));

      // Copy the file
      await fs.copy(sourcePath, destPath);
      console.log(`Moved ${source} to ${destination}`);
    } catch (error) {
      console.error(`Error moving ${source}:`, error);
    }
  }
}

// Execute the move
moveFiles().catch(console.error);
