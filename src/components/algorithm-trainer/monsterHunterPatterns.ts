import { PatternKey } from "./types";
import { monsterHunterPatternsExtended } from "./monsterHunterPatternsExtended";
import { monsterHunterPatternsExtended2 } from "./monsterHunterPatternsExtended2";
import { monsterHunterPatternsExtended3 } from "./monsterHunterPatternsExtended3";
import { monsterHunterPatternsExtended4 } from "./monsterHunterPatternsExtended4";

// Combine all patterns into a single Map
export const monsterHunterPatterns = new Map<PatternKey, string>([
  ...monsterHunterPatternsExtended,
  ...monsterHunterPatternsExtended2,
  ...monsterHunterPatternsExtended3,
  ...monsterHunterPatternsExtended4,
]);
