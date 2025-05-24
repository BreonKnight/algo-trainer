import { PatternKey } from "@/lib/patterns/types";

import { AlgorithmPattern } from "./AlgorithmPattern";
import { getPattern, getPatternKeyFromName } from "./utils";

interface DynamicPatternProps {
  patternKey: PatternKey;
  patternName?: string; // Optional pattern name for more flexible matching
}

export function DynamicPattern({ patternKey, patternName }: DynamicPatternProps) {
  // Try to get pattern using the key first
  let pattern = getPattern(patternKey);

  // If not found and patternName is provided, try using the name
  if (!pattern && patternName) {
    const keyFromName = getPatternKeyFromName(patternName);
    pattern = getPattern(keyFromName as PatternKey);
  }

  if (!pattern) {
    return <div className="p-4 text-red-500">Pattern not found: {patternName || patternKey}</div>;
  }

  return <AlgorithmPattern {...pattern} />;
}
