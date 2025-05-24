import { monsterHunterExplanations } from "@/components/features/algorithm-trainer/data/monster-hunter/monsterHunterExplanations";
import { arrayPatterns } from "@/components/features/algorithm-trainer/patterns/array";
import { dataStructurePatterns } from "@/components/features/algorithm-trainer/patterns/data-structures";
import { dynamicProgrammingPatterns } from "@/components/features/algorithm-trainer/patterns/dynamic-programming";
import { graphPatterns } from "@/components/features/algorithm-trainer/patterns/graph";
import { greedyPatterns } from "@/components/features/algorithm-trainer/patterns/greedy";
import { matrixPatterns } from "@/components/features/algorithm-trainer/patterns/matrix";
import { numberTheoryPatterns } from "@/components/features/algorithm-trainer/patterns/number-theory";
import { searchingPatterns } from "@/components/features/algorithm-trainer/patterns/searching";
import { sortingPatterns } from "@/components/features/algorithm-trainer/patterns/sorting";
import { stringPatterns } from "@/components/features/algorithm-trainer/patterns/string";
import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";
import { MonsterHunterPattern, PatternCategory, PatternKey } from "@/lib/patterns/types";
import { verifyPatterns, generateVerificationReport } from "@/lib/patterns/verification";

// Convert monsterHunterExplanations to MonsterHunterPattern format
const monsterHunterPatterns: Partial<Record<PatternKey, MonsterHunterPattern>> = {};
for (const [key, value] of Object.entries(monsterHunterExplanations)) {
  const typedValue = value as {
    title: string;
    description: string;
    example: string;
    tips: string[];
  };
  monsterHunterPatterns[key as PatternKey] = {
    title: typedValue.title,
    description: typedValue.description,
    monsterHunterTitle: typedValue.title,
    monsterHunterDescription: typedValue.description,
    monsterHunterExample: typedValue.example,
    monsterHunterTips: typedValue.tips,
    category: "Other" as PatternCategory,
    example: typedValue.example,
    tips: typedValue.tips,
  };
}

// Import regular patterns and ensure they have the correct category type
const regularPatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
  ...Object.fromEntries(
    Object.entries(sortingPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Sorting" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(searchingPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Searching" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(dynamicProgrammingPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Dynamic Programming" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(graphPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Graph" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(dataStructurePatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Data Structure" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(stringPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "String" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(matrixPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Matrix" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(numberTheoryPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Number Theory" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(arrayPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Other" as PatternCategory },
    ])
  ),
  ...Object.fromEntries(
    Object.entries(greedyPatterns).map(([key, pattern]) => [
      key as PatternKey,
      { ...pattern, category: "Greedy" as PatternCategory },
    ])
  ),
};

// Run verification
const result = verifyPatterns(regularPatterns, monsterHunterPatterns);

// Generate and log report
const report = generateVerificationReport(result);
console.log("Pattern Verification Report:");
console.log(report);

// Export results for use in other files
export const verificationResults = {
  missingRegularPatterns: result.missingPatterns.regular,
  missingMonsterHunterPatterns: result.missingPatterns.monsterHunter,
  inconsistentPatterns: result.inconsistentPatterns,
  duplicatePatterns: result.duplicatePatterns,
};
