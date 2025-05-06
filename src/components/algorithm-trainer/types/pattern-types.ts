import { PatternKey as BasePatternKey } from "../../../lib/patterns/types";

// Re-export the base PatternKey type
export type PatternKey = BasePatternKey;

// Re-export the PATTERN_KEYS array
export { PATTERN_KEYS } from "../../../lib/patterns/types";

export interface AlgorithmPattern {
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  pseudocode: string;
  example: string;
  implementation: string;
  category: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  keyPoints?: string[];
  commonUseCases?: string[];
  relatedPatterns?: string[];
  tips?: string[];
  pattern?: string;
  keySteps?: string[];
  testData?: {
    input:
      | number[]
      | {
          arr: number[];
          target?: number;
          [key: string]: string | number | number[] | undefined | Record<string, number[]>;
        };
    expected: number | number[];
    description: string;
  }[];
  explanation?: string;
}
