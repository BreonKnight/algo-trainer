const fs = require("fs");
const path = require("path");

const PATTERNS_DIR = path.join(__dirname, "../src/lib/pseudocode/patterns");

// Improved regex: matches code={`...`} or code=`...` (greedy, multiline)
const CODE_BLOCK_REGEX = /code=\{?`([\s\S]*?)`[}\)]/g;

function fixIndentation(code) {
  // Split into lines, trim right, remove leading empty lines
  let lines = code.split("\n").map((line) => line.replace(/\s+$/, ""));
  while (lines.length && lines[0].trim() === "") lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();

  // Find minimum indentation (ignoring empty lines)
  const minIndent = lines
    .filter((line) => line.trim())
    .reduce((min, line) => {
      const match = line.match(/^(\s*)/);
      return match ? Math.min(min, match[1].length) : min;
    }, Infinity);

  // Remove minIndent from each line, then replace tabs with 2 spaces
  return lines
    .map((line) => (line.startsWith(" ".repeat(minIndent)) ? line.slice(minIndent) : line))
    .map((line) => line.replace(/\t/g, "  "))
    .join("\n");
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  content = content.replace(CODE_BLOCK_REGEX, (match, code) => {
    const fixed = fixIndentation(code);
    if (fixed !== code) {
      changed = true;
      console.log(`Fixed pseudocode block in: ${filePath}`);
    }
    // Reconstruct the match with the fixed code
    return match.replace(code, fixed);
  });

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("File updated:", filePath);
  }
}

fs.readdirSync(PATTERNS_DIR)
  .filter((f) => f.endsWith(".tsx"))
  .forEach((f) => processFile(path.join(PATTERNS_DIR, f)));
