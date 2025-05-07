const path = require("path");

const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      enableRemoteModule: true,
      webviewTag: true,
      allowRunningInsecureContent: true,
    },
    titleBarStyle: "hiddenInset",
    backgroundColor: "#282a36",
  });

  // In development, load from local server
  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    // In production, load the built app
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  // Set up Monaco Editor and Pyodide paths
  app.whenReady().then(() => {
    const appPath = process.env.NODE_ENV === "development" ? process.cwd() : app.getAppPath();
    const monacoPath = path.join(appPath, "node_modules/monaco-editor");
    const pyodidePath = path.join(appPath, "node_modules/pyodide");

    win.webContents.executeJavaScript(`
      window.MONACO_EDITOR_PATH = "${monacoPath.replace(/\\/g, "\\\\")}";
      window.PYODIDE_PATH = "${pyodidePath.replace(/\\/g, "\\\\")}";
    `);
  });

  // Handle editor loading
  win.webContents.on(
    "did-fail-load",
    (_event: unknown, _errorCode: number, errorDescription: string) => {
      console.error("Failed to load:", errorDescription);
      if (process.env.NODE_ENV === "development") {
        win.loadURL("http://localhost:3000");
      } else {
        win.loadFile(path.join(__dirname, "../dist/index.html"));
      }
    }
  );
}

app.whenReady().then(createWindow);

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
