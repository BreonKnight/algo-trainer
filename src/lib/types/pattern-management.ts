export interface Pattern {
  id: string;
  name: string;
  category: string;
  timeComplexity: string;
  spaceComplexity: string;
  description: string;
  monsterHunterContext: string;
  example: string;
  process: string[];
  implementation: string;
  testCases: TestCase[];
}

export interface TestCase {
  name: string;
  input: string;
  expectedOutput: string;
  monsterHunterTip: string;
}

export interface PatternCategory {
  name: string;
  patterns: string[];
}

export interface PatternFormData {
  name: string;
  category: string;
  timeComplexity: string;
  spaceComplexity: string;
  description: string;
  monsterHunterContext: string;
  example: string;
  process: string[];
  implementation: string;
  testCases: TestCase[];
}
