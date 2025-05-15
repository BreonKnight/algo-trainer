import fs from "fs";
import path from "path";

import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import * as t from "@babel/types";

interface PatternCheck {
  file: string;
  missingFields: string[];
  hasName: boolean;
  hasTimeComplexity: boolean;
  hasSpaceComplexity: boolean;
  hasUseCase: boolean;
  hasPseudocode: boolean;
  hasKeySteps: boolean;
}

function checkPatternFile(filePath: string): PatternCheck {
  const content = fs.readFileSync(filePath, "utf-8");
  const ast = parse(content, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  const check: PatternCheck = {
    file: path.basename(filePath),
    missingFields: [],
    hasName: false,
    hasTimeComplexity: false,
    hasSpaceComplexity: false,
    hasUseCase: false,
    hasPseudocode: false,
    hasKeySteps: false,
  };

  traverse(ast, {
    JSXElement(path) {
      // Check for name
      if (
        path.node.openingElement.name.type === "JSXIdentifier" &&
        path.node.openingElement.name.name === "span" &&
        path.node.openingElement.attributes.some(
          (attr) =>
            attr.type === "JSXAttribute" &&
            attr.name.name === "className" &&
            attr.value?.type === "StringLiteral" &&
            (attr.value.value.includes("bg-gradient-to-r") ||
              attr.value.value.includes("text-accent"))
        )
      ) {
        check.hasName = true;
      }

      // Check for complexity and use case
      if (
        path.node.openingElement.name.type === "JSXIdentifier" &&
        path.node.openingElement.name.name === "div" &&
        path.node.openingElement.attributes.some(
          (attr) =>
            attr.type === "JSXAttribute" &&
            attr.name.name === "className" &&
            attr.value?.type === "StringLiteral" &&
            attr.value.value.includes("text-secondary")
        )
      ) {
        // Get all text content from the div and its children
        const getAllText = (node: t.JSXElement): string => {
          let text = "";
          for (const child of node.children) {
            if (child.type === "JSXText") {
              text += child.value.trim();
            } else if (child.type === "JSXElement") {
              text += getAllText(child);
            }
          }
          return text;
        };

        const text = getAllText(path.node);

        if (text.includes("Time:")) {
          check.hasTimeComplexity = true;
        }
        if (text.includes("Space:")) {
          check.hasSpaceComplexity = true;
        }
        if (text.includes("Use:")) {
          check.hasUseCase = true;
        }
      }

      // Check for pseudocode
      if (
        path.node.openingElement.name.type === "JSXIdentifier" &&
        path.node.openingElement.name.name === "PseudocodeDisplay"
      ) {
        check.hasPseudocode = true;
      }

      // Check for key steps
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
        check.hasKeySteps = true;
      }
    },
  });

  // Build missing fields list
  if (!check.hasName) check.missingFields.push("name");
  if (!check.hasTimeComplexity) check.missingFields.push("timeComplexity");
  if (!check.hasSpaceComplexity) check.missingFields.push("spaceComplexity");
  if (!check.hasUseCase) check.missingFields.push("useCase");
  if (!check.hasPseudocode) check.missingFields.push("pseudocode");
  if (!check.hasKeySteps) check.missingFields.push("keySteps");

  return check;
}

function checkPatternsDirectory() {
  const patternsDir = path.join(__dirname, "../src/lib/pseudocode/patterns");
  const files = fs.readdirSync(patternsDir).filter((file) => file.endsWith(".tsx"));

  console.log(`Checking ${files.length} TSX files in ${patternsDir}\n`);

  const results: PatternCheck[] = [];
  for (const file of files) {
    const filePath = path.join(patternsDir, file);
    const check = checkPatternFile(filePath);
    if (check.missingFields.length > 0) {
      results.push(check);
    }
  }

  // Sort by number of missing fields
  results.sort((a, b) => b.missingFields.length - a.missingFields.length);

  // Print results
  console.log("Files missing required fields:");
  console.log("=============================");
  for (const result of results) {
    console.log(`\n${result.file}:`);
    console.log(`Missing: ${result.missingFields.join(", ")}`);
  }

  console.log(`\nTotal files with missing fields: ${results.length}`);
}

checkPatternsDirectory();
