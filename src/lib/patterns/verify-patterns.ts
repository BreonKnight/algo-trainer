import { monsterHunterExplanations } from "@/components/algorithm-trainer/monsterHunterExplanations";
import { arrayPatterns } from "@/components/algorithm-trainer/patterns/array/index";
import { dataStructurePatterns } from "@/components/algorithm-trainer/patterns/data-structures/index";
import { dynamicProgrammingPatterns } from "@/components/algorithm-trainer/patterns/dynamic-programming/index";
import { graphPatterns } from "@/components/algorithm-trainer/patterns/graph/index";
import { greedyPatterns } from "@/components/algorithm-trainer/patterns/greedy/index";
import { matrixPatterns } from "@/components/algorithm-trainer/patterns/matrix/index";
import { numberTheoryPatterns } from "@/components/algorithm-trainer/patterns/number-theory/index";
import { searchingPatterns } from "@/components/algorithm-trainer/patterns/searching/index";
import { sortingPatterns } from "@/components/algorithm-trainer/patterns/sorting/index";
import { stringPatterns } from "@/components/algorithm-trainer/patterns/string/index";
import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";
import { MonsterHunterPattern, PatternCategory, PatternKey } from "@/lib/patterns/types";
import { verifyPatterns, generateVerificationReport } from "@/lib/patterns/verification";

// Convert monsterHunterExplanations to MonsterHunterPattern format
const monsterHunterPatterns: Partial<Record<PatternKey, MonsterHunterPattern>> = {};
for (const [key, value] of Object.entries(monsterHunterExplanations)) {
  monsterHunterPatterns[key as PatternKey] = {
    title: value.title,
    description: value.description,
    monsterHunterTitle: value.title,
    monsterHunterDescription: value.description,
    monsterHunterExample: value.example,
    monsterHunterTips: value.tips,
    category: "Other" as PatternCategory, // Default category, will be updated based on mapping
    example: value.example,
    tips: value.tips,
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
