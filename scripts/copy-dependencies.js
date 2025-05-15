const fs = require("fs-extra");
const path = require("path");

async function copyDependencies() {
  try {
    const distDir = path.join(__dirname, "../dist");
    const monacoDir = path.join(__dirname, "../node_modules/monaco-editor");
    const pyodideDir = path.join(__dirname, "../node_modules/pyodide");
    const packageJsonPath = path.join(__dirname, "../package.json");

    // Create directories if they don't exist
    await fs.ensureDir(path.join(distDir, "monaco-editor"));
    await fs.ensureDir(path.join(distDir, "pyodide"));

    // Copy package.json to dist directory
    console.log("Copying package.json...");
    const packageJson = await fs.readJson(packageJsonPath);
    // Remove unnecessary fields
    delete packageJson.scripts;
    delete packageJson.devDependencies;
    delete packageJson.build;
    await fs.writeJson(path.join(distDir, "package.json"), packageJson, { spaces: 2 });

    // Copy Monaco Editor files
    console.log("Copying Monaco Editor files...");
    await fs.copy(monacoDir, path.join(distDir, "monaco-editor"), {
      filter: (src) => {
        // Include all necessary Monaco files
        const includeFiles = [
          "monaco-editor.js",
          "monaco-editor.min.js",
          "monaco-editor.min.js.map",
          "monaco-editor.js.map",
          "editor.worker.js",
          "editor.worker.js.map",
          "language",
          "min",
          "min-maps",
          "min-vs",
          "vs",
        ];

        const fileName = path.basename(src);
        return (
          includeFiles.includes(fileName) ||
          src.includes("vs") ||
          src.includes("min") ||
          (!src.includes("node_modules") && !src.includes(".git"))
        );
      },
    });

    // Copy Pyodide files
    console.log("Copying Pyodide files...");
    await fs.copy(pyodideDir, path.join(distDir, "pyodide"), {
      filter: (src) => {
        // Include all necessary Pyodide files
        const includeFiles = [
          "pyodide.asm.js",
          "pyodide.asm.wasm",
          "pyodide.js",
          "pyodide-lock.json",
          "python_stdlib.zip",
          "pyodide_py.tar",
          "pyodide.asm.data",
          "pyodide.asm.mem",
          "pyodide.asm.wasm.map",
          "pyodide.asm.js.map",
          "pyodide.js.map",
        ];

        const fileName = path.basename(src);
        return (
          includeFiles.includes(fileName) ||
          src.includes("dist") ||
          src.includes("packages") ||
          (!src.includes("node_modules") && !src.includes(".git"))
        );
      },
    });

    console.log("Dependencies copied successfully!");
  } catch (error) {
    console.error("Error copying dependencies:", error);
    process.exit(1);
  }
}

copyDependencies();
