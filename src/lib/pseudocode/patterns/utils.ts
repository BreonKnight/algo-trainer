import patterns from "../patterns.json";
import { PatternKey } from "@/components/algorithm-trainer/types";

// Valid algorithm types in our system
const VALID_TYPES = [
  "array",
  "backtracking",
  "data-structures",
  "divide-and-conquer",
  "dynamic-programming",
  "greedy",
  "tree",
  "string",
  "searching",
  "sorting",
  "number-theory",
  "matrix",
  "graph",
  "recursion",
  "Algorithm",
  "n/log log n",
  "algorithm",
  "number theory",
  "data structures",
  "divide and conquer",
  "dynamic programming",
  "other",
  "Number Theory",
] as const;

type AlgorithmType = (typeof VALID_TYPES)[number];

export interface AlgorithmPattern {
  name: string;
  type: AlgorithmType;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  useCase: string;
  pseudocode: string;
  keySteps: string[];
  // Optional fields for backward compatibility
  title?: string;
  category?: string;
}

type PatternsData = {
  [key: string]: AlgorithmPattern;
};

const typedPatterns = patterns as PatternsData;

// Helper function to normalize pattern name
function normalizePatternName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Helper function to sanitize complexity strings
function sanitizeComplexity(complexity: string): string {
  return complexity
    .replace(/&nbsp;/g, " ") // Replace HTML spaces
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/\|/g, "|") // Ensure consistent pipe character
    .trim(); // Remove leading/trailing spaces
}

// Helper function to sanitize description
function sanitizeDescription(description: string): string {
  return description
    .replace(/&nbsp;/g, " ") // Replace HTML spaces
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim(); // Remove leading/trailing spaces
}

// Helper function to validate algorithm type
function isValidType(type: string): type is AlgorithmType {
  // Normalize the type string
  const normalizedType = type.toLowerCase().trim().replace(/\s+/g, "-");
  return VALID_TYPES.some((validType) => {
    const normalizedValidType = validType.toLowerCase().replace(/\s+/g, "-");
    return normalizedValidType === normalizedType;
  });
}

// Helper function to validate pattern data
function validatePattern(pattern: unknown): pattern is AlgorithmPattern {
  if (!pattern || typeof pattern !== "object") {
    return false;
  }

  const p = pattern as Partial<AlgorithmPattern>;

  // Handle both title/category and name/type formats
  const name = p.name || p.title;
  const rawType = p.type || p.category;

  // Check required fields
  if (
    !name ||
    !rawType ||
    !p.timeComplexity ||
    !p.spaceComplexity ||
    !p.description ||
    !p.pseudocode ||
    !Array.isArray(p.keySteps)
  ) {
    return false;
  }

  // Normalize the type
  const normalizedType = rawType.toLowerCase().trim().replace(/\s+/g, "-");

  // Sanitize fields
  p.timeComplexity = sanitizeComplexity(p.timeComplexity);
  p.spaceComplexity = sanitizeComplexity(p.spaceComplexity);
  p.description = sanitizeDescription(p.description);

  // Ensure we have the correct field names
  if (p.title) {
    p.name = p.title;
    delete p.title;
  }
  if (p.category) {
    p.type = p.category as AlgorithmType;
    delete p.category;
  }

  // Extract useCase from timeComplexity if missing
  if (!p.useCase) {
    const useCaseMatch = p.timeComplexity.match(/\|\s*Use:\s*([^|]+)/);
    if (useCaseMatch) {
      p.useCase = useCaseMatch[1].trim();
    }
  }

  return true;
}

export function getPattern(patternKey: PatternKey): AlgorithmPattern | null {
  // First try direct key lookup
  const patternId = normalizePatternName(patternKey);

  // Try exact match first
  if (patternKey in typedPatterns) {
    const pattern = typedPatterns[patternKey];
    if (validatePattern(pattern)) {
      return pattern;
    }
  }

  // Fallback: search by 'name' field (case-insensitive)
  const foundByName = Object.values(typedPatterns).find(
    (p) => p.name?.toLowerCase() === patternKey.toLowerCase()
  );
  if (foundByName && validatePattern(foundByName)) {
    return foundByName;
  }

  // Fallback: search by 'title' field (case-insensitive)
  const foundByTitle = Object.values(typedPatterns).find(
    (p) => p.title?.toLowerCase() === patternKey.toLowerCase()
  );
  if (foundByTitle && validatePattern(foundByTitle)) {
    return foundByTitle;
  }

  return null;
}

export function getAllPatterns(): Record<string, AlgorithmPattern> {
  const validatedPatterns: Record<string, AlgorithmPattern> = {};

  Object.entries(typedPatterns).forEach(([key, pattern]) => {
    if (validatePattern(pattern)) {
      validatedPatterns[key] = pattern;
    }
  });

  return validatedPatterns;
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
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
