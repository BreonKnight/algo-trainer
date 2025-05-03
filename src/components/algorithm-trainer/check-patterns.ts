import { verifyPatternCompleteness } from "./monsterHunterPatternsCombined.ts";

console.log("Running pattern checks...\n");

// Run pattern completeness check
const completenessResults = verifyPatternCompleteness();

console.log("\nSummary:");
console.log("--------");
console.log(`Total patterns: ${completenessResults.totalPatterns}`);
console.log(
  `Regular implementations: ${completenessResults.regularPatternsCount}`
);
console.log(
  `Monster Hunter implementations: ${completenessResults.monsterHunterPatternsCount}`
);
console.log(
  `Missing in regular: ${completenessResults.missingRegularPatterns.length}`
);
console.log(
  `Missing in Monster Hunter: ${completenessResults.missingMonsterHunterPatterns.length}`
);
