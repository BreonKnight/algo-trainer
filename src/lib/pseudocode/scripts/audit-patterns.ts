import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CLRS-style pseudocode indicators
const clrsIndicators = {
  assignment: /←/,
  comparison: /[≤≥≠]/,
  infinity: /∞/,
  arrayNotation: /\[1\.\.n\]/,
  loopSyntax: /(for|while).*do/,
  conditionalSyntax: /if.*then/,
  comments: /#.*/,
};

// Implementation-style code indicators to avoid
const implementationIndicators = {
  functionDef: /function|=>|\(\)/,
  implementationSyntax: /[{};]/,
  variableNames: /\b[a-z][a-zA-Z0-9]*\d+\b/,
};

// Check if content contains any pseudocode
function hasPseudocode(content: string): boolean {
  // Look for common pseudocode patterns
  const pseudocodePatterns = [
    /←/, // Assignment
    /[≤≥≠]/, // Comparisons
    /∞/, // Infinity
    /\[1\.\.n\]/, // Array notation
    /(for|while).*do/, // Loop syntax
    /if.*then/, // Conditional syntax
    /#.*/, // Comments
    /procedure|algorithm/i, // Algorithm declarations
    /end (for|while|if)/, // Block endings
  ];

  return pseudocodePatterns.some((pattern) => pattern.test(content));
}

// Check if content contains implementation-style code
function hasImplementationCode(content: string): boolean {
  return Object.values(implementationIndicators).some((pattern) =>
    pattern.test(content)
  );
}

// Check for CLRS-style indicators
function checkClrsStyle(content: string): string[] {
  const issues: string[] = [];

  if (!hasPseudocode(content)) {
    issues.push("No pseudocode found");
    return issues;
  }

  Object.entries(clrsIndicators).forEach(([key, pattern]) => {
    if (!pattern.test(content)) {
      issues.push(`Missing pseudocode ${key}`);
    }
  });

  // Check for explanatory comments
  const commentLines = content.split("\n").filter((line) => line.includes("#"));
  if (commentLines.length < 3) {
    issues.push("Missing explanatory comments");
  }

  // Check for implementation-style code
  if (hasImplementationCode(content)) {
    Object.entries(implementationIndicators).forEach(([key, pattern]) => {
      if (pattern.test(content)) {
        issues.push(`Contains implementation-style ${key}`);
      }
    });
  }

  return issues;
}

// Read and check all files in the patterns directory
const patternsDir = path.join(__dirname, "../patterns");
const files = fs.readdirSync(patternsDir);

files.forEach((file) => {
  if (file.endsWith(".tsx")) {
    const filePath = path.join(patternsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const issues = checkClrsStyle(content);

    if (issues.length > 0) {
      console.log(`\n${file}:`);
      issues.forEach((issue) => console.log(`  - ${issue}`));
    }
  }
});
