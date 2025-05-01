import { Pattern, PatternCategory } from "../types/pattern-management";

// In a real application, these would be API calls to your backend
export const patternManagementService = {
  // Save a new pattern
  savePattern: async (pattern: Pattern): Promise<Pattern> => {
    // TODO: Implement API call to save pattern
    console.log("Saving pattern:", pattern);
    return pattern;
  },

  // Update an existing pattern
  updatePattern: async (pattern: Pattern): Promise<Pattern> => {
    // TODO: Implement API call to update pattern
    console.log("Updating pattern:", pattern);
    return pattern;
  },

  // Delete a pattern
  deletePattern: async (patternId: string): Promise<void> => {
    // TODO: Implement API call to delete pattern
    console.log("Deleting pattern:", patternId);
  },

  // Get all patterns
  getPatterns: async (): Promise<Pattern[]> => {
    // Sample patterns for testing
    return [
      {
        id: "1",
        name: "Binary Search",
        category: "Searching",
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)",
        description: "Efficient search algorithm for sorted arrays",
        monsterHunterContext:
          "Like finding a specific monster in a sorted list of monsters",
        example: "Finding a number in a sorted array",
        process: [
          "Initialize left and right pointers",
          "Calculate mid",
          "Compare and adjust pointers",
        ],
        implementation: "function binarySearch(arr, target) { ... }",
        testCases: [
          {
            name: "Basic Test",
            input: "[1,2,3,4,5], 3",
            expectedOutput: "2",
            monsterHunterTip:
              "Like finding a Rathalos in a sorted list of monsters",
          },
        ],
      },
      {
        id: "2",
        name: "Quick Sort",
        category: "Sorting",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(log n)",
        description: "Efficient sorting algorithm using divide and conquer",
        monsterHunterContext: "Like organizing your monster materials by type",
        example: "Sorting an array of numbers",
        process: [
          "Choose pivot",
          "Partition array",
          "Recursively sort subarrays",
        ],
        implementation: "function quickSort(arr) { ... }",
        testCases: [
          {
            name: "Basic Test",
            input: "[5,2,8,1,9]",
            expectedOutput: "[1,2,5,8,9]",
            monsterHunterTip: "Like organizing your monster materials by type",
          },
        ],
      },
    ];
  },

  // Get pattern categories
  getCategories: async (): Promise<PatternCategory[]> => {
    // TODO: Implement API call to get categories
    console.log("Getting categories");
    return [];
  },

  // Generate pattern files
  generatePatternFiles: async (pattern: Pattern): Promise<void> => {
    // TODO: Implement file generation logic
    console.log("Generating pattern files:", pattern);
  },

  // Validate pattern data
  validatePattern: (pattern: Pattern): string[] => {
    const errors: string[] = [];

    if (!pattern.name) errors.push("Pattern name is required");
    if (!pattern.category) errors.push("Category is required");
    if (!pattern.timeComplexity) errors.push("Time complexity is required");
    if (!pattern.spaceComplexity) errors.push("Space complexity is required");
    if (!pattern.description) errors.push("Description is required");
    if (!pattern.monsterHunterContext)
      errors.push("Monster Hunter context is required");
    if (!pattern.example) errors.push("Example is required");
    if (!pattern.implementation) errors.push("Implementation is required");
    if (pattern.process.length === 0)
      errors.push("At least one process step is required");
    if (pattern.testCases.length === 0)
      errors.push("At least one test case is required");

    return errors;
  },

  // Check for duplicate patterns
  checkForDuplicates: async (
    pattern: Pattern,
    existingPatterns: Pattern[]
  ): Promise<{
    exactMatches: Pattern[];
    similarMatches: Pattern[];
  }> => {
    const exactMatches: Pattern[] = [];
    const similarMatches: Pattern[] = [];

    // Check for exact matches by name
    const nameMatches = existingPatterns.filter(
      (p) => p.name.toLowerCase() === pattern.name.toLowerCase()
    );
    exactMatches.push(...nameMatches);

    // Check for similar matches using implementation similarity
    const similarThreshold = 0.8; // 80% similarity threshold
    for (const existingPattern of existingPatterns) {
      if (nameMatches.includes(existingPattern)) continue;

      // Calculate similarity between implementations
      const similarity = calculateStringSimilarity(
        pattern.implementation,
        existingPattern.implementation
      );

      if (similarity >= similarThreshold) {
        similarMatches.push(existingPattern);
      }
    }

    return { exactMatches, similarMatches };
  },

  // Helper function to calculate string similarity (Levenshtein distance based)
  calculateStringSimilarity: (str1: string, str2: string): number => {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix: number[][] = [];

    // Initialize matrix
    for (let i = 0; i <= len1; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
      matrix[0][j] = j;
    }

    // Fill in the matrix
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          );
        }
      }
    }

    // Calculate similarity ratio
    const distance = matrix[len1][len2];
    const maxLength = Math.max(len1, len2);
    return 1 - distance / maxLength;
  },
};

// Helper function to calculate string similarity
function calculateStringSimilarity(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];

  // Initialize matrix
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Fill in the matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        );
      }
    }
  }

  // Calculate similarity ratio
  const distance = matrix[len1][len2];
  const maxLength = Math.max(len1, len2);
  return 1 - distance / maxLength;
}
