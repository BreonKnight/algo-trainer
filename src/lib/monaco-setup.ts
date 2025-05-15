import { getMonacoPath } from "./electron-api";

declare global {
  interface Window {
    require: {
      config: (config: { paths: { vs: string } }) => void;
      (modules: string[], onLoad: () => void, onError: (error: Error) => void): void;
    };
    MONACO_EDITOR_PATH?: string;
  }
}

export function setupMonaco() {
  return new Promise<void>(async (resolve, reject) => {
    try {
      // Get the Monaco path
      const monacoPath = await getMonacoPath();

      // Configure require paths for Monaco
      const requireConfig = {
        paths: {
          vs:
            process.env.NODE_ENV === "development"
              ? "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
              : `${monacoPath}/min/vs`,
        },
      };

      // Add require config to window
      window.require.config(requireConfig);

      // Load Monaco
      window.require(
        ["vs/editor/editor.main"],
        () => {
          console.log("Monaco Editor loaded successfully!");
          resolve();
        },
        (error: Error) => {
          console.error("Failed to load Monaco Editor:", error);
          reject(error);
        }
      );
    } catch (error) {
      console.error("Error setting up Monaco:", error);
      reject(error);
    }
  });
}
