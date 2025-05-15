import * as fs from "fs";

import { glob } from "glob";

async function findImportErrors() {
  const files = await glob("src/**/*.{ts,tsx}");
  const incorrectImports: string[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    if (
      content.includes('import { AlgorithmPattern } from "../../types"') ||
      content.includes('import { AlgorithmPattern } from "@/components/algorithm-trainer/types"')
    ) {
      incorrectImports.push(file);
    }
  }

  if (incorrectImports.length > 0) {
    console.log("Files with incorrect AlgorithmPattern imports:");
    incorrectImports.forEach((file) => console.log(file));
  } else {
    console.log("No incorrect imports found!");
  }
}

findImportErrors().catch(console.error);
