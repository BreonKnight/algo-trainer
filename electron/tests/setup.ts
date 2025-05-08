import { jest } from "@jest/globals";

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
  existsSync: jest.fn().mockImplementation(() => true),
  statSync: jest.fn().mockImplementation(() => ({
    isDirectory: () => true,
  })),
}));
