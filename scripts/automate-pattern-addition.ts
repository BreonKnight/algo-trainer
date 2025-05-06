import * as fs from "fs";
import * as path from "path";

interface PatternConfig {
  name: string;
  category: string;
  timeComplexity: string;
  spaceComplexity: string;
  monsterHunterContext: string[];
  example: {
    input: string;
    output: string;
  };
  process: string[];
  implementation: string;
}

class PatternAutomator {
  private readonly baseDir: string;
  private readonly patternConfig: PatternConfig;

  constructor(patternConfig: PatternConfig) {
    this.baseDir = path.resolve(__dirname, "..");
    this.patternConfig = patternConfig;
  }

  public async automate() {
    try {
      // 1. Update pattern mapping
      this.updatePatternMapping();

      // 2. Create pseudocode implementation
      this.createPseudocodeImplementation();

      // 3. Update pattern mapping in index.tsx
      this.updatePatternMappingIndex();

      // 4. Create Monster Hunter implementation
      this.createMonsterHunterImplementation();

      // 5. Add test data
      this.addTestData();

      // 6. Update combined patterns
      this.updateCombinedPatterns();

      console.log("Pattern addition completed successfully!");
    } catch (error) {
      console.error("Error automating pattern addition:", error);
      throw error;
    }
  }

  private updatePatternMapping() {
    const mappingPath = path.join(this.baseDir, "src/lib/pseudocode/utils/pattern-mapping.ts");
    let content = fs.readFileSync(mappingPath, "utf-8");

    // Add new pattern to mapping
    const patternEntry = `  "${this.patternConfig.name}": "${this.patternConfig.name}",`;
    content = content.replace(
      "export const patternNameMapping: Record<string, string> = {",
      `export const patternNameMapping: Record<string, string> = {\n${patternEntry}`
    );

    fs.writeFileSync(mappingPath, content);
  }

  private createPseudocodeImplementation() {
    const patternDir = path.join(this.baseDir, "src/lib/pseudocode/patterns");
    const patternFileName = `${this.patternConfig.name.toLowerCase().replace(/\s+/g, "-")}.tsx`;
    const patternPath = path.join(patternDir, patternFileName);

    const implementation = `import React from 'react';

export const ${this.patternConfig.name.replace(/\s+/g, "")}Pattern = () => {
  return (
    <div className="pseudocode">
      {/* ${this.patternConfig.name} implementation */}
      <div className="algorithm">
        <div className="algorithm-header">${this.patternConfig.name}</div>
        <div className="algorithm-complexity">
          Time: ${this.patternConfig.timeComplexity}
          Space: ${this.patternConfig.spaceComplexity}
        </div>
        <div className="algorithm-steps">
          ${this.patternConfig.process.map((step, i) => `${i + 1}. ${step}`).join("\n          ")}
        </div>
      </div>
    </div>
  );
};`;

    fs.writeFileSync(patternPath, implementation);
  }

  private updatePatternMappingIndex() {
    const indexPath = path.join(this.baseDir, "src/lib/pseudocode/index.tsx");
    let content = fs.readFileSync(indexPath, "utf-8");

    // Add import and pattern entry in one go
    content = content
      .replace("import {", `import {\n  ${this.patternConfig.name.replace(/\s+/g, "")}Pattern,`)
      .replace(
        "export const pseudocodePatterns = {",
        `export const pseudocodePatterns = {\n  "${
          this.patternConfig.name
        }": ${this.patternConfig.name.replace(/\s+/g, "")}Pattern,`
      );

    fs.writeFileSync(indexPath, content);
  }

