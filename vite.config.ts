import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/pyodide/*",
          dest: "pyodide",
        },
      ],
    }),
  ],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      external: ["electron"],
      output: {
        format: "es",
      },
    },
  },
  optimizeDeps: {
    exclude: ["pyodide"],
    include: ["monaco-editor"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5174,
    strictPort: true,
    fs: {
      strict: false,
      allow: [".."],
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
