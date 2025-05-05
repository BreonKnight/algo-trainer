import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the pseudocode-patterns.tsx file
const filePath = path.join(__dirname, "pseudocode-patterns.tsx");

// Read the file
let fileContent = fs.readFileSync(filePath, "utf8");

// First, fix any double commas and formatting issues
fileContent = fileContent
  .replace(/\),+(\s*["'])/g, "),\n    $1")
  .replace(/^(\s+)["']/gm, '    "')
  .replace(/\n\s*\n\s*\n/g, "\n\n");

// Function to escape JSX special characters
function escapeJSX(text) {
  return text
    .replace(/</g, '{"<"}')
    .replace(/>/g, '{">"}')
    .replace(/&/g, "&amp;")
    .replace(/\s*\|\s*/g, " &nbsp;|&nbsp; ");
}

// Function to convert a plain text entry to JSX format
function convertToJSX(key, content) {
  // Extract title, type, time, space, and use case
  const titleMatch = content.match(/^# (.*?)(?:\n|$)/);
  const typeMatch = content.match(/Type: (.*?)(?:\n|$)/);
  const timeMatch = content.match(/Time: (.*?)(?:\n|$)/);
  const spaceMatch = content.match(/Space: (.*?)(?:\n|$)/);
  const useCaseMatch = content.match(/Use Case: (.*?)(?:\n|$)/);

  const title = titleMatch ? titleMatch[1] : key;
  const type = typeMatch ? typeMatch[1] : "";
  const time = timeMatch ? timeMatch[1] : "";
  const space = spaceMatch ? spaceMatch[1] : "";
  const useCase = useCaseMatch ? useCaseMatch[1] : "";

  // Extract steps
  const steps = [];
  const stepRegex = /(\d+)\. ([^\n]+)(?:\n(?:\s*-[^\n]*)*)?/g;
  let match;

  while ((match = stepRegex.exec(content)) !== null) {
    const stepNumber = match[1];
    const stepTitle = match[2].trim();
    const stepDetails = (match[0].match(/\n\s*-([^\n]*)/g) || [])
      .map((line) => line.replace(/\n\s*-\s*/, "").trim())
      .join(", ");

    steps.push({ number: stepNumber, title: stepTitle, details: stepDetails });
  }

  // Generate JSX
  let jsx = `    "${key}": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">${escapeJSX(title)}</span>
          <span className="ml-2 text-xs text-secondary">
            (${escapeJSX(type)})
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: ${escapeJSX(time)} &nbsp;|&nbsp; Space: ${escapeJSX(space)}
          &nbsp;|&nbsp; Use: ${escapeJSX(useCase)}
        </div>`;

  steps.forEach((step) => {
    jsx += `
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">${step.number}.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">${escapeJSX(step.title)}</span>{" "}
            ${escapeJSX(step.details)}
          </span>
        </div>`;
  });

  jsx += `
      </div>
    ),`;

  return jsx;
}

// Find all plain text entries and convert them to JSX
const plainTextRegex = /(\s*)(?:["'])?([^"'\s]+)(?:["'])?\s*:\s*`([\s\S]*?)`/g;
let match;
let newContent = fileContent;

while ((match = plainTextRegex.exec(fileContent)) !== null) {
  const [fullMatch, indent, key, content] = match;
  const jsx = convertToJSX(key, content);

  // Replace the plain text entry with the JSX version
  newContent = newContent.replace(fullMatch, indent + jsx.trim());
}

// Final cleanup
newContent = newContent
  .replace(/\),+(\s*["'])/g, "),\n    $1")
  .replace(/^(\s+)["']/gm, '    "')
  .replace(/\n\s*\n\s*\n/g, "\n\n")
  .replace(/\),+(\s*})/g, ")\n  $1");

// Write the updated content back to the file
fs.writeFileSync(filePath, newContent, "utf8");

console.log("Conversion complete!");
