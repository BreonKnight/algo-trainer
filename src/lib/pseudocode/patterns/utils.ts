import patterns from "../patterns.json";
import { PatternKey } from "@/components/algorithm-trainer/types";

export interface AlgorithmPattern {
  name: string;
  type: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  useCase: string;
  pseudocode: string;
  keySteps: string[];
}

type PatternsData = {
  [key: string]: AlgorithmPattern;
};

const typedPatterns = patterns as PatternsData;

// Helper function to convert name to kebab case
function toKebabCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}

// Helper function to find pattern by name
function findPatternByName(name: string): AlgorithmPattern | null {
  const normalizedName = toKebabCase(name);

  // First try direct match
  if (normalizedName in typedPatterns) {
    return typedPatterns[normalizedName];
  }

  // Then try matching against pattern names
  for (const [key, pattern] of Object.entries(typedPatterns)) {
    if (toKebabCase(pattern.name) === normalizedName) {
      return pattern;
    }
  }

  return null;
}

export function getPattern(patternKey: PatternKey): AlgorithmPattern | null {
  // First try direct key lookup
  const patternId = toKebabCase(patternKey);
  if (patternId in typedPatterns) {
    return typedPatterns[patternId];
  }

  // Then try finding by name
  return findPatternByName(patternKey);
}

export function getAllPatterns(): Record<string, AlgorithmPattern> {
  return typedPatterns;
}

export function validatePattern(pattern: AlgorithmPattern): boolean {
  const requiredFields = [
    "name",
    "type",
    "description",
    "timeComplexity",
    "spaceComplexity",
    "useCase",
    "pseudocode",
    "keySteps",
  ];

  return requiredFields.every(
    (field) =>
      field in pattern &&
      pattern[field as keyof AlgorithmPattern] !== undefined &&
      pattern[field as keyof AlgorithmPattern] !== null
  );
}

export function getPatternsByType(): Record<string, AlgorithmPattern[]> {
  const patternsByType: Record<string, AlgorithmPattern[]> = {};

  Object.values(typedPatterns).forEach((pattern) => {
    if (!patternsByType[pattern.type]) {
      patternsByType[pattern.type] = [];
    }
    patternsByType[pattern.type].push(pattern);
  });

  return patternsByType;
}

// Helper function to get pattern key from name
export function getPatternKeyFromName(name: string): string {
  return toKebabCase(name);
}
