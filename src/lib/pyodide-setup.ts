import path from "path";

import { getPyodidePath } from "./electron-api";

type PythonResult = {
  stdout: string;
  stderr: string;
  error?: Error;
};

type PyodideInstance = {
  runPython: (code: string) => any;
  runPythonAsync: (code: string) => Promise<any>;
  globals: { get: (key: string) => any };
};

type PyodideModule = {
  loadPyodide: (options: { indexURL?: string; fullStdLib?: boolean }) => Promise<PyodideInstance>;
};

interface ElectronAPI {
  getPyodidePath: () => Promise<string>;
}

declare global {
  interface Window {
    PYODIDE_PATH?: string;
    IN_NODE?: boolean;
    electronAPI?: ElectronAPI;
  }
}

let pyodideInstance: PyodideInstance | null = null;

const PYODIDE_VERSION = "v0.27.5";
const PYODIDE_CDN_URL = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full`;

export async function setupPyodide(): Promise<PyodideInstance> {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  try {
    // Check if we're in Electron
    const isElectron = window.electronAPI !== undefined;

    if (isElectron && window.electronAPI) {
      // In Electron, get the path from the main process
      const pyodidePath = await window.electronAPI.getPyodidePath();
      const pyodideModule = await import(/* @vite-ignore */ `${pyodidePath}/pyodide.mjs`);

      const instance = await pyodideModule.loadPyodide({
        indexURL: pyodidePath,
        fullStdLib: true,
      });

      pyodideInstance = instance;
    } else {
      // In browser development, load from CDN
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
      script.async = true;

      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

      const pyodideModule = (window as any).loadPyodide;
      const instance = await pyodideModule({
        fullStdLib: true,
      });

      pyodideInstance = instance;
    }

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
