import fs from "fs";
import path from "path";
import { glob } from "glob";

interface Pattern {
  name: string;
  type: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  useCase: string;
  pseudocode: string;
  keySteps: string[];
}

async function extractPatternInfo(filePath: string): Promise<Pattern | null> {
  const content = fs.readFileSync(filePath, "utf-8");

  // Extract name
  const nameMatch = content.match(/<span[^>]*>([^<]+)<\/span>/);
  if (!nameMatch) return null;
  const name = nameMatch[1].trim();

  // Extract type (string inside first parentheses after the name)
  // Look for: <span ...>NAME</span> ... (TYPE)
  // We'll search for the first parenthesis after the name span
  let type = "";
  const nameIndex = content.indexOf(nameMatch[0]);
  if (nameIndex !== -1) {
    const afterName = content.slice(nameIndex + nameMatch[0].length);
    const typeMatch = afterName.match(/\(([^)]+)\)/);
    if (typeMatch) {
      type = typeMatch[1].trim();
    }
  }

  // Extract description, time, space, and use case
  const descriptionMatch = content.match(/<p>([^<]+)<\/p>/);
  const timeMatch = content.match(/Time: ([^<]+)/);
  const spaceMatch = content.match(/Space: ([^<]+)/);
  const useMatch = content.match(/Use: ([^<]+)/);

  // Extract pseudocode
  const pseudocodeMatch = content.match(/code={`([^`]+)`}/s);

  // Extract key steps
  const keyStepsMatches = content.matchAll(/<span>([^<]+)<\/span>/g);
  const keySteps = Array.from(keyStepsMatches)
    .map((match) => match[1].trim())
    .filter(
      (step) => !step.includes("Time:") && !step.includes("Space:") && !step.includes("Use:")
    );

  return {
    name,
    type,
    description: descriptionMatch?.[1] || "",
    timeComplexity: timeMatch?.[1] || "",
    spaceComplexity: spaceMatch?.[1] || "",
    useCase: useMatch?.[1] || "",
    pseudocode: pseudocodeMatch?.[1] || "",
    keySteps: keySteps.slice(0, 4), // Take only the first 4 key steps
  };
}

async function updatePatternsJson() {
  const patternsDir = path.join(process.cwd(), "src/lib/pseudocode/patterns");
  const patternFiles = await glob("*.tsx", { cwd: patternsDir });

  const patterns: Record<string, Pattern> = {};

  for (const file of patternFiles) {
    const filePath = path.join(patternsDir, file);
    const patternInfo = await extractPatternInfo(filePath);

    if (patternInfo) {
      const key = file.replace(".tsx", "");
      patterns[key] = patternInfo;
    }
  }

  const outputPath = path.join(process.cwd(), "src/lib/pseudocode/patterns.json");
  fs.writeFileSync(outputPath, JSON.stringify(patterns, null, 2));

  console.log(`Updated patterns.json with ${Object.keys(patterns).length} patterns`);
}

updatePatternsJson().catch(console.error);
