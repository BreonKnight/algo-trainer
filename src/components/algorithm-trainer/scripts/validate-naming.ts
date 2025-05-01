import * as fs from "fs";
import * as path from "path";
import { monsterHunterExplanations } from "../monsterHunterExplanations.js";
import { fileURLToPath } from "url";

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
    description:
      "Pattern variables should be in camelCase and end with Pattern",
  },
  titleCase: {
    pattern: /^[A-Z][a-zA-Z0-9]*( [A-Z][a-zA-Z0-9]*)*$/,
    description: "Pattern keys should be in Title Case",
  },
};

function validateFileNaming(filePath: string): ValidationResult {
  const issues: string[] = [];
  const fileName = path.basename(filePath);

  // Check file name convention
  if (!conventions.kebabCase.pattern.test(fileName)) {
    issues.push(
      `File name "${fileName}" does not follow kebab-case convention`
    );
  }

  // Read file content
  const content = fs.readFileSync(filePath, "utf-8");

  // Check pattern variable naming
  const patternVarMatches = content.match(/const\s+([a-zA-Z0-9_]+)\s*=/g);
  if (patternVarMatches) {
    patternVarMatches.forEach((match) => {
      const varName = match.replace(/const\s+|\s*=/g, "");
      if (!conventions.camelCase.pattern.test(varName)) {
        issues.push(
          `Pattern variable "${varName}" does not follow camelCase convention`
        );
      }
    });
  }

  // Check pattern key naming in index files
  if (fileName === "index.ts") {
    const keyMatches = content.match(/"([^"]+)":/g);
    if (keyMatches) {
      keyMatches.forEach((match) => {
        const key = match.replace(/"/g, "").replace(":", "");
        if (!conventions.titleCase.pattern.test(key)) {
          issues.push(
            `Pattern key "${key}" does not follow Title Case convention`
          );
        }
        // Check if key exists in monsterHunterExplanations
        if (!(key in monsterHunterExplanations)) {
          issues.push(
            `Pattern key "${key}" not found in monsterHunterExplanations`
          );
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
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const patternsDir = path.join(__dirname, "..", "patterns");
  const results = validateDirectory(patternsDir);

  if (results.length === 0) {
    console.log("✅ All naming conventions are valid!");
    return;
  }

  console.log("❌ Naming convention violations found:");
  results.forEach((result) => {
    console.log(`\nFile: ${result.file}`);
    result.issues.forEach((issue) => {
      console.log(`  - ${issue}`);
    });
  });
}

main();
