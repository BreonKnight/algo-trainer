export interface VisualTemplate {
  before: string;
  after: string;
  steps: string[];
  interactiveElements: string[];
}

export const searchAlgorithmTemplates: Record<string, VisualTemplate> = {
  binarySearch: {
    before: `Map showing all territories with their monsters and difficulty levels:
    [Ancient Forest (1)] [Wildspire Waste (2)] [Coral Highlands (3)] [Rotten Vale (4)] [Elder's Recess (5)]`,
    after: `Map highlighting the found monster's territory:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands 🔍] [Rotten Vale] [Elder's Recess]`,
    steps: [
      "Show middle territory selection (Coral Highlands)",
      "Show monster comparison (Tobi-Kadachi vs target)",
      "Show search area reduction (left/right half)",
      "Show final territory highlight",
    ],
    interactiveElements: [
      "Territory selection dropdown",
      "Step-by-step visualization controls",
      "Difficulty level indicators",
      "Search area highlighting",
    ],
  },

  linearSearch: {
    before: `Map showing all territories with their monsters:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands] [Rotten Vale] [Elder's Recess]`,
    after: `Map highlighting the found monster's territory:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands 🔍] [Rotten Vale] [Elder's Recess]`,
    steps: [
      "Show territory exploration order (left to right)",
      "Show monster comparison at each step",
      "Show territory highlight when found",
      "Show completion when all territories checked",
    ],
    interactiveElements: [
      "Territory selection dropdown",
      "Step-by-step visualization controls",
      "Exploration path highlighting",
      "Monster information display",
    ],
  },

  jumpSearch: {
    before: `Map showing all territories with their monsters and difficulty levels:
    [Ancient Forest (1)] [Wildspire Waste (2)] [Coral Highlands (3)] [Rotten Vale (4)] [Elder's Recess (5)]`,
    after: `Map highlighting the found monster's territory:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands 🔍] [Rotten Vale] [Elder's Recess]`,
    steps: [
      "Show jump size calculation (√5 ≈ 2)",
      "Show territory jumps with step size",
      "Show block identification",
      "Show linear search within block",
      "Show final territory highlight",
    ],
    interactiveElements: [
      "Territory selection dropdown",
      "Jump size adjustment slider",
      "Step-by-step visualization controls",
      "Block highlighting",
    ],
  },

  exponentialSearch: {
    before: `Map showing all territories with their monsters:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands] [Rotten Vale] [Elder's Recess]`,
    after: `Map highlighting the found monster's territory:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands 🔍] [Rotten Vale] [Elder's Recess]`,
    steps: [
      "Show initial range (1 territory)",
      "Show range doubling process",
      "Show binary search within range",
      "Show final territory highlight",
    ],
    interactiveElements: [
      "Territory selection dropdown",
      "Range visualization controls",
      "Step-by-step visualization controls",
      "Search area highlighting",
    ],
  },

  interpolationSearch: {
    before: `Map showing all territories with their monsters and difficulty levels:
    [Ancient Forest (1)] [Wildspire Waste (2)] [Coral Highlands (3)] [Rotten Vale (4)] [Elder's Recess (5)]`,
    after: `Map highlighting the found monster's territory:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands 🔍] [Rotten Vale] [Elder's Recess]`,
    steps: [
      "Show difficulty value calculation",
      "Show probe position estimation",
      "Show territory comparison",
      "Show search range adjustment",
      "Show final territory highlight",
    ],
    interactiveElements: [
      "Territory selection dropdown",
      "Difficulty value visualization",
      "Probe position calculator",
      "Step-by-step visualization controls",
    ],
  },

  fibonacciSearch: {
    before: `Map showing all territories with their monsters:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands] [Rotten Vale] [Elder's Recess]`,
    after: `Map highlighting the found monster's territory:
    [Ancient Forest] [Wildspire Waste] [Coral Highlands 🔍] [Rotten Vale] [Elder's Recess]`,
    steps: [
      "Show Fibonacci number generation",
      "Show search space division",
      "Show territory comparison",
      "Show search range adjustment",
      "Show final territory highlight",
    ],
    interactiveElements: [
      "Territory selection dropdown",
      "Fibonacci sequence visualization",
      "Golden ratio calculator",
      "Step-by-step visualization controls",
    ],
  },
};

export interface InteractiveElement {
  type: "dropdown" | "slider" | "button" | "display";
  label: string;
  description: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}

export const interactiveElements: Record<string, InteractiveElement[]> = {
  binarySearch: [
    {
      type: "dropdown",
      label: "Select Monster",
      description: "Choose a monster to search for",
      options: ["Great Jagras", "Barroth", "Tobi-Kadachi", "Odogaron", "Nergigante"],
    },
    {
      type: "slider",
      label: "Difficulty Range",
      description: "Adjust the difficulty range to search within",
      min: 1,
      max: 5,
      step: 1,
    },
    {
      type: "button",
      label: "Step Forward",
      description: "Move to the next step in the search process",
    },
    {
      type: "display",
      label: "Current Territory",
      description: "Shows the currently selected territory",
    },
  ],
  // Add similar interactive elements for other search algorithms
};

export interface VisualStep {
  title: string;
  description: string;
  visualElements: string[];
  codeSnippet?: string;
}

export const visualSteps: Record<string, VisualStep[]> = {
  binarySearch: [
    {
      title: "Initial Setup",
      description: "Display all territories with their monsters and difficulty levels",
      visualElements: [
        "Territory map with difficulty indicators",
        "Monster icons for each territory",
        "Search range boundaries",
      ],
    },
    {
      title: "Middle Selection",
      description: "Select and highlight the middle territory",
      visualElements: [
        "Middle territory highlight",
        "Difficulty comparison indicators",
        "Search range update",
      ],
      codeSnippet: "mid = (left + right) // 2",
    },
    // Add more steps for each algorithm
  ],
};

export function getVisualTemplate(algorithm: string): VisualTemplate {
  return searchAlgorithmTemplates[algorithm];
}

export function getInteractiveElements(algorithm: string): InteractiveElement[] {
  return interactiveElements[algorithm] || [];
}

export function getVisualSteps(algorithm: string): VisualStep[] {
  return visualSteps[algorithm] || [];
}
