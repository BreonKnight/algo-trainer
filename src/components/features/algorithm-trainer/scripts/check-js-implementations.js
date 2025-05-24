import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function hasTypeScriptCode(code) {
  // Check for TypeScript-specific syntax
  const tsPatterns = [
    /:\s*number\s*[;=]/,
    /:\s*string\s*[;=]/,
    /:\s*boolean\s*[;=]/,
    /:\s*void\s*[;=]/,
    /:\s*any\s*[;=]/,
    /:\s*\[\]\s*[;=]/,
    /private\s+\w+/,
    /public\s+\w+/,
    /protected\s+\w+/,
    /interface\s+\w+/,
    /type\s+\w+/,
    /enum\s+\w+/,
    /implements\s+\w+/,
    /extends\s+\w+/,
    /as\s+\w+/,
    /<[^>]+>/,
    /import\s+{[^}]+}\s+from/,
    /export\s+type/,
    /export\s+interface/,
    /export\s+enum/,
    /function\s+\w+\s*\([^)]*\)\s*:/, // TypeScript function with type annotation
    /const\s+\w+\s*:\s*\w+/, // TypeScript const with type
    /let\s+\w+\s*:\s*\w+/, // TypeScript let with type
    /var\s+\w+\s*:\s*\w+/, // TypeScript var with type
  ];

  // Check for Python patterns to exclude
  const pythonPatterns = [
    /def\s+\w+\s*\([^)]*\)\s*:/, // Python function definition
    /class\s+\w+\s*:/, // Python class definition
    /"""[\s\S]*?"""/, // Python docstring
    /'''[\s\S]*?'''/, // Python docstring
    /self\./, // Python self reference
    /if\s+__name__\s*==\s*['"]__main__['"]:/, // Python main guard
  ];

  // If any Python pattern is found, it's not TypeScript
  if (pythonPatterns.some((pattern) => pattern.test(code))) {
    return false;
  }

  // If any TypeScript pattern is found, it contains TypeScript code
  return tsPatterns.some((pattern) => pattern.test(code));
}

function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const match = content.match(/implementation:\s*`([\s\S]*?)`/);

    if (match && match[1]) {
      const implementation = match[1];
      return hasTypeScriptCode(implementation);
    }
    return false;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  const tsFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      tsFiles.push(...walkDir(filePath));
    } else if (file.endsWith(".ts") && file !== "index.ts") {
      if (checkFile(filePath)) {
        tsFiles.push(filePath);
      }
    }
  }

  return tsFiles;
}

// Start checking from the patterns directory
const patternsDir = path.join(__dirname, "..", "patterns");
const tsFiles = walkDir(patternsDir);

console.log("Files with TypeScript code in implementation field:");
tsFiles.forEach((file) => {
  console.log(file);
});
