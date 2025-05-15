const fs = require("fs-extra");
const path = require("path");

const pyodideSrc = path.join(__dirname, "../node_modules/pyodide");
const pyodideDest = path.join(__dirname, "../dist/pyodide");

console.log(`Copying Pyodide from ${pyodideSrc} to ${pyodideDest}`);
fs.copySync(pyodideSrc, pyodideDest, {
  filter: (src) => !src.includes("node_modules") && !src.endsWith(".whl"),
});
console.log("Pyodide files copied successfully");
