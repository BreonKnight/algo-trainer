export function setupMonaco() {
  // Configure require paths for Monaco
  const requireConfig = {
    paths: {
      vs:
        process.env.NODE_ENV === "development"
          ? "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
          : "./monaco-editor/min/vs",
    },
  };

  // Add require config to window
  (window as any).require.config(requireConfig);

  // Load Monaco
  return new Promise<void>((resolve, reject) => {
    (window as any).require(
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
  });
}
