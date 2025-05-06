import { PatternKey, PATTERN_KEYS, MonsterHunterPattern } from "./types.js";
import { patternMapping } from "./mapping.js";
import { AlgorithmPattern } from "../../components/algorithm-trainer/types/pattern-types.js";

interface VerificationResult {
  missingPatterns: {
    regular: PatternKey[];
    monsterHunter: PatternKey[];
  };
  inconsistentPatterns: {
    name: PatternKey;
    regular: Partial<AlgorithmPattern>;
    monsterHunter: Partial<MonsterHunterPattern>;
  }[];
  duplicatePatterns: PatternKey[];
}

export function verifyPatterns(
  regularPatterns: Partial<Record<PatternKey, AlgorithmPattern>>,
  monsterHunterPatterns: Partial<Record<PatternKey, MonsterHunterPattern>>
): VerificationResult {
  const result: VerificationResult = {
    missingPatterns: {
      regular: [],
      monsterHunter: [],
    },
    inconsistentPatterns: [],
    duplicatePatterns: [],
  };

  // Check for missing patterns
  for (const key of PATTERN_KEYS) {
    if (!regularPatterns[key]) {
      result.missingPatterns.regular.push(key);
    }
    if (!monsterHunterPatterns[key]) {
      result.missingPatterns.monsterHunter.push(key);
    }
  }

  // Check for inconsistent patterns
  for (const key of PATTERN_KEYS) {
    const regular = regularPatterns[key];
    const monsterHunter = monsterHunterPatterns[key];

    if (regular && monsterHunter) {
      // Check for inconsistencies in basic properties
      if (
        regular.title !== monsterHunter.title ||
        regular.description !== monsterHunter.description ||
        regular.category !== monsterHunter.category
      ) {
        result.inconsistentPatterns.push({
          name: key,
          regular,
          monsterHunter,
        });
      }
    }
  }

  // Check for duplicate patterns in mapping
  const mappedKeys = new Set<string>();
  for (const value of Object.values(patternMapping)) {
    if (mappedKeys.has(value)) {
      result.duplicatePatterns.push(value as PatternKey);
    }
    mappedKeys.add(value);
  }

  return result;
}

export function generateVerificationReport(result: VerificationResult): string {
  const report: string[] = [];

  // Missing Patterns Report
  if (result.missingPatterns.regular.length > 0) {
    report.push("Missing Regular Patterns:");
    report.push(result.missingPatterns.regular.join(", "));
    report.push("");
  }

  if (result.missingPatterns.monsterHunter.length > 0) {
    report.push("Missing Monster Hunter Patterns:");
    report.push(result.missingPatterns.monsterHunter.join(", "));
    report.push("");
  }

  // Inconsistent Patterns Report
  if (result.inconsistentPatterns.length > 0) {
    report.push("Inconsistent Patterns:");
    for (const pattern of result.inconsistentPatterns) {
      report.push(`\n${pattern.name}:`);
      report.push("Regular Pattern:");
      report.push(`  Title: ${pattern.regular.title}`);
      report.push(`  Description: ${pattern.regular.description}`);
      report.push(`  Category: ${pattern.regular.category}`);
      report.push("Monster Hunter Pattern:");
      report.push(`  Title: ${pattern.monsterHunter.monsterHunterTitle}`);
      report.push(`  Description: ${pattern.monsterHunter.monsterHunterDescription}`);
      report.push(`  Category: ${pattern.monsterHunter.category}`);
    }
    report.push("");
  }

  // Duplicate Patterns Report
  if (result.duplicatePatterns.length > 0) {
    report.push("Duplicate Patterns in Mapping:");
    report.push(result.duplicatePatterns.join(", "));
  }

  return report.join("\n");
}
