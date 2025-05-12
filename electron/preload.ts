const pathModule = require("path");

const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("electronAPI", {
  // Add any methods you need to expose to the renderer
  getAppPath: () => ipcRenderer.invoke("get-app-path"),
  getMonacoPath: () => ipcRenderer.invoke("get-monaco-path"),
  getPyodidePath: () => {
    const path = ipcRenderer.invoke("get-pyodide-path");
    console.log("Returning Pyodide path:", path);
    return path;
  },
  logPyodideAccess: (url: string) => ipcRenderer.invoke("log-pyodide-access", url),
});

// Expose paths for Monaco and Pyodide
contextBridge.exposeInMainWorld(
  "MONACO_EDITOR_PATH",
  process.env.NODE_ENV === "development"
    ? pathModule.join(process.cwd(), "node_modules/monaco-editor")
    : pathModule.join(process.resourcesPath, "monaco-editor")
);

contextBridge.exposeInMainWorld("PYODIDE_PATH", "pyodide://");
