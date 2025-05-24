import { monsterHunterGuidePattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-guide";
import { monsterHunterPattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-pattern";
import { monsterHunterTestDataPattern } from "@/components/features/algorithm-trainer/patterns/monster-hunter/monster-hunter-test-data";
import { PATTERN_KEYS, PatternKey } from "@/lib/patterns/types";

interface ValidationResult {
  missingKeys: {
    pattern: PatternKey[];
    testData: PatternKey[];
    guide: PatternKey[];
  };
  duplicateKeys: {
    pattern: PatternKey[];
    testData: PatternKey[];
    guide: PatternKey[];
  };
  invalidStructures: {
    pattern: PatternKey[];
    testData: PatternKey[];
    guide: PatternKey[];
  };
  crossFileComparison: {
    onlyInPattern: PatternKey[];
    onlyInTestData: PatternKey[];
    onlyInGuide: PatternKey[];
  };
}

function validatePatterns(): ValidationResult {
  const result: ValidationResult = {
    missingKeys: {
      pattern: [],
      testData: [],
      guide: [],
    },
    duplicateKeys: {
      pattern: [],
      testData: [],
      guide: [],
    },
    invalidStructures: {
      pattern: [],
      testData: [],
      guide: [],
    },
    crossFileComparison: {
      onlyInPattern: [],
      onlyInTestData: [],
      onlyInGuide: [],
    },
  };

  // Get all keys from each source
  const patternKeys = [monsterHunterPattern.title] as PatternKey[];
  const testDataKeys = [monsterHunterTestDataPattern.title] as PatternKey[];
  const guideKeys = [monsterHunterGuidePattern.title] as PatternKey[];

  // Check for missing keys
  PATTERN_KEYS.forEach((key) => {
    if (!patternKeys.includes(key as PatternKey))
      result.missingKeys.pattern.push(key as PatternKey);
    if (!testDataKeys.includes(key as PatternKey))
      result.missingKeys.testData.push(key as PatternKey);
    if (!guideKeys.includes(key as PatternKey)) result.missingKeys.guide.push(key as PatternKey);
  });

  // Check for duplicate keys
  function findDuplicates(arr: PatternKey[]): PatternKey[] {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
  }

  result.duplicateKeys.pattern = findDuplicates(patternKeys);
  result.duplicateKeys.testData = findDuplicates(testDataKeys);
  result.duplicateKeys.guide = findDuplicates(guideKeys);

  // Check for invalid structures
  function validatePattern(key: PatternKey): boolean {
    return key === monsterHunterPattern.title;
  }

  function validateTestData(key: PatternKey): boolean {
    return key === monsterHunterTestDataPattern.title;
  }

  function validateGuide(key: PatternKey): boolean {
    return key === monsterHunterGuidePattern.title;
  }

  patternKeys.forEach((key) => {
    if (!validatePattern(key)) result.invalidStructures.pattern.push(key);
  });

  testDataKeys.forEach((key) => {
    if (!validateTestData(key)) result.invalidStructures.testData.push(key);
  });

  guideKeys.forEach((key) => {
    if (!validateGuide(key)) result.invalidStructures.guide.push(key);
  });

  // Cross-file comparison
  result.crossFileComparison.onlyInPattern = patternKeys.filter(
    (key) => !testDataKeys.includes(key) && !guideKeys.includes(key)
  );

  result.crossFileComparison.onlyInTestData = testDataKeys.filter(
    (key) => !patternKeys.includes(key) && !guideKeys.includes(key)
  );

  result.crossFileComparison.onlyInGuide = guideKeys.filter(
    (key) => !patternKeys.includes(key) && !testDataKeys.includes(key)
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
