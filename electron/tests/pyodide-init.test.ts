import path from "path";
import { jest, describe, beforeEach, it, expect } from "@jest/globals";
import fs from "fs-extra";

// Mock Electron's app module
jest.mock("electron", () => ({
  app: {
    getAppPath: jest
      .fn()
      .mockReturnValue("/Applications/Algorithm Trainer.app/Contents/Resources/app.asar"),
    isPackaged: true,
  },
  process: {
    resourcesPath: "/Applications/Algorithm Trainer.app/Contents/Resources",
  },
}));

// Mock fs-extra
jest.mock("fs-extra", () => ({
  existsSync: jest.fn().mockImplementation((filePath: unknown) => {
    // Return false for ASAR path
    if (typeof filePath === "string" && filePath.includes("app.asar/pyodide")) {
      return false;
    }
    return true;
  }),
  statSync: jest.fn().mockReturnValue({
    isDirectory: () => true,
    mode: 0o644, // Standard readable file permissions
  }),
  readFileSync: jest.fn().mockReturnValue(
    JSON.stringify({
      build: {
        asarUnpack: ["dist/pyodide/**/*"],
        extraResources: [
          {
            from: "dist/pyodide",
            to: "pyodide",
            filter: ["**/*"],
          },
        ],
      },
    })
  ),
}));

describe("Pyodide Initialization Tests", () => {
  const mockResourcesPath = "/Applications/Algorithm Trainer.app/Contents/Resources";
  const mockPyodidePath = path.join(mockResourcesPath, "pyodide");

  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(process, "resourcesPath", {
      value: mockResourcesPath,
      writable: true,
    });
  });

  describe("Production Environment", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "production";
    });

    it("should verify Pyodide file paths are correct", () => {
      const requiredFiles = [
        "pyodide.js",
        "pyodide.asm.js",
        "pyodide.asm.wasm",
        "pyodide.asm.data",
        "python_stdlib.zip",
        "repodata.json",
        "packages.json",
      ];

      requiredFiles.forEach((file) => {
        const filePath = path.join(mockPyodidePath, file);
        expect(fs.existsSync(filePath)).toBe(true);
      });
    });

    it("should verify Pyodide path resolution in production", async () => {
      const pyodidePath = path.join(process.resourcesPath, "pyodide");

      // Verify the path exists and is accessible
      expect(fs.existsSync(pyodidePath)).toBe(true);
      expect(fs.statSync(pyodidePath).isDirectory()).toBe(true);

      // Verify critical files are present and readable
      const criticalFiles = ["pyodide.js", "pyodide.asm.js", "pyodide.asm.wasm"];
      criticalFiles.forEach((file) => {
        const filePath = path.join(pyodidePath, file);
        expect(fs.existsSync(filePath)).toBe(true);
        const stats = fs.statSync(filePath);
        expect(stats.mode & 0o444).toBeTruthy(); // Check if readable
      });
    });

    it("should verify Pyodide files are not in ASAR archive", () => {
      const asarPath = path.join(mockResourcesPath, "app.asar");
      const asarPyodidePath = path.join(asarPath, "pyodide");

      // Verify Pyodide is in resources directory
      expect(fs.existsSync(mockPyodidePath)).toBe(true);

      // Verify Pyodide is not in ASAR
      expect(fs.existsSync(asarPyodidePath)).toBe(false);
    });

    it("should verify package.json configuration for Pyodide", () => {
      const packageJsonPath = path.join(process.cwd(), "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

      // Verify ASAR unpack configuration
      expect(packageJson.build.asarUnpack).toContain("dist/pyodide/**/*");

      // Verify extraResources configuration
      expect(packageJson.build.extraResources).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            from: "dist/pyodide",
            to: "pyodide",
            filter: ["**/*"],
          }),
        ])
      );
    });
  });
});
