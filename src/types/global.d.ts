interface ElectronAPI {
  getMonacoPath: () => Promise<string>;
  getPyodidePath: () => Promise<string>;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
    MONACO_EDITOR_PATH?: string;
    PYODIDE_PATH?: string;
    require: {
      config: (config: { paths: { vs: string } }) => void;
      (modules: string[], onLoad: () => void, onError: (error: Error) => void): void;
    };
  }
}
