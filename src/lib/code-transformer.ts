// Basic Python to JavaScript conversion rules
const PYTHON_TO_JS_RULES = {
  // Function definitions with arrow functions
  "def\\s+([\\w_]+)\\(([^)]*)\\):": "const $1 = ($2) => {",
  // Print statements
  "print\\(([^)]+)\\)": "console.log($1)",
  // List comprehensions with map
  "\\[([^\\]]+)\\s+for\\s+([\\w_]+)\\s+in\\s+([^\\]]+)\\]":
    "$3.map(($2) => $1)",
  // Range function with Array.from
  "range\\(([^)]+)\\)": "Array.from({length: $1}, (_, i) => i)",
  // String formatting with template literals
  'f"([^"]+)"': "`$1`",
  // Boolean values
  True: "true",
  False: "false",
  // None
  None: "null",
  // List methods
  "append\\(([^)]+)\\)": "push($1)",
  "pop\\(\\)": "pop()",
  // Dictionary to object
  "\\{([^}]+)\\}": "{$1}",
  // Colon to curly brace
  ":": "{",
  // Multiple variable assignment
  "([\\w_]+),\\s*([\\w_]+)\\s*=\\s*([^,]+),\\s*([^\\n]+)":
    "let $1 = $3;\nlet $2 = $4",
  // Floor division
  "//": "/",
  // Pass statement
  pass: "",
  // Comments
  "#\\s*(.+)": "// $1",
};

// JavaScript to Python conversion rules
const JS_TO_PYTHON_RULES = {
  // Arrow functions to def
  "const\\s+([\\w_]+)\\s*=\\s*\\(([^)]*)\\)\\s*=>\\s*\\{": "def $1($2):",
  // Console.log to print
  "console\\.log\\(([^)]+)\\)": "print($1)",
  // Map to list comprehension
  "\\.map\\(([^)]+)\\)": "[$1 for $1 in $1]",
  // Array.from to range
  "Array\\.from\\({length:\\s*([^,]+)},\\s*\\(_,\\s*i\\)\\s*=>\\s*i\\)":
    "range($1)",
  // Template literals to f-strings
  "`([^`]+)`": 'f"$1"',
  // Boolean values
  true: "True",
  false: "False",
  // Null to None
  null: "None",
  // Array methods
  "\\.push\\(([^)]+)\\)": ".append($1)",
  "\\.pop\\(\\)": ".pop()",
  // Object to dictionary
  "\\{([^}]+)\\}": "{$1}",
  // Curly brace to indentation
  "\\}": "",
  // Class definitions
  "class\\s+([\\w_]+)\\s*\\{": "class $1:",
  // Constructor to __init__
  "constructor\\(([^)]*)\\)\\s*\\{": "def __init__($1):",
  // This to self
  "this\\.([\\w_]+)": "self.$1",
  // Instance methods
  "([\\w_]+)\\s*=\\s*\\(([^)]*)\\)\\s*=>\\s*\\{": "def $1(self, $2):",
  // Static methods
  "static\\s+([\\w_]+)\\s*=\\s*\\(([^)]*)\\)\\s*=>\\s*\\{":
    "@staticmethod\ndef $1($2):",
  // Slice to list slicing
  "\\.slice\\(([^,]+),\\s*([^)]+)\\)": "[$1:$2]",
  "\\.slice\\(([^)]+)\\)": "[$1:]",
  "\\.slice\\(0,\\s*([^)]+)\\)": "[:$1]",
  // Length to len
  "\\.length": "len()",
  // String methods
  "String\\.([\\w_]+)": "str.$1",
  // Math operations
  "Math\\.([\\w_]+)": "math.$1",
  // Import statements
  "import\\s+([\\w_]+)\\s+from\\s+'([^']+)'": "import $1",
  "import\\s+{\\s*([\\w_]+)\\s*}\\s+from\\s+'([^']+)'": "from $2 import $1",
  // Return statements
  "return\\s+([^;]+);": "return $1",
  // If statements
  "if\\s*\\(([^)]+)\\)\\s*\\{": "if $1:",
  "}\\s*else\\s*if\\s*\\(([^)]+)\\)\\s*\\{": "elif $1:",
  "}\\s*else\\s*\\{": "else:",
  // For loops
  "for\\s*\\(const\\s+([\\w_]+)\\s+of\\s+([^)]+)\\)\\s*\\{": "for $1 in $2:",
  // While loops
  "while\\s*\\(([^)]+)\\)\\s*\\{": "while $1:",
  // Try/catch blocks
  "try\\s*\\{": "try:",
  "}\\s*catch\\s*\\(([^)]+)\\)\\s*\\{": "except $1:",
  "}\\s*finally\\s*\\{": "finally:",
  // Error throwing to assert
  "if\\s*\\(!([^)]+)\\)\\s*throw\\s+new\\s+Error\\(([^)]+)\\)": "assert $1, $2",
  "if\\s*\\(!([^)]+)\\)\\s*throw\\s+new\\s+Error\\('Assertion failed'\\)":
    "assert $1",
  // Arrow functions to lambda
  "\\(([^)]+)\\)\\s*=>\\s*([^;]+)": "lambda $1: $2",
  // Spread operator to unpacking
  "\\.\\.\\.([\\w_]+)": "*$1",
  // Filter and map to list comprehension with if
  "\\.filter\\(([^)]+)\\)\\.map\\(([^)]+)\\)": "[$2 for $1 if $1]",
  // Set to set comprehension
  "new\\s+Set\\(([^)]+)\\)": "{$1 for $1 in $1}",
  // Object.fromEntries to dictionary comprehension
  "Object\\.fromEntries\\(([^)]+)\\)": "{$1: $2 for $3 in $4}",
  // Ternary operator to if-else
  "([^\\s]+)\\s*\\?\\s*([^\\s]+)\\s*:\\s*([^\\s]+)": "$2 if $1 else $3",
  // Comments
  "//\\s*(.+)": "# $1",
};