  private createMonsterHunterImplementation() {
    const monsterHunterDir = path.join(this.baseDir, "src/components/algorithm-trainer");
    const fileName = `monsterHunterPatternsExtended${this.getNextExtensionNumber()}.ts`;
    const filePath = path.join(monsterHunterDir, fileName);

    const implementation = `import { PatternKey } from "./types";

export const monsterHunterPatternsExtended${this.getNextExtensionNumber()} = new Map<PatternKey, string>([
  [
    "${this.patternConfig.name}" as PatternKey,
    \`def monster_hunter_${this.patternConfig.name.toLowerCase().replace(/\s+/g, "_")}(input):
    """
    Time: ${this.patternConfig.timeComplexity}
    Space: ${this.patternConfig.spaceComplexity}
    
    Monster Hunter Context:
    ${this.patternConfig.monsterHunterContext.map((ctx) => `    - ${ctx}`).join("\n")}
    
    Example:
    ${this.patternConfig.example.input}
    ${this.patternConfig.example.output}
    
    Process:
    ${this.patternConfig.process.map((step, i) => `    ${i + 1}. ${step}`).join("\n")}
    """
    ${this.patternConfig.implementation}
    \`,
  ],
]);`;

    fs.writeFileSync(filePath, implementation);
  }

  private addTestData() {
    const testDataPath = path.join(
      this.baseDir,
      "src/components/algorithm-trainer/monsterHunterTestData.ts"
    );
    let content = fs.readFileSync(testDataPath, "utf-8");

    const testData = `  [
    "${this.patternConfig.name}" as PatternKey,
    \`# Monster Hunter ${this.patternConfig.name} Challenge
# ${this.patternConfig.monsterHunterContext[0]}

# Test Case 1: Basic Test
Input: ${this.patternConfig.example.input}
Expected Output: ${this.patternConfig.example.output}

# Monster Hunter Tip:
# ${this.patternConfig.monsterHunterContext[0]}\`,
  ],`;

    content = content.replace(
      "export const monsterHunterTestData = new Map<PatternKey, string>([",
      `export const monsterHunterTestData = new Map<PatternKey, string>([\n${testData}`
    );

    fs.writeFileSync(testDataPath, content);
  }

  private updateCombinedPatterns() {
    const combinedPath = path.join(
      this.baseDir,
      "src/components/algorithm-trainer/monsterHunterPatternsCombined.ts"
    );
    let content = fs.readFileSync(combinedPath, "utf-8");

    // Add import, pattern entry, and category in one go
    content = content
      .replace(
        "import {",
        `import {\n  monsterHunterPatternsExtended${this.getNextExtensionNumber()},`
      )
      .replace(
        "const allPatterns = new Map<PatternKey, string>([",
        `const allPatterns = new Map<PatternKey, string>([\n  ...monsterHunterPatternsExtended${this.getNextExtensionNumber()},`
      )
      .replace(
        new RegExp(`"${this.patternConfig.category}": \\[`, "g"),
        `"${this.patternConfig.category}": [\n    "${this.patternConfig.name}",`
      );

    fs.writeFileSync(combinedPath, content);
  }

  private getNextExtensionNumber(): number {
    const monsterHunterDir = path.join(this.baseDir, "src/components/algorithm-trainer");
    const files = fs.readdirSync(monsterHunterDir);
    const patternFiles = files.filter((file) => file.startsWith("monsterHunterPatternsExtended"));
    const numbers = patternFiles.map((file) => parseInt(file.match(/\d+/)?.[0] || "0"));
    return numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
  }
}

// Example usage:
const patternConfig: PatternConfig = {
  name: "Binary Search on Answer",
  category: "searching",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(1)",
  monsterHunterContext: [
    "Like finding the minimum rarity level needed to craft a weapon",
    "Each check determines if current rarity is sufficient",
    "Binary search helps find the optimal rarity level",
  ],
  example: {
    input: "min_rarity = 1, max_rarity = 10, target_value = 7",
    output: "7",
  },
  process: [
    "Check middle rarity (5)",
    "If insufficient, search higher rarities",
    "If sufficient, try lower rarities",
  ],
  implementation: `left = min_rarity
right = max_rarity
result = max_rarity

while left <= right:
    mid = (left + right) // 2
    if is_sufficient(mid):
        result = mid
        right = mid - 1
    else:
        left = mid + 1

return result`,
};

// Run the automation
const automator = new PatternAutomator(patternConfig);
automator.automate().catch(console.error);
