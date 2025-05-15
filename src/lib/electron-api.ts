export function getMonacoPath(): Promise<string> {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve("./node_modules/monaco-editor");
  }
  return (
    (window.electronAPI as ElectronAPI | undefined)?.getMonacoPath?.() ||
    Promise.resolve("./monaco-editor")
  );
}

export function getPyodidePath(): Promise<string> {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve("./node_modules/pyodide");
  }
  return (
    (window.electronAPI as ElectronAPI | undefined)?.getPyodidePath?.() ||
    Promise.resolve("./pyodide")
  );
}
