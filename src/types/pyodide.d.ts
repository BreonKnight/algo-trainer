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

declare module "https://cdn.jsdelivr.net/pyodide/v0.27.6/full/pyodide.js" {
  export function loadPyodide(config: { indexURL: string }): Promise<PyodideInstance>;
}
