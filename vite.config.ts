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
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          monaco: ["monaco-editor"],
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