export function convertPythonToJavaScript(code: string): string {
  let jsCode = code;

  // Apply conversion rules
  Object.entries(PYTHON_TO_JS_RULES).forEach(([pattern, replacement]) => {
    const regex = new RegExp(pattern, "g");
    jsCode = jsCode.replace(regex, replacement);
  });

  // Fix indentation and braces
  const lines = jsCode.split("\n");
  const indentedLines: string[] = [];
  let currentIndent = 0;
  let inFunction = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const content = line.trim();

    // Skip empty lines
    if (!content) {
      indentedLines.push("");
      continue;
    }

    // Handle function definitions
    if (content.startsWith("const") && content.includes("=>")) {
      inFunction = true;
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      currentIndent++;
      continue;
    }

    // Handle variable assignments
    if (content.startsWith("let")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content + ";");
      continue;
    }

    // Handle control structures
    if (content.startsWith("while") || content.startsWith("if")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content + " {");
      currentIndent++;
      continue;
    }

    // Handle else
    if (content.startsWith("else")) {
      currentIndent--;
      indentedLines.push(" ".repeat(currentIndent * 4) + content + " {");
      currentIndent++;
      continue;
    }

    // Handle return statements
    if (content.startsWith("return")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content + ";");
      continue;
    }

    // Handle comments
    if (content.startsWith("//")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      continue;
    }

    // Handle closing braces
    if (content === "}") {
      currentIndent = Math.max(0, currentIndent - 1);
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      continue;
    }

    // Add the current line with proper indentation
    indentedLines.push(" ".repeat(currentIndent * 4) + content);
  }

  jsCode = indentedLines.join("\n");

  // Clean up any double braces
  jsCode = jsCode.replace(/\{\s*\}/g, "{}");
  jsCode = jsCode.replace(/\{\s*;\s*\}/g, "{}");

  return jsCode;
}

export function convertJavaScriptToPython(code: string): string {
  let pythonCode = code;

  // Apply conversion rules
  Object.entries(JS_TO_PYTHON_RULES).forEach(([pattern, replacement]) => {
    const regex = new RegExp(pattern, "g");
    pythonCode = pythonCode.replace(regex, replacement);
  });

  // Remove semicolons
  pythonCode = pythonCode.replace(/;/g, "");

  // Fix indentation
  const lines = pythonCode.split("\n");
  const indentedLines: string[] = [];
  let currentIndent = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const content = line.trim();

    // Skip empty lines
    if (!content) {
      indentedLines.push("");
      continue;
    }

    // Handle function definitions
    if (content.startsWith("def")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      currentIndent++;
      continue;
    }

    // Handle variable assignments
    if (content.includes("=") && !content.includes("def")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      continue;
    }

    // Handle control structures
    if (
      content.startsWith("if") ||
      content.startsWith("while") ||
      content.startsWith("for")
    ) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      currentIndent++;
      continue;
    }

    // Handle else
    if (content.startsWith("else")) {
      currentIndent--;
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      currentIndent++;
      continue;
    }

    // Handle return statements
    if (content.startsWith("return")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      continue;
    }

    // Handle comments
    if (content.startsWith("#")) {
      indentedLines.push(" ".repeat(currentIndent * 4) + content);
      continue;
    }

    // Add the current line with proper indentation
    indentedLines.push(" ".repeat(currentIndent * 4) + content);
  }

  pythonCode = indentedLines.join("\n");

  return pythonCode;
}

export type Language = "python" | "javascript";

export function toggleLanguage(
  code: string,
  currentLanguage: Language
): { code: string; language: Language } {
  if (currentLanguage === "python") {
    return {
      code: convertPythonToJavaScript(code),
      language: "javascript",
    };
  } else {
    return {
      code: convertJavaScriptToPython(code),
      language: "python",
    };
  }
}
