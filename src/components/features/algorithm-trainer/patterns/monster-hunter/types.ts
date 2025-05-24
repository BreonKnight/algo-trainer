export interface MonsterHunterTerritory {
  name: string;
  monster: string;
  difficulty: number;
}

export interface MonsterHunterPattern {
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  pseudocode: string;
  example: string;
  implementation: string;
  category: string;
}

export interface MonsterHunterVisualization {
  before: string;
  after: string;
  steps: string[];
  interactiveElements: string[];
}

export interface MonsterHunterExample {
  territories: MonsterHunterTerritory[];
  targetMonster: string;
  steps: string[];
  expectedResult: string;
}
