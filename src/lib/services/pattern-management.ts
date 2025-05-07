import { algorithmPatterns } from "@/components/algorithm-trainer/patterns";
import { Pattern, PatternCategory } from "@/lib/types/pattern-management";

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
    // Convert algorithm patterns to Pattern format
    return Object.entries(algorithmPatterns).map(([title, pattern]) => ({
      id: title.toLowerCase().replace(/\s+/g, "-"),
      name: title,
      category: pattern.category,
      timeComplexity: pattern.timeComplexity,
      spaceComplexity: pattern.spaceComplexity,
      description: pattern.description,
      monsterHunterContext: pattern.description, // Using description as context for now
      example: pattern.example,
      process: pattern.keySteps || [],
      implementation: pattern.implementation,
      testCases: [
        {
          name: "Basic Test",
          input: pattern.example,
          expectedOutput: "Expected output based on example",
          monsterHunterTip: pattern.description,
        },
      ],
    }));
  },

  // Get pattern categories
  getCategories: async (): Promise<PatternCategory[]> => {
    const patterns = await patternManagementService.getPatterns();
    const categories = new Set(patterns.map((p) => p.category));
    return Array.from(categories).map((category) => ({
      name: category,
      patterns: patterns.filter((p) => p.category === category).map((p) => p.id),
    }));
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
    if (!pattern.monsterHunterContext) errors.push("Monster Hunter context is required");
    if (!pattern.example) errors.push("Example is required");
    if (!pattern.implementation) errors.push("Implementation is required");
    if (pattern.process.length === 0) errors.push("At least one process step is required");
    if (pattern.testCases.length === 0) errors.push("At least one test case is required");

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
      const similarity = patternManagementService.calculateStringSimilarity(
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
