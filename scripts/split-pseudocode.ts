import fs from "fs";
import path from "path";

const SOURCE_FILE = path.join(process.cwd(), "src/lib/pseudocode-patterns.tsx");
const OUTPUT_DIR = path.join(process.cwd(), "src/lib/pseudocode");

// Create directory structure
const createDirectoryStructure = () => {
  const dirs = [
    OUTPUT_DIR,
    path.join(OUTPUT_DIR, "patterns"),
    path.join(OUTPUT_DIR, "utils"),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// Extract pattern name from pattern definition
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const extractPatternName = (pattern: string): string => {
  const match = pattern.match(/['"](\w+(\s+\w+)*)['"]:/);
  return match ? match[1] : "";
};

// Generate pattern file content
const generatePatternFile = (
  patternName: string,
  patternContent: string
): string => {
  return `import { ChevronRight } from "lucide-react";

export const ${patternName.replace(/\s+/g, "")}Pattern = () => (
${patternContent}
);`;
};

// Generate index file content
const generateIndexFile = (patternNames: string[]): string => {
  const imports = patternNames
    .map(
      (name) =>
        `import { ${name.replace(/\s+/g, "")}Pattern } from './patterns/${name
          .toLowerCase()
          .replace(/\s+/g, "-")}';`
    )
    .join("\n");

  const exports = patternNames
    .map((name) => `  "${name}": ${name.replace(/\s+/g, "")}Pattern,`)
    .join("\n");

  return `${imports}

export const pseudocodePatterns: Record<string, () => JSX.Element> = {
${exports}
};`;
};

// Generate types file
const generateTypesFile = (): string => {
  return `import { JSX } from 'react';

export type PatternComponent = () => JSX.Element;
export type PatternMap = Record<string, PatternComponent>;
`;
};

// Generate utils file
const generateUtilsFile = (mappingContent: string): string => {
  return `export const patternNameMapping: Record<string, string> = {
${mappingContent}
};`;
};

// Main function to split the file
const splitPseudocodeFile = () => {
  try {
    // Read the source file
    const content = fs.readFileSync(SOURCE_FILE, "utf-8");

    // Create directory structure
    createDirectoryStructure();

    // Extract pattern mapping
    const mappingMatch = content.match(
      /export const patternNameMapping: Record<string, string> = {([^}]+)};/
    );
    if (mappingMatch) {
      fs.writeFileSync(
        path.join(OUTPUT_DIR, "utils/pattern-mapping.ts"),
        generateUtilsFile(mappingMatch[1])
      );
    }

    // Extract patterns using a more comprehensive regex
    const patternRegex = /['"](\w+(\s+\w+)*)['"]:\s*\(\)\s*=>\s*\(([^)]+)\)/g;
    const patterns: { name: string; content: string }[] = [];
    let match;

    while ((match = patternRegex.exec(content)) !== null) {
      patterns.push({
        name: match[1],
        content: match[3],
      });
    }

    // Add missing patterns from mapping
    const mappingContent = fs.readFileSync(
      path.join(OUTPUT_DIR, "utils/pattern-mapping.ts"),
      "utf-8"
    );
    const mappingRegex = /['"](\w+(\s+\w+)*)['"]:\s*['"](\w+(\s+\w+)*)['"]/g;
    const mappingMatches = mappingContent.matchAll(mappingRegex);

    for (const mappingMatch of mappingMatches) {
      const patternName = mappingMatch[1];
      if (!patterns.some((p) => p.name === patternName)) {
        patterns.push({
          name: patternName,
          content: `  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">${patternName} Template</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm Pattern)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - depends on implementation &nbsp;|&nbsp;
      Space: O(n) - depends on implementation &nbsp;|&nbsp;
      Use: ${patternName} problems
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up data structures
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Implement ${patternName} logic
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Return result
      </span>
    </div>
  </div>`,
        });
      }
    }

    // Remove duplicates
    const uniquePatterns = patterns.filter(
      (pattern, index, self) =>
        index === self.findIndex((p) => p.name === pattern.name)
    );

    // Generate pattern files
    uniquePatterns.forEach((pattern) => {
      const fileName = pattern.name.toLowerCase().replace(/\s+/g, "-");
      fs.writeFileSync(
        path.join(OUTPUT_DIR, `patterns/${fileName}.tsx`),
        generatePatternFile(pattern.name, pattern.content)
      );
    });

    // Generate index file
    fs.writeFileSync(
      path.join(OUTPUT_DIR, "index.tsx"),
      generateIndexFile(uniquePatterns.map((p) => p.name))
    );

    // Generate types file
    fs.writeFileSync(path.join(OUTPUT_DIR, "types.ts"), generateTypesFile());

    console.log("Successfully split pseudocode patterns into separate files!");
  } catch (error) {
    console.error("Error splitting pseudocode patterns:", error);
  }
};

// Run the script
splitPseudocodeFile();
