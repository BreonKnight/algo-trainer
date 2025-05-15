type PythonResult = {
  stdout: string;
  stderr: string;
  error?: Error;
};

type PyodideInstance = {
  runPython: (code: string) => unknown;
  runPythonAsync: (code: string) => Promise<unknown>;
  globals: { get: (key: string) => unknown };
};

type PyodideModule = {
  loadPyodide: (options: { indexURL?: string; fullStdLib?: boolean }) => Promise<PyodideInstance>;
};

declare global {
  interface Window {
    IN_NODE?: boolean;
    electronAPI?: unknown; // for type check, not used for path
  }
}

let pyodideInstance: PyodideInstance | null = null;

const PYODIDE_VERSION = "v0.27.5";
const PYODIDE_CDN_URL = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full`;

function getPyodideBaseUrl(): string {
  if (window.electronAPI) {
    // Use file:// protocol for local testing
    // __dirname is relative to the renderer bundle location
    // Adjust as needed if this does not work
    return `file://${__dirname}/dist/pyodide/`;
  }
  return PYODIDE_CDN_URL + "/";
}

export async function setupPyodide(): Promise<PyodideInstance> {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  try {
    const pyodideBaseUrl = getPyodideBaseUrl();

    // Load Pyodide script
    const script = document.createElement("script");
    script.src = `${pyodideBaseUrl}pyodide.js`;
    script.async = true;

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });

    const pyodideModule: PyodideModule = await import(
      /* @vite-ignore */ `${pyodideBaseUrl}pyodide.mjs`
    );

    const instance = await pyodideModule.loadPyodide({
      indexURL: pyodideBaseUrl,
      fullStdLib: true,
    });

    pyodideInstance = instance;

    if (!pyodideInstance) {
      throw new Error("Failed to initialize Pyodide");
    }

    return pyodideInstance;
  } catch (error) {
    console.error("Failed to initialize Python environment:", error);
    throw error;
  }
}

export async function runPython(code: string): Promise<PythonResult> {
  try {
    const pyodide = await setupPyodide();
    const result = await pyodide.runPythonAsync(code);
    return {
      stdout: String(result),
      stderr: "",
    };
  } catch (error) {
    return {
      stdout: "",
      stderr: error instanceof Error ? error.message : String(error),
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
}
