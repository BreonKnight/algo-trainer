const fs = require("fs-extra");
const path = require("path");

const sourceDir = path.join(__dirname, "../node_modules/pyodide");
const targetDir = path.join(__dirname, "../dist/pyodide");

async function copyPyodideFiles() {
  try {
    // Ensure target directory exists
    await fs.ensureDir(targetDir);

    // Copy all Pyodide files
    await fs.copy(sourceDir, targetDir, {
      filter: (src) => {
        // Skip unnecessary files
        return !src.includes("node_modules") && !src.includes(".git") && !src.includes("tests");
      },
    });

    console.log("✓ Pyodide files copied successfully");
  } catch (error) {
    console.error("Error copying Pyodide files:", error);
    process.exit(1);
  }
}

copyPyodideFiles();
