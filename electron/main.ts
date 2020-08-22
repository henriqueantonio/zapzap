import { app, BrowserWindow, nativeImage } from 'electron';
import * as path from 'path';
import * as url from 'url';
import colors from '../src/styles/colors';
import 'update-electron-app';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  // const icon = nativeImage.createFromPath(
  //   `${app.getAppPath()}/src/assets/icon.jpg`
  // );

  // if (app.dock) {
  //   app.dock.setIcon(icon);
  // }

  mainWindow = new BrowserWindow({
    width: 1300,
    height: 700,
    backgroundColor: colors.backgroundPrimary,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.allowRendererProcessReuse = true;
