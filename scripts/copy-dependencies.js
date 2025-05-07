const fs = require("fs-extra");
const path = require("path");

async function copyDependencies() {
  const distDir = path.join(process.cwd(), "dist");
  const monacoDir = path.join(process.cwd(), "node_modules/monaco-editor");
  const pyodideDir = path.join(process.cwd(), "node_modules/pyodide");

  // Create directories if they don't exist
  await fs.ensureDir(path.join(distDir, "monaco-editor"));
  await fs.ensureDir(path.join(distDir, "pyodide"));

  // Copy Monaco Editor files
  console.log("Copying Monaco Editor files...");
  await fs.copy(monacoDir, path.join(distDir, "monaco-editor"), {
    filter: (src) => {
      return !src.includes("node_modules") && !src.includes(".git");
    },
  });

  // Copy Pyodide files
  console.log("Copying Pyodide files...");
  await fs.copy(pyodideDir, path.join(distDir, "pyodide"), {
    filter: (src) => {
      return !src.includes("node_modules") && !src.includes(".git");
    },
  });

  console.log("Dependencies copied successfully!");
}

copyDependencies().catch(console.error);
