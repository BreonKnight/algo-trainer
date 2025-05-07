import { PATTERN_KEYS, PatternKey } from "@/lib/patterns/types";

// Type-safe pattern key validation
export function createPatternRecord<T>(
  record: Partial<Record<PatternKey, T>>
): Partial<Record<PatternKey, T>> {
  // Validate that all keys are in PATTERN_KEYS
  const invalidKeys = Object.keys(record).filter(
    (key) => !PATTERN_KEYS.includes(key as PatternKey)
  );
  if (invalidKeys.length > 0) {
    throw new Error(`Invalid pattern keys: ${invalidKeys.join(", ")}`);
  }
  return record;
}
