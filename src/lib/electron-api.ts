export interface ElectronAPI {
  getMonacoPath: () => Promise<string>;
  getPyodidePath: () => Promise<string>;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}

export function getMonacoPath(): Promise<string> {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve("./node_modules/monaco-editor");
  }
  return window.electronAPI?.getMonacoPath?.() || Promise.resolve("./monaco-editor");
}

export function getPyodidePath(): Promise<string> {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve("./node_modules/pyodide");
  }
  return window.electronAPI?.getPyodidePath?.() || Promise.resolve("./pyodide");
}
