const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
import { monsterHunterExplanations } from "../monsterHunterExplanations";

interface ValidationResult {
  file: string;
  issues: string[];
}

interface NamingConvention {
  pattern: RegExp;
  description: string;
}

const conventions: Record<string, NamingConvention> = {
  kebabCase: {
    pattern: /^[a-z0-9]+(-[a-z0-9]+)*\.(ts|tsx)$/,
    description: "File names should be in kebab-case (lowercase with hyphens)",
  },
  camelCase: {
    pattern: /^[a-z][a-zA-Z0-9]*Pattern$/,
    description: "Pattern variables should be in camelCase and end with Pattern",
  },
  titleCase: {
    pattern: /^[A-Z][a-zA-Z0-9]*( [A-Z][a-zA-Z0-9]*)*$/,
    description: "Pattern keys should be in Title Case",
  },
};

function collectPatternKeys(filePath: string): string[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const patternKeys: string[] = [];

  // Match pattern keys in Map declarations
  const mapMatches = content.match(/new Map<PatternKey, string>\(\[([\s\S]*?)\]\)/g);
  if (mapMatches) {
    mapMatches.forEach((mapContent: string) => {
      const keyMatches = mapContent.match(/"([^"]+)" as PatternKey/g);
      if (keyMatches) {
        keyMatches.forEach((match: string) => {
          const key = match.replace(/" as PatternKey/g, "").replace(/"/g, "");
          patternKeys.push(key);
        });
      }
    });
  }

  return patternKeys;
}

function validatePatternKeys() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const patternFiles = [
    "monsterHunterPatterns.ts",
    "monsterHunterPatternsExtended.ts",
    "monsterHunterPatternsExtended2.ts",
    "monsterHunterPatternsExtended3.ts",
    "monsterHunterPatternsExtended4.ts",
    "monsterHunterPatternsExtended5.ts",
    "monsterHunterPatternsExtended6.ts",
    "monsterHunterPatternsExtended7.ts",
    "monsterHunterPatternsExtended8.ts",
  ];

  console.log("Validating pattern keys...\n");

  for (const file of patternFiles) {
    const filePath = path.join(__dirname, "..", file);
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }

    const patternKeys = collectPatternKeys(filePath);
    console.log(`Pattern keys found in ${file}:`);
    patternKeys.forEach((key) => {
      console.log(`  - ${key}`);
    });
    console.log();
  }
}

function validateFileNaming(filePath: string): ValidationResult {
  const issues: string[] = [];
  const fileName = path.basename(filePath);

  // Check file name convention
  if (!conventions.kebabCase.pattern.test(fileName)) {
    issues.push(`File name "${fileName}" does not follow kebab-case convention`);
  }

  // Read file content
  const content = fs.readFileSync(filePath, "utf-8");

  // Check pattern variable naming
  const patternVarMatches = content.match(/const\s+([a-zA-Z0-9_]+)\s*=/g);
  if (patternVarMatches) {
    patternVarMatches.forEach((match: string) => {
      const varName = match.replace(/const\s+|\s*=/g, "");
      if (!conventions.camelCase.pattern.test(varName)) {
        issues.push(`Pattern variable "${varName}" does not follow camelCase convention`);
      }
    });
  }

  // Check pattern key naming in index files
  if (fileName === "index.ts") {
    const keyMatches = content.match(/"([^"]+)":/g);
    if (keyMatches) {
      keyMatches.forEach((match: string) => {
        const key = match.replace(/"/g, "").replace(":", "");
        if (!conventions.titleCase.pattern.test(key)) {
          issues.push(`Pattern key "${key}" does not follow Title Case convention`);
        }
        // Check if key exists in monsterHunterExplanations
        if (!(key in monsterHunterExplanations)) {
          issues.push(`Pattern key "${key}" not found in monsterHunterExplanations`);
        }
      });
    }
  }

  return {
    file: filePath,
    issues,
  };
}

function validateDirectory(dirPath: string): ValidationResult[] {
  const results: ValidationResult[] = [];

  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results.push(...validateDirectory(fullPath));
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      const result = validateFileNaming(fullPath);
      if (result.issues.length > 0) {
        results.push(result);
      }
    }
  }

  return results;
}

function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const patternsDir = path.join(__dirname, "..", "patterns");

  console.log("Validating pattern keys...");
  validatePatternKeys();

  console.log("\nValidating file naming conventions...");
  const namingResults = validateDirectory(patternsDir);

  const allResults = [...namingResults];

  if (allResults.length === 0) {
    console.log("\n✅ All naming conventions and pattern keys are valid!");
    return;
  }

  console.log("\n❌ Validation issues found:");
  allResults.forEach((result) => {
    console.log(`\nFile: ${result.file}`);
    result.issues.forEach((issue) => {
      console.log(`  - ${issue}`);
    });
  });
}

main();
