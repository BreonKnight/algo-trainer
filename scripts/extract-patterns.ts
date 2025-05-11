import fs from "fs";
import path from "path";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";

interface AlgorithmPattern {
  name: string;
  timeComplexity: string;
  spaceComplexity: string;
  useCase: string;
  description?: string;
  pseudocode: string;
  keySteps: {
    title: string;
    description: string;
  }[];
  examples?: {
    title: string;
    code: string;
  }[];
  implementation?: {
    language: string;
    code: string;
  }[];
}

function extractPatternFromFile(filePath: string): AlgorithmPattern | null {
  const content = fs.readFileSync(filePath, "utf-8");

  // Parse the TSX file
  const ast = parse(content, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  let pattern: Partial<AlgorithmPattern> = {
    keySteps: [],
    examples: [],
    implementation: [],
  };

  traverse(ast, {
    // Extract name, key steps, examples, implementations, complexity, and pseudocode
    JSXElement(path) {
      // Extract name from gradient text span
      if (
        path.node.openingElement.name.type === "JSXIdentifier" &&
        path.node.openingElement.name.name === "span" &&
        path.node.openingElement.attributes.some(
          (attr) =>
            attr.type === "JSXAttribute" &&
            attr.name.name === "className" &&
            attr.value?.type === "StringLiteral" &&
            attr.value.value.includes("bg-gradient-to-r")
        )
      ) {
        const textContent = path.node.children
          .filter((child): child is t.JSXText => child.type === "JSXText")
          .map((child) => child.value.trim())
          .join("");
        if (textContent) {
          pattern.name = textContent;
        }
      }

      // Extract key steps
      if (
        path.node.openingElement.name.type === "JSXIdentifier" &&
        path.node.openingElement.name.name === "div" &&
        path.node.children.some(
          (child) =>
            child.type === "JSXElement" &&
            child.openingElement.name.type === "JSXIdentifier" &&
            child.openingElement.name.name === "ChevronRight"
        )
      ) {
        // Helper to recursively find all <span> descendants
        function findAllSpans(node: t.JSXElement): t.JSXElement[] {
          let spans: t.JSXElement[] = [];
          if (
            node.openingElement.name.type === "JSXIdentifier" &&
            node.openingElement.name.name === "span"
          ) {
            spans.push(node);
          }
          for (const child of node.children) {
            if (child.type === "JSXElement") {
              spans = spans.concat(findAllSpans(child));
            }
          }
          return spans;
        }
        const allSpans = findAllSpans(path.node);
        for (const span of allSpans) {
          const textContent = span.children
            .filter((c): c is t.JSXText => c.type === "JSXText")
            .map((c) => c.value.trim())
            .join("");
          if (textContent) {
            if (textContent.includes(":")) {
              const [title, description] = textContent.split(":").map((s) => s.trim());
              if (title && description) {
                pattern.keySteps?.push({ title, description });
              }
            } else {
              pattern.keySteps?.push({ title: "", description: textContent });
            }
          }
        }
      }

      // Extract examples and implementations
      if (
        path.node.openingElement.name.type === "JSXIdentifier" &&
        path.node.openingElement.name.name === "pre"
      ) {
        const parent = path.parent;
        if (parent.type === "JSXElement") {
          const titleElement = parent.children.find(
            (child): child is t.JSXElement =>
              child.type === "JSXElement" &&
              child.openingElement.name.type === "JSXIdentifier" &&
              child.openingElement.name.name === "span" &&
              child.openingElement.attributes.some(
                (attr) =>
                  attr.type === "JSXAttribute" &&
                  attr.name.name === "className" &&
                  attr.value?.type === "StringLiteral" &&
                  attr.value.value.includes("font-semibold")
              )
          );

          const title =
            titleElement?.children
              .filter((child): child is t.JSXText => child.type === "JSXText")
              .map((child) => child.value.trim())
              .join("") || "";

          const code = path.node.children
            .filter((child): child is t.JSXText => child.type === "JSXText")
            .map((child) => child.value)
            .join("");

          if (title.toLowerCase().includes("implementation")) {
            pattern.implementation?.push({
              language: title.split("(")[1]?.split(")")[0] || "Unknown",
              code,
            });
          } else {
            pattern.examples?.push({ title, code });
          }
        }
      }

      // Extract complexity from <p> tags
      if (
        path.node.openingElement.name.type === "JSXIdentifier" &&
        path.node.openingElement.name.name === "p"
      ) {
        const text = path.node.children
          .filter((c): c is t.JSXText => c.type === "JSXText")
          .map((c) => c.value.trim())
          .join("");

        if (text.includes("Time Complexity:")) {
          pattern.timeComplexity = text.replace("Time Complexity:", "").trim();
        } else if (text.includes("Space Complexity:")) {
          pattern.spaceComplexity = text.replace("Space Complexity:", "").trim();
        } else if (text.includes("Use:")) {
          pattern.useCase = text.replace("Use:", "").trim();
        }
      }

      // Extract pseudocode from <PseudocodeDisplay> or <pre>
      if (
        path.node.openingElement.name.type === "JSXIdentifier" &&
        (path.node.openingElement.name.name === "PseudocodeDisplay" ||
          path.node.openingElement.name.name === "pre")
      ) {
        if (path.node.openingElement.name.name === "PseudocodeDisplay") {
          const codeAttr = path.node.openingElement.attributes.find(
            (attr) => attr.type === "JSXAttribute" && attr.name.name === "code"
          );
          if (codeAttr && codeAttr.type === "JSXAttribute" && codeAttr.value) {
            if (codeAttr.value.type === "StringLiteral") {
              pattern.pseudocode = codeAttr.value.value;
            } else if (
              codeAttr.value.type === "JSXExpressionContainer" &&
              codeAttr.value.expression.type === "TemplateLiteral"
            ) {
              pattern.pseudocode = codeAttr.value.expression.quasis
                .map((quasi) => quasi.value.raw)
                .join("");
            }
          }
        } else {
          // Extract from <pre> template literal
          const templateLiteral = path.node.children.find(
            (child): child is t.JSXExpressionContainer =>
              child.type === "JSXExpressionContainer" && child.expression.type === "TemplateLiteral"
          );
          if (templateLiteral && templateLiteral.expression.type === "TemplateLiteral") {
            pattern.pseudocode = templateLiteral.expression.quasis
              .map((quasi) => quasi.value.raw)
              .join("");
          }
        }
      }
    },

    // Extract complexity and use case, and pseudocode from <pre>
    JSXText(path) {
      const text = path.node.value.trim();

      // Extract complexity and use case
      if (text.includes("Time:") && text.includes("Space:") && text.includes("Use:")) {
        const timeMatch = text.match(/Time:\s*([^&]+)/);
        const spaceMatch = text.match(/Space:\s*([^&]+)/);
        const useMatch = text.match(/Use:\s*([^&]+)/);

        if (timeMatch) pattern.timeComplexity = timeMatch[1].trim();
        if (spaceMatch) pattern.spaceComplexity = spaceMatch[1].trim();
        if (useMatch) pattern.useCase = useMatch[1].trim();
      }

      // Extract pseudocode from <pre> if no <PseudocodeDisplay> is found
      const parent = path.parent;
      if (
        parent.type === "JSXElement" &&
        parent.openingElement.name.type === "JSXIdentifier" &&
        parent.openingElement.name.name === "pre" &&
        !pattern.pseudocode
      ) {
        pattern.pseudocode = text;
      }
    },

    // Extract pseudocode
    CallExpression(path) {
      if (path.node.callee.type === "Identifier" && path.node.callee.name === "PseudocodeDisplay") {
        console.log("Found PseudocodeDisplay component");
        const arg = path.node.arguments[0];
        console.log("Argument type:", arg.type);
        if (arg.type === "ObjectExpression") {
          console.log(
            "Properties:",
            arg.properties.map((p) => ({
              type: p.type,
              key:
                p.type === "ObjectProperty" && p.key.type === "Identifier" ? p.key.name : "unknown",
              valueType: p.type === "ObjectProperty" ? p.value.type : "unknown",
            }))
          );
          const codeProp = arg.properties.find(
            (prop): prop is t.ObjectProperty =>
              prop.type === "ObjectProperty" &&
              prop.key.type === "Identifier" &&
              prop.key.name === "code"
          );
          if (codeProp) {
            console.log("Found code prop, type:", codeProp.value.type);
            if (codeProp.value.type === "StringLiteral") {
              pattern.pseudocode = codeProp.value.value;
            } else if (codeProp.value.type === "TemplateLiteral") {
              // For template literals, join all the quasis (the static parts)
              pattern.pseudocode = codeProp.value.quasis.map((quasi) => quasi.value.raw).join("");
            }
          } else {
            console.log("No code prop found");
          }
        }
      }
    },
  });

  // Only return if we have the minimum required fields
  if (
    pattern.name &&
    pattern.timeComplexity &&
    pattern.spaceComplexity &&
    pattern.useCase &&
    pattern.pseudocode &&
    pattern.keySteps &&
    pattern.keySteps.length > 0
  ) {
    return pattern as AlgorithmPattern;
  }

  throw new Error(`Extraction failed for ${filePath}:\n${JSON.stringify(pattern, null, 2)}`);
  // return null;
}

function processPatternsDirectory() {
  const patternsDir = path.join(__dirname, "../src/lib/pseudocode/patterns");
  const outputFile = path.join(__dirname, "../src/lib/pseudocode/patterns.json");

  const patterns: Record<string, AlgorithmPattern> = {};

  const files = fs.readdirSync(patternsDir).filter((file) => file.endsWith(".tsx"));

  console.log(`Found ${files.length} TSX files in ${patternsDir}`);

  for (const file of files) {
    const filePath = path.join(patternsDir, file);
    console.log(`Processing ${file}...`);
    const pattern = extractPatternFromFile(filePath);

    if (pattern) {
      const key = file.replace(".tsx", "");
      patterns[key] = pattern;
      console.log(`Successfully extracted pattern from ${file}`);
    } else {
      console.log(`Failed to extract pattern from ${file}`);
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(patterns, null, 2));
  console.log(`Extracted ${Object.keys(patterns).length} patterns to ${outputFile}`);
}

processPatternsDirectory();
