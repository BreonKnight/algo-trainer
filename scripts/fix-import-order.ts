import * as fs from "fs";

import { glob } from "glob";

function sortImports(content: string): string {
  // Extract all imports
  const importRegex = /^import.*?;$/gm;
  const imports = content.match(importRegex) || [];
  const restOfFile = content.replace(importRegex, "").trim();

  // Group imports
  const externalImports: string[] = [];
  const internalImports: string[] = [];
  const relativeImports: string[] = [];
  const styleImports: string[] = [];

  imports.forEach((imp) => {
    if (imp.includes("from '@/")) {
      internalImports.push(imp);
    } else if (imp.includes("from './") || imp.includes("from '../")) {
      relativeImports.push(imp);
    } else if (imp.endsWith(".css';")) {
      styleImports.push(imp);
    } else {
      externalImports.push(imp);
    }
  });

  // Sort each group
  const sortFn = (a: string, b: string) => a.localeCompare(b);
  externalImports.sort(sortFn);
  internalImports.sort(sortFn);
  relativeImports.sort(sortFn);
  styleImports.sort(sortFn);

  // Combine groups with newlines between them
  const importGroups = [externalImports, internalImports, relativeImports, styleImports];
  const allImports: string[] = [];

  importGroups.forEach((group, index) => {
    if (group.length > 0) {
      allImports.push(...group);
      if (index < importGroups.length - 1) {
        allImports.push("");
      }
    }
  });

  return [...allImports, "", restOfFile].join("\n");
}

async function fixImportOrder() {
  // Find all TypeScript files
  const files = await glob("src/**/*.{ts,tsx}");

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const newContent = sortImports(content);

    if (content !== newContent) {
      fs.writeFileSync(file, newContent);
      console.log(`Fixed import order in ${file}`);
    }
  }
}

fixImportOrder().catch(console.error);
