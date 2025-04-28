import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the pseudocode-patterns.tsx file
const filePath = path.join(__dirname, "pseudocode-patterns.tsx");

// Read the file
let content = fs.readFileSync(filePath, "utf8");

// Fix extra commas
content = content.replace(/\),+(\s*["'])/g, "),\n    $1");

// Fix indentation
content = content.replace(/^(\s+)["']/gm, '    "');

// Fix line breaks
content = content.replace(/\n\s*\n\s*\n/g, "\n\n");

// Write the cleaned content back to the file
fs.writeFileSync(filePath, content, "utf8");

console.log("Cleanup complete!");
