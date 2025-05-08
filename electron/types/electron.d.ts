declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }

  namespace NodeJS {
    interface Process {
      resourcesPath: string;
    }
  }
}

export {};
