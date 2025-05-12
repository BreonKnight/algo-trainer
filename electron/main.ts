const path = require("path");

const { app, BrowserWindow, ipcMain, protocol } = require("electron");
const fs = require("fs-extra");

// Register protocols before app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "file", privileges: { secure: true, standard: true } },
  { scheme: "pyodide", privileges: { secure: true, standard: true } },
]);

// Set up IPC handlers for path requests
ipcMain.handle("get-app-path", () => {
  return app.getAppPath();
});

ipcMain.handle("get-monaco-path", () => {
  return path.join(app.getAppPath(), "dist", "monaco-editor");
});

ipcMain.handle("get-pyodide-path", () => {
  if (process.env.NODE_ENV === "development") {
    return path.join(app.getAppPath(), "node_modules", "pyodide");
  }
  return path.join(app.getAppPath(), "dist", "pyodide");
});

ipcMain.handle("log-pyodide-access", (_event: any, url: string) => {
  console.log("Pyodide accessing:", url);
  return null;
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: process.env.NODE_ENV === "production",
      preload: path.join(__dirname, "preload.js"),
    },
    titleBarStyle: "hiddenInset",
    backgroundColor: "#282a36",
  });

  // Register protocol for file access
  protocol.registerFileProtocol(
    "file",
    (request: { url: string }, callback: (response: { path: string }) => void) => {
      const url = request.url.substr(7);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    }
  );

  // Register protocol for Pyodide files with improved error handling and logging
  protocol.registerFileProtocol(
    "pyodide",
    (
      request: { url: string },
      callback: (response: { path: string } | { error: number }) => void
    ) => {
      const url = request.url.substr(9); // Remove 'pyodide://'
      const filePath = path.join(app.getAppPath(), "dist", "pyodide", url);
      console.log(`Pyodide requesting: ${url} -> ${filePath}`);
      if (fs.existsSync(filePath)) {
        callback({ path: filePath });
      } else {
        console.error(`Pyodide file not found: ${filePath}`);
        callback({ error: -6 }); // FILE_NOT_FOUND
      }
    }
  );

  // Monitor network requests
  win.webContents.session.webRequest.onBeforeRequest(
    (details: any, callback: (response: { cancel: boolean }) => void) => {
      if (details.url.includes("pyodide") || details.url.includes("cdn.jsdelivr.net")) {
        console.log("Pyodide network request:", details.url);
      }
      callback({ cancel: false });
    }
  );

  // In development, load from local server
  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5174");
    win.webContents.openDevTools();
  } else {
    // In production, load the built app
    const indexPath = path.join(app.getAppPath(), "dist/index.html");
    console.log("Loading index from:", indexPath);
    win.loadFile(indexPath).catch((error: Error) => {
      console.error("Failed to load index.html:", error);
      // Try alternative path
      const altPath = path.join(__dirname, "../dist/index.html");
      console.log("Trying alternative path:", altPath);
      win.loadFile(altPath).catch((err: Error) => {
        console.error("Failed to load from alternative path:", err);
      });
    });
  }

  // Handle editor loading
  win.webContents.on(
    "did-fail-load",
    (_event: unknown, _errorCode: number, errorDescription: string) => {
      console.error("Failed to load:", errorDescription);
      if (process.env.NODE_ENV === "development") {
        win.loadURL("http://localhost:5174");
      } else {
        const indexPath = path.join(app.getAppPath(), "dist/index.html");
        console.log("Retrying load from:", indexPath);
        win.loadFile(indexPath).catch((error: Error) => {
          console.error("Failed to reload index.html:", error);
          // Try alternative path
          const altPath = path.join(__dirname, "../dist/index.html");
          console.log("Trying alternative path:", altPath);
          win.loadFile(altPath).catch((err: Error) => {
            console.error("Failed to load from alternative path:", err);
          });
        });
      }
    }
  );
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
