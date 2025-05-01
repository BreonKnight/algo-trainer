export const TEST_IDS = {
  patternTest: "patternTest",
  implementationTest: "implementationTest",
  ALGORITHM_PATTERN_SOURCE: "ALGORITHM_PATTERN_SOURCE",
} as const;

export interface ABTestAnalytics {
  totalEvents: number;
  groupAEvents: number;
  groupBEvents: number;
  eventsByType: Record<string, number>;
  eventsByPattern: Record<string, number>;
}
