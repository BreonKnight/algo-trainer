import { PatternKey } from "../src/components/algorithm-trainer/types/pattern-types";
import { algorithmPatterns } from "../src/components/algorithm-trainer/patterns";
import { allMonsterHunterPatterns } from "../src/components/algorithm-trainer/monsterHunterPatternsCombined";
import { patternMapping } from "../src/lib/pseudocode/utils/pattern-mapping";
import { monsterHunterTestData } from "../src/components/algorithm-trainer/monsterHunterTestData";
import { monsterHunterExplanations } from "../src/components/algorithm-trainer/monsterHunterExplanations";

function findSimilarPatterns(
  patternKeys: PatternKey[]
): Record<string, string[]> {
  const similarPatterns: Record<string, string[]> = {};

  // Helper function to normalize pattern names for comparison
  const normalizeName = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "") // Remove non-alphanumeric characters
      .replace(/\s+/g, ""); // Remove spaces
  };

  // Check each pattern against all others
  for (let i = 0; i < patternKeys.length; i++) {
    const currentPattern = patternKeys[i];
    const normalizedCurrent = normalizeName(currentPattern);
    const similar: string[] = [];

    for (let j = 0; j < patternKeys.length; j++) {
      if (i === j) continue; // Skip self-comparison

      const otherPattern = patternKeys[j];
      const normalizedOther = normalizeName(otherPattern);

      // Check for similar patterns using various criteria
      if (
        // Exact match after normalization
        normalizedCurrent === normalizedOther ||
        // One is a substring of the other
        normalizedCurrent.includes(normalizedOther) ||
        normalizedOther.includes(normalizedCurrent) ||
        // Levenshtein distance is small (for similar names)
        (normalizedCurrent.length > 3 &&
          normalizedOther.length > 3 &&
          levenshteinDistance(normalizedCurrent, normalizedOther) <= 2)
      ) {
        similar.push(otherPattern);
      }
    }

    if (similar.length > 0) {
      similarPatterns[currentPattern] = similar;
    }
  }

  return similarPatterns;
}

// Helper function to calculate Levenshtein distance
function levenshteinDistance(a: string, b: string): number {
  const matrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + substitutionCost // substitution
      );
    }
  }

  return matrix[b.length][a.length];
}

function checkPatternMapping() {
  console.log("Checking pattern mapping consistency...\n");

  // Get all pattern keys from the mapping
  const patternKeys = Object.keys(patternMapping) as PatternKey[];

  // Check if all patterns have regular implementations
  const missingRegularPatterns = patternKeys.filter(
    (key: PatternKey) => !algorithmPatterns[key]
  );

  // Check if all patterns have Monster Hunter implementations
  const missingMonsterHunterPatterns = patternKeys.filter(
    (key: PatternKey) => !allMonsterHunterPatterns.has(key)
  );

  // Check if all patterns have test data
  const missingTestData = patternKeys.filter(
    (key: PatternKey) => !monsterHunterTestData.has(key)
  );

  // Check if all patterns have explanations
  const missingExplanations = patternKeys.filter(
    (key: PatternKey) => !monsterHunterExplanations[key]
  );

  // Check if all patterns have mapping entries
  const missingMappings = patternKeys.filter(
    (key: PatternKey) => !patternMapping[key]
  );

  // Log results
  if (missingRegularPatterns.length > 0) {
    console.log("Missing Regular Patterns:");
    missingRegularPatterns.forEach((pattern: PatternKey) =>
      console.log(`- ${pattern}`)
    );
  } else {
    console.log("✓ All patterns have regular implementations");
  }

  if (missingMonsterHunterPatterns.length > 0) {
    console.log("\nMissing Monster Hunter Patterns:");
    missingMonsterHunterPatterns.forEach((pattern: PatternKey) =>
      console.log(`- ${pattern}`)
    );
  } else {
    console.log("\n✓ All patterns have Monster Hunter implementations");
  }

  if (missingTestData.length > 0) {
    console.log("\nMissing Test Data:");
    missingTestData.forEach((pattern: PatternKey) =>
      console.log(`- ${pattern}`)
    );
  } else {
    console.log("\n✓ All patterns have test data");
  }

  if (missingExplanations.length > 0) {
    console.log("\nMissing Explanations:");
    missingExplanations.forEach((pattern: PatternKey) =>
      console.log(`- ${pattern}`)
    );
  } else {
    console.log("\n✓ All patterns have explanations");
  }

  if (missingMappings.length > 0) {
    console.log("\nMissing Pattern Mappings:");
    missingMappings.forEach((pattern: PatternKey) =>
      console.log(`- ${pattern}`)
    );
  } else {
    console.log("\n✓ All patterns have mapping entries");
  }

  // Check for inconsistencies in pattern names
  const regularPatternKeys = Object.keys(algorithmPatterns) as PatternKey[];
  const monsterHunterPatternKeys = Array.from(
    allMonsterHunterPatterns.keys()
  ) as PatternKey[];
  const testDataKeys = Array.from(monsterHunterTestData.keys()) as PatternKey[];
  const explanationKeys = Object.keys(
    monsterHunterExplanations
  ) as PatternKey[];
  const mappingKeys = Object.keys(patternMapping) as PatternKey[];

  const allKeys = new Set<PatternKey>([
    ...regularPatternKeys,
    ...monsterHunterPatternKeys,
    ...testDataKeys,
    ...explanationKeys,
    ...mappingKeys,
  ]);

  console.log("\nPattern Counts:");
  console.log(`- Regular Patterns: ${regularPatternKeys.length}`);
  console.log(`- Monster Hunter Patterns: ${monsterHunterPatternKeys.length}`);
  console.log(`- Test Data Patterns: ${testDataKeys.length}`);
  console.log(`- Explanation Patterns: ${explanationKeys.length}`);
  console.log(`- Mapping Patterns: ${mappingKeys.length}`);
  console.log(`- Total Unique Patterns: ${allKeys.size}`);

  // Check for patterns that exist in one place but not others
  const inconsistencies: Partial<Record<PatternKey, string[]>> = {};
  allKeys.forEach((key: PatternKey) => {
    const missingIn: string[] = [];
    if (!regularPatternKeys.includes(key)) missingIn.push("Regular Patterns");
    if (!monsterHunterPatternKeys.includes(key))
      missingIn.push("Monster Hunter Patterns");
    if (!testDataKeys.includes(key)) missingIn.push("Test Data");
    if (!explanationKeys.includes(key)) missingIn.push("Explanations");
    if (!mappingKeys.includes(key)) missingIn.push("Mappings");

    if (missingIn.length > 0) {
      inconsistencies[key] = missingIn;
    }
  });

  if (Object.keys(inconsistencies).length > 0) {
    console.log("\nPattern Inconsistencies:");
    Object.entries(inconsistencies).forEach(([pattern, missingIn]) => {
      console.log(`\n${pattern}:`);
      missingIn.forEach((location) => console.log(`- Missing in ${location}`));
    });
  } else {
    console.log("\n✓ No pattern inconsistencies found");
  }

  // Check for similar patterns
  const similarPatterns = findSimilarPatterns(patternKeys);

  if (Object.keys(similarPatterns).length > 0) {
    console.log("\nSimilar Patterns Found:");
    Object.entries(similarPatterns).forEach(([pattern, similar]) => {
      console.log(`\n${pattern}:`);
      similar.forEach((similarPattern) => console.log(`- ${similarPattern}`));
    });
  } else {
    console.log("\n✓ No similar patterns found");
  }
}

checkPatternMapping();
