type PythonResult =
  | string
  | number
  | boolean
  | null
  | PythonResult[]
  | { [key: string]: PythonResult };

interface PyodideInstance {
  runPython: (code: string) => PythonResult;
  runPythonAsync: (code: string) => Promise<PythonResult>;
  globals: { [key: string]: PythonResult };
}

interface PyodideModule {
  loadPyodide: (config: { indexURL: string }) => Promise<PyodideInstance>;
}

export async function setupPyodide() {
  try {
    // In development, load from CDN
    if (process.env.NODE_ENV === "development") {
      const pyodide = (await import(
        "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js"
      )) as PyodideModule;
      return await pyodide.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/",
      });
    }

    // In production, load from local files
    const pyodide = await import("pyodide");
    return await pyodide.loadPyodide({
      indexURL: "./pyodide",
    });
  } catch (error) {
    console.error("Failed to load Pyodide:", error);
    throw error;
  }
}
