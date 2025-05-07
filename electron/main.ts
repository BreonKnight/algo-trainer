import * as path from "path";

import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
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
