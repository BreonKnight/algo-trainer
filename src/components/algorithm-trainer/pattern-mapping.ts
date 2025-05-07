import { PatternKey, PATTERN_KEYS } from "@/src/components/algorithm-trainer/types/pattern-types";

// Create a mapping from pattern keys to their URL-friendly versions
export const patternMapping: Record<PatternKey, string> = Object.fromEntries(
  PATTERN_KEYS.map((key) => [key, key.toLowerCase().replace(/[^a-z0-9]/g, "-")])
) as Record<PatternKey, string>;
