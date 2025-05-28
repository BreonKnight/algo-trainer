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
const mhPatternPath = "src/components/algorithm-trainer/monsterHunterPatternsExtended4.ts";
const mhGuidePath = "src/components/algorithm-trainer/MonsterHunterGuide.tsx";
const mhTestDataPath = "src/components/algorithm-trainer/monsterHunterTestData.ts";
const implRoot = "src/components/algorithm-trainer/patterns";

// --- HELPERS ---
function toPatternKey(filename) {
  let name = filename.replace(/\.tsx$/, "");
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
function groupForPattern(key) {
  if (/sort/i.test(key)) return "sorting";
  if (/search/i.test(key)) return "searching";
  if (/dp|dynamic programming/i.test(key)) return "dp";
  if (/queue|stack|heap|tree|trie|linked list|hash/i.test(key)) return "data-structures";
  if (
    /graph|bfs|dfs|dijkstra|kruskal|prim|floyd|bellman|kosaraju|network|bridge|articulation/i.test(
      key
    )
  )
    return "graphs";
  if (/matrix|grid/i.test(key)) return "matrix";
  if (/probability|compression|fft|z-algorithm|kmp|rabin-karp|manacher/i.test(key))
    return "advanced";
  return "misc";
}

// Recursively search all subfolders for the file
function fileExistsInSubfolders(root, fileName) {
  const entries = fs.readdirSync(root, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      if (fileExistsInSubfolders(fullPath, fileName)) return true;
    } else if (entry.isFile() && entry.name === fileName) {
      return true;
    }
  }
  return false;
}

// --- 1. Get all pattern filenames ---
const files = fs.readdirSync(patternDir).filter((f) => f.endsWith(".tsx"));
const filePatternKeys = files.map(toPatternKey);

// --- 2. Get all keys in pseudocodePatterns ---
const indexFile = fs.readFileSync(indexFilePath, "utf8");
const patternsMatch = indexFile.match(/export const pseudocodePatterns:.*?{([\s\S]*?)};/);
const patternObj = patternsMatch[1];
const patternObjKeys = Array.from(patternObj.matchAll(/"([^"]+)":/g)).map((m) => m[1]);

// --- 3. Get all dropdown options (PATTERN_KEYS) ---
const typesFile = fs.readFileSync(typesFilePath, "utf8");
const patternKeysMatch = typesFile.match(/export const PATTERN_KEYS = \[(.*?)\] as const;/s);
const patternKeys = patternKeysMatch[1]
  .split("\n")
  .map((line) => line.replace(/["',]/g, "").trim())
  .filter(Boolean);

// --- 4. Get all Monster Hunter Guide/Pattern/TestData keys ---
const mhPatternFile = fs.readFileSync(mhPatternPath, "utf8");
const mhPatternKeys = Array.from(mhPatternFile.matchAll(/\[\s*"([^"]+)" as PatternKey,/g)).map(
  (m) => m[1]
);

const mhGuideFile = fs.readFileSync(mhGuidePath, "utf8");
const mhGuideKeys = Array.from(mhGuideFile.matchAll(/["']([^"']+)["']: ?{/g)).map((m) => m[1]);

const mhTestDataFile = fs.readFileSync(mhTestDataPath, "utf8");
const mhTestDataKeys = Array.from(mhTestDataFile.matchAll(/["']([^"']+)["']: ?`/g)).map(
  (m) => m[1]
);

// --- 5. For each pattern, check and add missing entries ---
filePatternKeys.forEach((key) => {
  // 1. pseudocodePatterns
  if (!patternObjKeys.includes(key)) {
    console.log(`[MISSING] ${key} not in pseudocodePatterns`);
  }
  // 2. PATTERN_KEYS
  if (!patternKeys.includes(key)) {
    console.log(`[MISSING] ${key} not in PATTERN_KEYS`);
  }
  // 3. Monster Hunter Pattern
  if (!mhPatternKeys.includes(key)) {
    console.log(`[MISSING] ${key} not in monsterHunterPatternsExtended4`);
    const content = `\n[\n  "${key}" as PatternKey,\n  \`def monster_hunter_${key
      .replace(/ /g, "_")
      .toLowerCase()}():\n    \"\"\"Monster Hunter themed pseudocode for ${key}\"\"\"\n    pass\n  \`,\n],\n`;
    if (DRYRUN) {
      dryrunActions.push(`[DRYRUN] Would append to ${mhPatternPath}:\n${content}`);
    } else {
      fs.appendFileSync(mhPatternPath, content);
    }
  }
  // 4. Monster Hunter Guide
  if (!mhGuideKeys.includes(key)) {
    console.log(`[MISSING] ${key} not in MonsterHunterGuide`);
    const content = `\n  "${key}": {\n    title: "${key} (Monster Hunter Guide)",\n    description: "No monster hunting guide available for this algorithm yet.",\n    example: "Check back later for a monster-themed explanation!",\n    tips: ["More monster hunting tips coming soon!"],\n  },\n`;
    if (DRYRUN) {
      dryrunActions.push(`[DRYRUN] Would append to ${mhGuidePath}:\n${content}`);
    } else {
      fs.appendFileSync(mhGuidePath, content);
    }
  }
  // 5. Monster Hunter Test Data
  if (!mhTestDataKeys.includes(key)) {
    console.log(`[MISSING] ${key} not in monsterHunterTestData`);
    const content = `\n  "${key}": \`# Monster Hunter Test Data for ${key}\n# Add your test cases here!\n\`,\n`;
    if (DRYRUN) {
      dryrunActions.push(`[DRYRUN] Would append to ${mhTestDataPath}:\n${content}`);
    } else {
      fs.appendFileSync(mhTestDataPath, content);
    }
  }
  // 6. Implementation file in grouped folder (check all subfolders)
  const implFileName = `${key.replace(/ /g, "")}.tsx`;
  const implExists = fileExistsInSubfolders(implRoot, implFileName);
  const group = groupForPattern(key);
  const implDir = path.join(implRoot, group);
  if (!implExists) {
    if (!fs.existsSync(implDir)) {
      if (DRYRUN) {
        dryrunActions.push(`[DRYRUN] Would create directory ${implDir}`);
      } else {
        fs.mkdirSync(implDir, { recursive: true });
      }
    }
    const implFile = path.join(implDir, implFileName);
    const content = `// ${key} implementation for Monster Hunter\n\nexport default function ${key.replace(
      / /g,
      ""
    )}() {\n  return <div>${key} implementation coming soon!</div>;\n}\n`;
    if (DRYRUN) {
      dryrunActions.push(`[DRYRUN] Would create file ${implFile}`);
    } else {
      fs.writeFileSync(implFile, content);
      console.log(`[CREATED] ${implFile}`);
    }
  }
});

if (DRYRUN) {
  console.log("\n--- DRY RUN SUMMARY ---");
  dryrunActions.forEach((action) => console.log(action));
  console.log(`\nTotal actions: ${dryrunActions.length}`);
  console.log("Dry run complete! No files were changed.");
} else {
  console.log(
    "Done! All missing Monster Hunter entries and implementation files have been handled."
  );
}
