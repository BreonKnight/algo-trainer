import fs from "fs";
import path from "path";

import { glob } from "glob";

const patternsDir = path.join(process.cwd(), "src/lib/pseudocode/patterns");

async function updateFiles() {
  // Find all pattern files
  const files = await glob("*.tsx", { cwd: patternsDir });

  for (const file of files) {
    const filePath = path.join(patternsDir, file);
    let content = fs.readFileSync(filePath, "utf8");

    // Skip if already using PseudocodeDisplay
    if (content.includes("PseudocodeDisplay")) {
      console.log(`Skipping ${file} - already updated`);
      continue;
    }

    // Add import if not present
    if (!content.includes("import { PseudocodeDisplay }")) {
      content = content.replace(
        /import.*from.*;/,
        `$&\nimport { PseudocodeDisplay } from "../PseudocodeDisplay";`
      );
    }

    // Replace pre tag with PseudocodeDisplay
    content = content.replace(
      /<div className="mb-4">\s*<pre className="bg-main\/10 p-2 rounded text-sm overflow-x-auto">\s*{`([\s\S]*?)`}\s*<\/pre>\s*<\/div>/g,
      "<PseudocodeDisplay code={`$1`} />"
    );

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}

updateFiles().catch(console.error);
