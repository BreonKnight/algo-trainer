// Python to JavaScript code transformer
interface TransformationRule {
  pattern: RegExp;
  replacement: string | ((...args: string[]) => string);
}

// Basic Python to JavaScript conversion rules
const PYTHON_TO_JS_RULES: TransformationRule[] = [
  // Comments (handle first to preserve them)
  {
    pattern: /^(\s*)#\s*(.+)/gm,
    replacement: (indent: string, content: string) => `${indent}// ${content}`,
  },

  // Function definitions
  {
    pattern: /^(\s*)def\s+(\w+)\s*\((.*?)\)\s*:/gm,
    replacement: (indent: string, name: string, params: string) =>
      `${indent}function ${name}(${params}) {`,
  },

  // Multiple assignments
  {
    pattern: /^(\s*)(\w+),\s*(\w+)\s*=\s*(\w+),\s*(\w+)/gm,
    replacement: (indent: string, var1: string, var2: string, val1: string, val2: string) =>
      `${indent}let ${var1} = ${val1};\n${indent}let ${var2} = ${val2}`,
  },

  // Integer division
  {
    pattern: /\/\//g,
    replacement: "Math.floor($1 / $2)",
  },

  // Control structures
  {
    pattern: /^(\s*)if\s+(.*?)\s*:/gm,
    replacement: (indent: string, condition: string) => `${indent}if (${condition}) {`,
  },
  {
    pattern: /^(\s*)elif\s+(.*?)\s*:/gm,
    replacement: (indent: string, condition: string) => `${indent}} else if (${condition}) {`,
  },
  {
    pattern: /^(\s*)else\s*:/gm,
    replacement: (indent: string) => `${indent}} else {`,
  },
  {
    pattern: /^(\s*)while\s+(.*?)\s*:/gm,
    replacement: (indent: string, condition: string) => `${indent}while (${condition}) {`,
  },
  {
    pattern: /^(\s*)for\s+(\w+)\s+in\s+(.*?)\s*:/gm,
    replacement: (indent: string, varName: string, iterable: string) =>
      `${indent}for (let ${varName} of ${iterable}) {`,
  },

  // Return statements
  {
    pattern: /^(\s*)return\s+(.*?)$/gm,
    replacement: (indent: string, value: string) => {
      // Don't add semicolon if the return value ends with a closing brace
      const shouldAddSemicolon = !value.trim().endsWith("}");
      return `${indent}return ${value}${shouldAddSemicolon ? ";" : ""}`;
    },
  },

  // Pass statement
  {
    pattern: /^(\s*)pass\s*$/gm,
    replacement: (indent: string) => `${indent}`,
  },

  // Variable assignments
  {
    pattern: /^(\s*)(\w+)\s*=\s*(.*?)$/gm,
    replacement: (indent: string, varName: string, value: string) =>
      `${indent}let ${varName} = ${value};`,
  },

  // Remove TypeScript type annotations
  {
    pattern: /:\s*(number|string|boolean|any|void|object|array|function)\s*(?=[,=)])/g,
    replacement: "",
  },

  // Fix array type annotations
  {
    pattern: /:\s*(\w+)\s*\[\]/g,
    replacement: "",
  },

  // Print statements
  {
    pattern: /print\((.*?)\)/,
    replacement: (content: string) => `console.log(${content})`,
  },

  // List comprehensions
  {
    pattern: /\[(.*?)\s+for\s+(\w+)\s+in\s+(.*?)\s+if\s+(.*?)\]/,
    replacement: (expr: string, varName: string, array: string, condition: string) =>
      `${array}.filter(${varName} => ${condition}).map(${varName} => ${expr})`,
  },
  {
    pattern: /\[(.*?)\s+for\s+(\w+)\s+in\s+(.*?)\]/,
    replacement: (expr: string, varName: string, array: string) =>
      `${array}.map(${varName} => ${expr})`,
  },

  // String formatting
  {
    pattern: /f"([^"]+)"/,
    replacement: (content: string) => `\`${content}\``,
  },

  // Boolean values
  {
    pattern: /\bTrue\b/g,
    replacement: "true",
  },
  {
    pattern: /\bFalse\b/g,
    replacement: "false",
  },
  {
    pattern: /\bNone\b/g,
    replacement: "null",
  },
];

// Helper function to apply transformations
function applyTransformations(code: string): string {
  let jsCode = code;

  // Apply each transformation rule
  for (const rule of PYTHON_TO_JS_RULES) {
    if (typeof rule.replacement === "string") {
      jsCode = jsCode.replace(rule.pattern, rule.replacement);
    } else {
      jsCode = jsCode.replace(rule.pattern, rule.replacement as (...args: string[]) => string);
    }
  }

  // Fix indentation
  const lines = jsCode.split("\n");
  let indentLevel = 0;
  const formattedLines = lines.map((line) => {
    const trimmedLine = line.trim();

    // Skip empty lines
    if (!trimmedLine) return "";

    // Count leading spaces for indentation
    const leadingSpaces = line.match(/^\s*/)[0].length;
    const currentIndent = "  ".repeat(Math.floor(leadingSpaces / 2));

    // Handle opening braces
    if (trimmedLine.endsWith("{")) {
      return currentIndent + trimmedLine;
    }

    // Handle closing braces
    if (trimmedLine === "}") {
      return currentIndent + trimmedLine;
    }

    // Handle else/else if
    if (trimmedLine.startsWith("} else")) {
      return currentIndent + trimmedLine;
    }

    // Regular line
    return currentIndent + trimmedLine;
  });

  // Join lines and clean up
  return formattedLines
    .filter((line) => line !== "") // Remove empty lines
    .join("\n")
    .replace(/\n\s*\n\s*\n/g, "\n\n"); // Fix multiple newlines
}

// Main conversion function
export function convertPythonToJavaScript(code: string): string {
  // Apply transformations
  const jsCode = applyTransformations(code);

  // Format the code
  const formattedCode = jsCode
    // Add semicolons where needed
    .replace(/([^;}])\n/g, "$1;\n")
    // Fix multiple newlines
    .replace(/\n\s*\n\s*\n/g, "\n\n")
    // Fix spacing around operators
    .replace(/([+\-*/%])=/g, " $1= ")
    .replace(/([+\-*/%])/g, " $1 ");

  return formattedCode;
}

// Language types
export type Language = "python" | "javascript";

// Function to toggle between languages
export function toggleLanguage(
  code: string,
  currentLanguage: Language
): { code: string; language: Language } {
  // If the code contains Python-specific syntax, treat it as Python
  const isPythonCode = /def\s+\w+\s*\(|print\(|#|if\s+.*?:|for\s+\w+\s+in|while\s+.*?:/.test(code);

  if (currentLanguage === "python" || isPythonCode) {
    return {
      code: convertPythonToJavaScript(code),
      language: "javascript",
    };
  } else {
    // For now, we'll just return the same code for JavaScript to Python
    // as we haven't implemented the reverse conversion yet
    return {
      code,
      language: "python",
    };
  }
}

// Example usage:
// const pythonCode = `
