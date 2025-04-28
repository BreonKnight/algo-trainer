const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "src/components/algorithm-trainer/patterns.ts"
);
let fileContent = fs.readFileSync(filePath, "utf8");

// Regex to match pseudocode arrays
const pseudocodeRegex = /pseudocode:\s*\[((?:.|\n)*?)\],/g;

fileContent = fileContent.replace(pseudocodeRegex, (match, arrayContent) => {
  // Split into lines, remove quotes and commas, trim whitespace
  const lines = arrayContent
    .split("\n")
    .map((line) => line.replace(/^[\s"]+|["',]+$/g, "").trim())
    .filter((line) => line.length > 0);

  // Join as markdown code block
  const markdown = ["pseudocode: `\n```", ...lines, "```", "`,"].join("\n");

  return markdown;
});

fs.writeFileSync(filePath, fileContent, "utf8");
console.log("Pseudocode arrays converted to markdown code blocks!");
