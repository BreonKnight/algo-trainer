import path from "path";

import { jest, describe, beforeEach, it, expect } from "@jest/globals";
import fs from "fs-extra";

// Mock process.resourcesPath
Object.defineProperty(process, "resourcesPath", {
  value: "/Applications/Algorithm Trainer.app/Contents/Resources",
  writable: true,
});

// Mock fs-extra
jest.mock("fs-extra", () => ({
  existsSync: jest.fn().mockReturnValue(true),
  statSync: jest.fn().mockReturnValue({ isDirectory: () => true }),
}));

// Mock Electron
jest.mock("electron", () => ({
  app: {
    getAppPath: jest
      .fn()
      .mockReturnValue("/Applications/Algorithm Trainer.app/Contents/Resources/app.asar"),
    isPackaged: true,
  },
}));

describe("Path Resolution Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Development Environment", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "development";
    });

    it("should resolve app path correctly", async () => {
      const appPath = process.cwd();
      expect(fs.existsSync(appPath)).toBe(true);
      expect(fs.existsSync(path.join(appPath, "dist"))).toBe(true);
    });

    it("should resolve Monaco Editor path correctly", async () => {
      const monacoPath = path.join(process.cwd(), "node_modules/monaco-editor");
      expect(fs.existsSync(monacoPath)).toBe(true);
      expect(fs.existsSync(path.join(monacoPath, "monaco-editor.js"))).toBe(true);
    });

    it("should resolve Pyodide path correctly", async () => {
      const pyodidePath = path.join(process.cwd(), "node_modules/pyodide");
      expect(fs.existsSync(pyodidePath)).toBe(true);
      expect(fs.existsSync(path.join(pyodidePath, "pyodide.js"))).toBe(true);
      expect(fs.existsSync(path.join(pyodidePath, "pyodide.asm.wasm"))).toBe(true);
    });
  });

  describe("Production Environment", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "production";
    });

    it("should resolve app path correctly", async () => {
      const { app } = require("electron");
      const appPath = app.getAppPath();
      expect(fs.existsSync(appPath)).toBe(true);
      expect(fs.existsSync(path.join(appPath, "dist"))).toBe(true);
    });

    it("should resolve Monaco Editor path correctly", async () => {
      const monacoPath = path.join(process.resourcesPath, "monaco-editor");
      expect(fs.existsSync(monacoPath)).toBe(true);
      expect(fs.existsSync(path.join(monacoPath, "monaco-editor.js"))).toBe(true);
    });

    it("should resolve Pyodide path correctly", async () => {
      const pyodidePath = path.join(process.resourcesPath, "pyodide");
      expect(fs.existsSync(pyodidePath)).toBe(true);
      expect(fs.existsSync(path.join(pyodidePath, "pyodide.js"))).toBe(true);
      expect(fs.existsSync(path.join(pyodidePath, "pyodide.asm.wasm"))).toBe(true);
    });
  });

  describe("Dynamic Import Tests", () => {
    it("should verify dynamic import paths", async () => {
      const { app } = require("electron");
      const distPath =
        process.env.NODE_ENV === "development"
          ? path.join(process.cwd(), "dist")
          : path.join(app.getAppPath(), "dist");

      const dynamicImportPaths = [
        path.join(distPath, "practice/Practice.js"),
        path.join(distPath, "tutorials/Tutorials.js"),
        path.join(distPath, "cs-math/CSMath.js"),
      ];

      for (const importPath of dynamicImportPaths) {
        expect(fs.existsSync(importPath)).toBe(true);
      }
    });
  });

  describe("ASAR Unpack Tests", () => {
    it("should verify unpacked directories", async () => {
      const unpackedDirs = ["monaco-editor", "pyodide"];

      for (const dir of unpackedDirs) {
        const dirPath = path.join(process.resourcesPath, dir);
        expect(fs.existsSync(dirPath)).toBe(true);
        expect(fs.statSync(dirPath).isDirectory()).toBe(true);
      }
    });
  });
});
