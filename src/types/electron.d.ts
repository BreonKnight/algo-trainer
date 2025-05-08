interface ElectronAPI {
  getMonacoPath: () => Promise<string>;
  getPyodidePath: () => Promise<string>;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}
