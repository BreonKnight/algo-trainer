import { monsterHunterExplanations } from "@/components/algorithm-trainer/monsterHunterExplanations";
import { monsterHunterExplanations as monsterHunterExplanationsNew } from "@/components/algorithm-trainer/monsterHunterExplanationsNew";
import { monsterHunterPatternsByCategory } from "@/components/algorithm-trainer/monsterHunterPatternsCombined";
import { monsterHunterTestData } from "@/components/algorithm-trainer/monsterHunterTestData";
import { PATTERN_KEYS } from "@/lib/patterns/types";

type PatternKey = (typeof PATTERN_KEYS)[number];

interface ValidationResult {
  missingKeys: {
    testData: PatternKey[];
    patternsCombined: PatternKey[];
    explanations: PatternKey[];
    explanationsNew: PatternKey[];
  };
  duplicateKeys: {
    testData: PatternKey[];
    patternsCombined: PatternKey[];
    explanations: PatternKey[];
    explanationsNew: PatternKey[];
  };
  invalidStructures: {
    testData: PatternKey[];
    patternsCombined: PatternKey[];
    explanations: PatternKey[];
    explanationsNew: PatternKey[];
  };
  crossFileComparison: {
    onlyInTestData: PatternKey[];
    onlyInPatternsCombined: PatternKey[];
    onlyInExplanations: PatternKey[];
    onlyInExplanationsNew: PatternKey[];
  };
}

function validatePatterns(): ValidationResult {
  const result: ValidationResult = {
    missingKeys: {
      testData: [],
      patternsCombined: [],
      explanations: [],
      explanationsNew: [],
    },
    duplicateKeys: {
      testData: [],
      patternsCombined: [],
      explanations: [],
      explanationsNew: [],
    },
    invalidStructures: {
      testData: [],
      patternsCombined: [],
      explanations: [],
      explanationsNew: [],
    },
    crossFileComparison: {
      onlyInTestData: [],
      onlyInPatternsCombined: [],
      onlyInExplanations: [],
      onlyInExplanationsNew: [],
    },
  };

  // Get all keys from each source
  const testDataKeys = Array.from(monsterHunterTestData.keys()) as PatternKey[];
  const patternsCombinedKeys = Object.values(
    monsterHunterPatternsByCategory
  ).flat() as PatternKey[];
  const explanationsKeys = Object.keys(monsterHunterExplanations) as PatternKey[];
  const explanationsNewKeys = Object.keys(monsterHunterExplanationsNew) as PatternKey[];

  // Check for missing keys
  PATTERN_KEYS.forEach((key) => {
    if (!testDataKeys.includes(key as PatternKey))
      result.missingKeys.testData.push(key as PatternKey);
    if (!patternsCombinedKeys.includes(key as PatternKey))
      result.missingKeys.patternsCombined.push(key as PatternKey);
    if (!explanationsKeys.includes(key as PatternKey))
      result.missingKeys.explanations.push(key as PatternKey);
    if (!explanationsNewKeys.includes(key as PatternKey))
      result.missingKeys.explanationsNew.push(key as PatternKey);
  });

  // Check for duplicate keys
  function findDuplicates(arr: PatternKey[]): PatternKey[] {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
  }

  result.duplicateKeys.testData = findDuplicates(testDataKeys);
  result.duplicateKeys.patternsCombined = findDuplicates(patternsCombinedKeys);
  result.duplicateKeys.explanations = findDuplicates(explanationsKeys);
  result.duplicateKeys.explanationsNew = findDuplicates(explanationsNewKeys);

  // Check for invalid structures
  function validateTestData(key: PatternKey): boolean {
    const value = monsterHunterTestData.get(key);
    return typeof value === "string" && value.length > 0;
  }

  function validatePatternsCombined(key: PatternKey): boolean {
    return patternsCombinedKeys.includes(key);
  }

  function validateExplanations(key: PatternKey): boolean {
    const explanation = monsterHunterExplanations[key];
    return !!(
      explanation &&
      typeof explanation.title === "string" &&
      typeof explanation.description === "string" &&
      typeof explanation.example === "string" &&
      Array.isArray(explanation.tips) &&
      explanation.tips.every((tip: string) => typeof tip === "string")
    );
  }

  function validateExplanationsNew(key: PatternKey): boolean {
    const explanation = monsterHunterExplanationsNew[key];
    return !!(
      explanation &&
      typeof explanation.title === "string" &&
      typeof explanation.description === "string" &&
      typeof explanation.example === "string" &&
      Array.isArray(explanation.tips) &&
      explanation.tips.every((tip: string) => typeof tip === "string")
    );
  }

  testDataKeys.forEach((key) => {
    if (!validateTestData(key)) result.invalidStructures.testData.push(key);
  });

  patternsCombinedKeys.forEach((key) => {
    if (!validatePatternsCombined(key)) result.invalidStructures.patternsCombined.push(key);
  });

  explanationsKeys.forEach((key) => {
    if (!validateExplanations(key)) result.invalidStructures.explanations.push(key);
  });

  explanationsNewKeys.forEach((key) => {
    if (!validateExplanationsNew(key)) result.invalidStructures.explanationsNew.push(key);
  });

  // Cross-file comparison
  result.crossFileComparison.onlyInTestData = testDataKeys.filter(
    (key) =>
      !patternsCombinedKeys.includes(key) &&
      !explanationsKeys.includes(key) &&
      !explanationsNewKeys.includes(key)
  );

  result.crossFileComparison.onlyInPatternsCombined = patternsCombinedKeys.filter(
    (key) =>
      !testDataKeys.includes(key) &&
      !explanationsKeys.includes(key) &&
      !explanationsNewKeys.includes(key)
  );

  result.crossFileComparison.onlyInExplanations = explanationsKeys.filter(
    (key) =>
      !testDataKeys.includes(key) &&
      !patternsCombinedKeys.includes(key) &&
      !explanationsNewKeys.includes(key)
  );

  result.crossFileComparison.onlyInExplanationsNew = explanationsNewKeys.filter(
    (key) =>
      !testDataKeys.includes(key) &&
      !patternsCombinedKeys.includes(key) &&
      !explanationsKeys.includes(key)
  );

  return result;
}

// Run validation and print results
const validationResult = validatePatterns();

console.log("Pattern Validation Results:");
console.log("=========================");

// Print missing keys
console.log("\nMissing Keys:");
console.log("-------------");
Object.entries(validationResult.missingKeys).forEach(([file, keys]) => {
  if (keys.length > 0) {
    console.log(`\n${file}:`);
    keys.forEach((key) => console.log(`- ${key}`));
  }
});

// Print duplicate keys
console.log("\nDuplicate Keys:");
console.log("---------------");
Object.entries(validationResult.duplicateKeys).forEach(([file, keys]) => {
  if (keys.length > 0) {
    console.log(`\n${file}:`);
    keys.forEach((key) => console.log(`- ${key}`));
  }
});

// Print invalid structures
console.log("\nInvalid Structures:");
console.log("------------------");
Object.entries(validationResult.invalidStructures).forEach(([file, keys]) => {
  if (keys.length > 0) {
    console.log(`\n${file}:`);
    keys.forEach((key) => console.log(`- ${key}`));
  }
});

// Print cross-file comparison
console.log("\nCross-File Comparison:");
console.log("---------------------");
Object.entries(validationResult.crossFileComparison).forEach(([file, keys]) => {
  if (keys.length > 0) {
    console.log(`\n${file}:`);
    keys.forEach((key) => console.log(`- ${key}`));
  }
});

// Export the validation function
export { validatePatterns };
