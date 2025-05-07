export class PythonCodeHandler {
  static validateCode(code: string): { isValid: boolean; error?: string } {
    const lines = code.split("\n");
    let currentIndent = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      if (!trimmedLine) continue;

      // Check for indentation after control flow statements
      if (trimmedLine.endsWith(":")) {
        const nextLine = lines[i + 1];
        if (!nextLine) {
          return {
            isValid: false,
            error: `Expected indented block after '${trimmedLine}' on line ${i + 1}`,
          };
        }
        if (!nextLine.startsWith("    ")) {
          return {
            isValid: false,
            error: `Expected indented block after '${trimmedLine}' on line ${i + 1}`,
          };
        }
        currentIndent = 4;
        continue;
      }

      // Check for consistent indentation
      const indent = line.search(/\S|$/);
      if (indent % 4 !== 0) {
        return {
          isValid: false,
          error: `Inconsistent indentation on line ${i + 1}. Expected multiple of 4 spaces.`,
        };
      }

      // Check if indentation level is valid
      if (indent > currentIndent + 4) {
        return {
          isValid: false,
          error: `Invalid indentation on line ${i + 1}. Cannot increase indentation by more than 4 spaces.`,
        };
      }

      // Reset indentation level if we're back at the root level
      if (indent === 0) {
        currentIndent = 0;
      } else {
        currentIndent = indent;
      }
    }

    return { isValid: true };
  }

  static formatCode(code: string): string {
    return code
      .split("\n")
      .map((line, index, array) => {
        const trimmedLine = line.trim();

        if (!trimmedLine) return line;

        if (trimmedLine.endsWith(":")) {
          return line;
        }

        const prevLine = array[index - 1];
        if (prevLine && prevLine.trim().endsWith(":")) {
          return "    " + line;
        }

        return line;
      })
      .join("\n");
  }

  static wrapCodeForExecution(code: string): string {
    const lines = code.split("\n");
    const indentSizes = lines.filter((l) => l.trim()).map((l) => l.search(/\S/));
    const minIndent = indentSizes.length ? Math.min(...indentSizes) : 0;
    const dedentedCode = lines.map((l) => l.slice(minIndent)).join("\n");

    // Process the code lines for execution
    const processedCode = dedentedCode
      .split("\n")
      .map((line) => {
        if (!line.trim()) return line;
        return "    " + line;
      })
      .join("\n");

    return `import sys
from io import StringIO
sys.stdout = StringIO()
try:
${processedCode}
    result = sys.stdout.getvalue()
    sys.stdout = sys.__stdout__
    print(result)
except Exception as e:
    sys.stdout = sys.__stdout__
    print(f"Error: {str(e)}")
`;
  }

  static handlePythonError(error: string | Error): string {
    if (typeof error === "string") {
      // Handle string errors
      if (error.includes("IndentationError")) {
        return "Indentation error: " + error.split("IndentationError:")[1].trim();
      }
      if (error.includes("SyntaxError")) {
        return "Syntax error: " + error.split("SyntaxError:")[1].trim();
      }
      return error;
    }

    if (error instanceof Error) {
      // Handle Error objects
      if (error.message.includes("IndentationError")) {
        return "Indentation error: " + error.message.split("IndentationError:")[1].trim();
      }
      if (error.message.includes("SyntaxError")) {
        return "Syntax error: " + error.message.split("SyntaxError:")[1].trim();
      }
      return error.message;
    }

    return "An unknown error occurred";
  }
}
