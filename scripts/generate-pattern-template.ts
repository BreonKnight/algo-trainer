import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

interface PatternTemplate {
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

class PatternTemplateGenerator {
  private readonly rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public async generateTemplate(): Promise<PatternTemplate> {
    console.log("🎮 Monster Hunter Pattern Template Generator 🎮");
    console.log("Let's create a new pattern template!\n");

    const template: PatternTemplate = {
      name: await this.prompt('Pattern Name (e.g., "Binary Search on Answer"): '),
      category: await this.prompt(
        'Category (e.g., "Searching", "Sorting", "Dynamic Programming"): '
      ),
      timeComplexity: await this.prompt('Time Complexity (e.g., "O(log n)"): '),
      spaceComplexity: await this.prompt('Space Complexity (e.g., "O(1)"): '),
      monsterHunterContext: await this.promptList(
        "Monster Hunter Context (enter one line at a time, empty line to finish): "
      ),
      example: {
        input: await this.prompt(
          'Example Input (e.g., "min_rarity = 1, max_rarity = 10, target_value = 7"): '
        ),
        output: await this.prompt('Example Output (e.g., "7"): '),
      },
      process: await this.promptList(
        "Process Steps (enter one step at a time, empty line to finish): "
      ),
      implementation: await this.promptMultiline(
        "Implementation (enter your code, empty line to finish): "
      ),
    };

    this.rl.close();
    return template;
  }

  private prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer.trim());
      });
    });
  }

  private async promptList(question: string): Promise<string[]> {
    console.log(question);
    const items: string[] = [];

    while (true) {
      const item = await this.prompt("> ");
      if (item === "") break;
      items.push(item);
    }

    return items;
  }

  private async promptMultiline(question: string): Promise<string> {
    console.log(question);
    const lines: string[] = [];

    while (true) {
      const line = await this.prompt("> ");
      if (line === "") break;
      lines.push(line);
    }

    return lines.join("\n");
  }

  public saveTemplate(template: PatternTemplate, outputPath: string): void {
    const content = `// Pattern Configuration Template
// Generated on: ${new Date().toISOString()}

const patternConfig: PatternConfig = {
  name: "${template.name}",
  category: "${template.category}",
  timeComplexity: "${template.timeComplexity}",
  spaceComplexity: "${template.spaceComplexity}",
  monsterHunterContext: [
${template.monsterHunterContext.map((ctx) => `    "${ctx}"`).join(",\n")}
  ],
  example: {
    input: "${template.example.input}",
    output: "${template.example.output}"
  },
  process: [
${template.process.map((step) => `    "${step}"`).join(",\n")}
  ],
  implementation: \`${template.implementation}\`
};

// To use this template:
// 1. Copy this configuration
// 2. Paste it into automate-pattern-addition.ts
// 3. Run the automation script

// Example usage:
// const automator = new PatternAutomator(patternConfig);
// automator.automate().catch(console.error);
`;

    fs.writeFileSync(outputPath, content);
    console.log(`\nTemplate saved to: ${outputPath}`);
  }
}

// Example usage
async function main() {
  const generator = new PatternTemplateGenerator();
  const template = await generator.generateTemplate();

  const outputPath = path.join(
    process.cwd(),
    "templates",
    `${template.name.toLowerCase().replace(/\s+/g, "-")}-template.ts`
  );

  // Ensure templates directory exists
  const templatesDir = path.dirname(outputPath);
  if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
  }

  generator.saveTemplate(template, outputPath);
}

main().catch(console.error);
