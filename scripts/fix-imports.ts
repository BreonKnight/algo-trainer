import * as fs from "fs";
import * as path from "path";

import { glob } from "glob";

const workspaceRoot = process.cwd();

function convertToAliasImport(importPath: string, filePath: string): string {
  // Get the relative path from workspace root to the file
  const fileDir = path.dirname(filePath);

  // Resolve the import path relative to the file
  const absoluteImportPath = path.resolve(fileDir, importPath);
  const relativeToRoot = path.relative(workspaceRoot, absoluteImportPath);

  // Convert to @/ alias
  let aliasPath = "@/" + relativeToRoot.replace(/\.(js|ts|tsx)$/, "");
  aliasPath = aliasPath.replace(/^@\/src\//, "@/"); // Remove 'src' after '@/'
  return aliasPath;
}

async function fixImports() {
  // Find all TypeScript files
  const files = await glob("src/**/*.{ts,tsx}");

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    let newContent = content;

    // Match relative imports
    const importRegex = /from\s+['"](\.[^'"]+)['"]/g;
    let match;

    while ((match = importRegex.exec(content)) !== null) {
      const [fullMatch, importPath] = match;
      const aliasPath = convertToAliasImport(importPath, file);
      newContent = newContent.replace(fullMatch, `from \"${aliasPath}\"`);
    }

    // Replace any '@/src/' with '@/' in all import statements
    const updatedContent = newContent.replace(/(["'])@\/src\//g, "$1@/");
    if (updatedContent !== content) {
      fs.writeFileSync(file, updatedContent);
      console.log(`Fixed imports in ${file}`);
    }
  }
}

fixImports().catch(console.error);
