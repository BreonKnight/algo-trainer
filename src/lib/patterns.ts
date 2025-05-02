export const PATTERN_KEYS = [
  "random",
  "ascending",
  "descending",
  "v-shaped",
  "a-shaped",
  "mountain",
  "valley",
  "random-duplicates",
  "ascending-duplicates",
  "descending-duplicates",
] as const;

export type PatternKey = (typeof PATTERN_KEYS)[number];
