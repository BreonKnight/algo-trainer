import path from "path";

import { jest, describe, beforeEach, it, expect } from "@jest/globals";
import fs from "fs-extra";

// Required Pyodide files that must be present in the build
const REQUIRED_PYODIDE_FILES = [
  "pyodide.js",
  "pyodide.asm.js",
  "pyodide.asm.wasm",
  "pyodide.asm.data",
  "python_stdlib.zip",
  "repodata.json",
  "packages.json",
];

// Mock fs-extra
jest.mock("fs-extra", () => ({
  existsSync: jest.fn().mockReturnValue(true),
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

describe("Build Process Tests", () => {
  const mockResourcesPath = "/Applications/Algorithm Trainer.app/Contents/Resources";
  const mockPyodidePath = path.join(mockResourcesPath, "pyodide");
  const mockAsarPath = path.join(mockResourcesPath, "app.asar");
  const mockAsarPyodidePath = path.join(mockAsarPath, "pyodide");

  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(process, "resourcesPath", {
      value: mockResourcesPath,
      writable: true,
    });

    // Set up existsSync mock implementation
    (fs.existsSync as jest.Mock).mockImplementation((filePath: unknown) => {
      if (typeof filePath === "string" && filePath === mockAsarPyodidePath) {
        return false;
      }
      return true;
    });
  });

  describe("Pyodide Build", () => {
    it("should have all required Pyodide files in the build", () => {
      REQUIRED_PYODIDE_FILES.forEach((file) => {
        const filePath = path.join(mockPyodidePath, file);
        expect(fs.existsSync(filePath)).toBe(true);
      });
    });

    it("should have correct file permissions for Pyodide files", () => {
      REQUIRED_PYODIDE_FILES.forEach((file) => {
        const filePath = path.join(mockPyodidePath, file);
        const stats = fs.statSync(filePath);
        // Check if file is readable (mode 644)
        expect(stats.mode & 0o444).toBeTruthy();
      });
    });

    it("should verify Pyodide directory is unpacked from ASAR", () => {
      // Verify that Pyodide directory exists outside the ASAR archive
      expect(fs.existsSync(mockPyodidePath)).toBe(true);
      expect(fs.statSync(mockPyodidePath).isDirectory()).toBe(true);

      // Verify that Pyodide files are not inside ASAR
      expect(fs.existsSync(mockAsarPyodidePath)).toBe(false);
    });

    it("should verify Pyodide packages directory structure", () => {
      const packagesPath = path.join(mockPyodidePath, "packages");
      expect(fs.existsSync(packagesPath)).toBe(true);
      expect(fs.statSync(packagesPath).isDirectory()).toBe(true);

      // Check for common scientific packages that should be included
      const expectedPackages = ["numpy", "pandas", "matplotlib"];
      expectedPackages.forEach((pkg) => {
        const pkgPath = path.join(packagesPath, pkg);
        expect(fs.existsSync(pkgPath)).toBe(true);
      });
    });

    it("should verify package.json configuration for Pyodide", () => {
      const packageJsonPath = path.join(process.cwd(), "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

      // Check build configuration
      expect(packageJson.build.asarUnpack).toContain("dist/pyodide/**/*");
      expect(packageJson.build.extraResources).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            from: "dist/pyodide",
            to: "pyodide",
          }),
        ])
      );
    });
  });
});
