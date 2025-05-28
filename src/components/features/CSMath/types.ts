export interface Concept {
  id: number;
  title: string;
  category: string;
  monsterHunterExample: string;
  clrsExplanation: string;
  mathematicalNotation: string;
}

export interface BaseSymbol {
  symbol: string;
  name: string;
  description: string;
  example: string;
}

export interface EnhancedSymbol extends BaseSymbol {
  applications: string[];
  relatedConcepts: string[];
}
