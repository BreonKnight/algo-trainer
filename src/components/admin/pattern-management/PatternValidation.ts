import { Pattern } from "../../../lib/types/pattern-management";

export const editDistance = (s1: string, s2: string): number => {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1))
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
};

export const calculateStringSimilarity = (
  str1: string,
  str2: string
): number => {
  if (!str1 || !str2) return 0;
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / longerLength;
};

export const findDuplicatePatterns = (patterns: Pattern[]) => {
  const duplicates: Array<{
    pattern1: string;
    pattern2: string;
    similarity: number;
  }> = [];

  for (let i = 0; i < patterns.length; i++) {
    for (let j = i + 1; j < patterns.length; j++) {
      const nameSimilarity = calculateStringSimilarity(
        patterns[i].name,
        patterns[j].name
      );
      const descSimilarity = calculateStringSimilarity(
        patterns[i].description,
        patterns[j].description
      );

      const similarity = nameSimilarity * 0.6 + descSimilarity * 0.4;

      if (similarity > 0.7) {
        duplicates.push({
          pattern1: patterns[i].name,
          pattern2: patterns[j].name,
          similarity: Math.round(similarity * 100),
        });
      }
    }
  }

  return duplicates.sort((a, b) => b.similarity - a.similarity);
};

export const findIncompletePatterns = (patterns: Pattern[]): string[] => {
  return patterns
    .filter(
      (pattern) =>
        !pattern.name ||
        !pattern.category ||
        !pattern.description ||
        !pattern.implementation ||
        pattern.testCases.length === 0
    )
    .map((pattern) => pattern.name);
};

export const validatePatternNames = (
  patterns: Pattern[]
): Array<{ pattern: string; issue: string }> => {
  const issues: Array<{ pattern: string; issue: string }> = [];

  patterns.forEach((pattern) => {
    if (!pattern.name) {
      issues.push({
        pattern: "Unnamed Pattern",
        issue: "Pattern has no name",
      });
      return;
    }

    if (!/^[A-Z][a-zA-Z\s]*$/.test(pattern.name)) {
      issues.push({
        pattern: pattern.name,
        issue:
          "Name should start with capital letter and contain only letters and spaces",
      });
    }

    if (pattern.name.length > 50) {
      issues.push({
        pattern: pattern.name,
        issue: "Name is too long (max 50 characters)",
      });
    }
  });

  return issues;
};

export const validatePatternCategories = (
  patterns: Pattern[],
  patternCategories: Record<string, number>
) => {
  const validCategories = Object.keys(patternCategories);
  return patterns
    .filter(
      (pattern) =>
        !validCategories.some((category) => pattern.category === category)
    )
    .map((pattern) => ({
      pattern: pattern.name,
      issue: `Invalid category: ${pattern.category}`,
    }));
};
