import { jest, describe, beforeEach, it, expect } from "@jest/globals";

// Mock Electron modules
jest.mock("electron", () => ({
  app: {
    getAppPath: jest
      .fn()
      .mockReturnValue("/Applications/Algorithm Trainer.app/Contents/Resources/app.asar"),
    isPackaged: true,
  },
  ipcMain: {
    handle: jest.fn(),
  },
  process: {
    resourcesPath: "/Applications/Algorithm Trainer.app/Contents/Resources",
  },
}));

describe("Main Process", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Path Resolution", () => {
    it("should resolve app path correctly in production", () => {
      const { app } = require("electron");
      expect(app.getAppPath()).toBe(
        "/Applications/Algorithm Trainer.app/Contents/Resources/app.asar"
      );
    });

    it("should resolve monaco editor path correctly", () => {
      const { ipcMain } = require("electron");
      const mockHandler = jest
        .fn()
        .mockReturnValue("/Applications/Algorithm Trainer.app/Contents/Resources/monaco-editor");
      ipcMain.handle.mockImplementation((channel: string) => {
        if (channel === "get-monaco-path") {
          return mockHandler();
        }
      });
      expect(mockHandler()).toBe(
        "/Applications/Algorithm Trainer.app/Contents/Resources/monaco-editor"
      );
    });

    it("should resolve pyodide path correctly", () => {
      const { ipcMain } = require("electron");
      const mockHandler = jest
        .fn()
        .mockReturnValue("/Applications/Algorithm Trainer.app/Contents/Resources/pyodide");
      ipcMain.handle.mockImplementation((channel: string) => {
        if (channel === "get-pyodide-path") {
          return mockHandler();
        }
      });
      expect(mockHandler()).toBe("/Applications/Algorithm Trainer.app/Contents/Resources/pyodide");
    });
  });
});
