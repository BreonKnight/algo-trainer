import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks: {
          "monaco-editor": ["monaco-editor"],
          pyodide: ["pyodide"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["monaco-editor", "pyodide"],
  },
  server: {
    fs: {
      strict: false,
    },
  },
  // server: {
  //   headers: {
  //     "Content-Type": "application/javascript",
  //   },
  // },
});
