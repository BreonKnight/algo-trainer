const fs = require("fs");
const path = require("path");

const DRYRUN = process.argv.includes("--dryrun");
if (DRYRUN) {
  console.log("--- DRY RUN MODE: No files will be changed ---");
}
let dryrunActions = [];

// --- CONFIGURATION ---
const patternDir = "src/lib/pseudocode/patterns";
const indexFilePath = "src/lib/pseudocode/index.tsx";
const typesFilePath = "src/components/algorithm-trainer/types.ts";
const mhPatternPath =
  "src/components/algorithm-trainer/monsterHunterPatternsExtended4.ts";
const mhGuidePath = "src/components/algorithm-trainer/MonsterHunterGuide.tsx";
const mhTestDataPath =
  "src/components/algorithm-trainer/monsterHunterTestData.ts";

// --- HELPERS ---
function toPatternKey(filename) {
  let name = filename.replace(/\.tsx$/, "");
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function generatePseudocodePattern(key) {
  return `  "${key}": {\n    title: "${key}",\n    description: "Implementation of ${key} algorithm",\n    code: \`// ${key} implementation\n\`,\n  },\n`;
}

function generatePatternKey(key) {
  return `  "${key}",\n`;
}

function generateMonsterHunterPattern(key) {
  return `[\n  "${key}" as PatternKey,\n  \`def monster_hunter_${key
    .replace(/ /g, "_")
    .toLowerCase()}():\n    """Monster Hunter themed pseudocode for ${key}"""\n    pass\n  \`,\n],\n`;
}

function generateMonsterHunterGuide(key) {
  return `  "${key}": {
    title: "${key} (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },\n`;
}

function generateMonsterHunterTestData(key) {
  return `  "${key}": \`# Monster Hunter Test Data for ${key}\n# Add your test cases here!\n\`,\n`;
}

// --- MAIN SCRIPT ---
async function main() {
  // 1. Get all pattern files
  const files = fs.readdirSync(patternDir).filter((f) => f.endsWith(".tsx"));
  const filePatternKeys = files.map(toPatternKey);

  // 2. Read existing files
  const indexFile = fs.readFileSync(indexFilePath, "utf8");
  const typesFile = fs.readFileSync(typesFilePath, "utf8");
  const mhPatternFile = fs.readFileSync(mhPatternPath, "utf8");
  const mhGuideFile = fs.readFileSync(mhGuidePath, "utf8");
  const mhTestDataFile = fs.readFileSync(mhTestDataPath, "utf8");

  // 3. Find existing patterns
  const existingPseudocodePatterns = Array.from(
    indexFile.matchAll(/"([^"]+)":/g)
  ).map((m) => m[1]);

  const existingPatternKeys = Array.from(typesFile.matchAll(/"([^"]+)",/g)).map(
    (m) => m[1]
  );

  const existingMHPatterns = Array.from(
    mhPatternFile.matchAll(/"([^"]+)" as PatternKey,/g)
  ).map((m) => m[1]);

  const existingMHGuide = Array.from(mhGuideFile.matchAll(/"([^"]+)":/g)).map(
    (m) => m[1]
  );

  const existingMHTestData = Array.from(
    mhTestDataFile.matchAll(/"([^"]+)":/g)
  ).map((m) => m[1]);

  // 4. Find missing patterns
  const missingPseudocodePatterns = filePatternKeys.filter(
    (key) => !existingPseudocodePatterns.includes(key)
  );
  const missingPatternKeys = filePatternKeys.filter(
    (key) => !existingPatternKeys.includes(key)
  );
  const missingMHPatterns = filePatternKeys.filter(
    (key) => !existingMHPatterns.includes(key)
  );
  const missingMHGuide = filePatternKeys.filter(
    (key) => !existingMHGuide.includes(key)
  );
  const missingMHTestData = filePatternKeys.filter(
    (key) => !existingMHTestData.includes(key)
  );

  // 5. Generate new content
  if (missingPseudocodePatterns.length > 0) {
    const newContent = missingPseudocodePatterns
      .map(generatePseudocodePattern)
      .join("");
    const insertPosition = indexFile.lastIndexOf("};");
    const newIndexFile =
      indexFile.slice(0, insertPosition) +
      newContent +
      indexFile.slice(insertPosition);

    if (DRYRUN) {
      dryrunActions.push(
        `[DRYRUN] Would update ${indexFilePath} with ${missingPseudocodePatterns.length} new patterns`
      );
    } else {
      fs.writeFileSync(indexFilePath, newIndexFile);
      console.log(
        `Updated ${indexFilePath} with ${missingPseudocodePatterns.length} new patterns`
      );
    }
  }

  if (missingPatternKeys.length > 0) {
    const newContent = missingPatternKeys.map(generatePatternKey).join("");
    const insertPosition = typesFile.lastIndexOf("] as const;");
    const newTypesFile =
      typesFile.slice(0, insertPosition) +
      newContent +
      typesFile.slice(insertPosition);

    if (DRYRUN) {
      dryrunActions.push(
        `[DRYRUN] Would update ${typesFilePath} with ${missingPatternKeys.length} new pattern keys`
      );
    } else {
      fs.writeFileSync(typesFilePath, newTypesFile);
      console.log(
        `Updated ${typesFilePath} with ${missingPatternKeys.length} new pattern keys`
      );
    }
  }

  if (missingMHPatterns.length > 0) {
    const newContent = missingMHPatterns
      .map(generateMonsterHunterPattern)
      .join("");
    const insertPosition = mhPatternFile.lastIndexOf("];");
    const newMHPatternFile =
      mhPatternFile.slice(0, insertPosition) +
      newContent +
      mhPatternFile.slice(insertPosition);

    if (DRYRUN) {
      dryrunActions.push(
        `[DRYRUN] Would update ${mhPatternPath} with ${missingMHPatterns.length} new patterns`
      );
    } else {
      fs.writeFileSync(mhPatternPath, newMHPatternFile);
      console.log(
        `Updated ${mhPatternPath} with ${missingMHPatterns.length} new patterns`
      );
    }
  }

  if (missingMHGuide.length > 0) {
    const newContent = missingMHGuide.map(generateMonsterHunterGuide).join("");
    const insertPosition = mhGuideFile.lastIndexOf("};");
    const newMHGuideFile =
      mhGuideFile.slice(0, insertPosition) +
      newContent +
      mhGuideFile.slice(insertPosition);

    if (DRYRUN) {
      dryrunActions.push(
        `[DRYRUN] Would update ${mhGuidePath} with ${missingMHGuide.length} new guide entries`
      );
    } else {
      // Ensure the file is a proper TypeScript object with correct type
      const finalContent = newMHGuideFile.trim().endsWith("};")
        ? newMHGuideFile
        : newMHGuideFile + "};";
      fs.writeFileSync(mhGuidePath, finalContent);
      console.log(
        `Updated ${mhGuidePath} with ${missingMHGuide.length} new guide entries`
      );
    }
  }

  if (missingMHTestData.length > 0) {
    const newContent = missingMHTestData
      .map(generateMonsterHunterTestData)
      .join("");
    const insertPosition = mhTestDataFile.lastIndexOf("};");
    const newMHTestDataFile =
      mhTestDataFile.slice(0, insertPosition) +
      newContent +
      mhTestDataFile.slice(insertPosition);

    if (DRYRUN) {
      dryrunActions.push(
        `[DRYRUN] Would update ${mhTestDataPath} with ${missingMHTestData.length} new test data entries`
      );
    } else {
      fs.writeFileSync(mhTestDataPath, newMHTestDataFile);
      console.log(
        `Updated ${mhTestDataPath} with ${missingMHTestData.length} new test data entries`
      );
    }
  }

  // 6. Print summary
  if (DRYRUN) {
    console.log("\n--- DRY RUN SUMMARY ---");
    console.log(
      `Missing from pseudocodePatterns: ${missingPseudocodePatterns.length} patterns`
    );
    console.log(
      `Missing from PATTERN_KEYS: ${missingPatternKeys.length} patterns`
    );
    console.log(
      `Missing from monsterHunterPatternsExtended4: ${missingMHPatterns.length} patterns`
    );
    console.log(
      `Missing from MonsterHunterGuide: ${missingMHGuide.length} patterns`
    );
    console.log(
      `Missing from monsterHunterTestData: ${missingMHTestData.length} patterns`
    );
    dryrunActions.forEach((action) => console.log(action));
    console.log("\nDry run complete! No files were changed.");
  } else {
    console.log("\n--- SYNC COMPLETE ---");
    console.log(
      `Added ${missingPseudocodePatterns.length} patterns to pseudocodePatterns`
    );
    console.log(`Added ${missingPatternKeys.length} patterns to PATTERN_KEYS`);
    console.log(
      `Added ${missingMHPatterns.length} patterns to monsterHunterPatternsExtended4`
    );
    console.log(
      `Added ${missingMHGuide.length} patterns to MonsterHunterGuide`
    );
    console.log(
      `Added ${missingMHTestData.length} patterns to monsterHunterTestData`
    );
  }
}

main().catch(console.error);
