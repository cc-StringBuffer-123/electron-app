import { app, Tray, BrowserWindow, ipcMain, shell, screen } from 'electron'
import path from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../resources/logo.png?asset'

let mainWindow
let tray
let trayWindow
let macWindow

const WINDOW_WIDTH: number = 280
const WINDOW_HEIGHT: number = 416

function createTrayWindow() {
  const window = new BrowserWindow({
    show: false,
    frame: false,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    resizable: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    alwaysOnTop: true,
    skipTaskbar: true
  })

  window.loadURL(`file://${path.join(__dirname, '../../resources/rightMenu/index.html')}`)
  return window
}

function createMacdonaldWindow() {
  macWindow = new BrowserWindow({
    show: false,
    frame: false,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    resizable: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    alwaysOnTop: true,
    skipTaskbar: true
  })
  macWindow.loadURL(`file://${path.join(__dirname, '../../resources/rightMenu/macdonald.html')}`)

  const trayBounds = tray.getBounds()
  const windowBounds = trayWindow.getBounds()
  const screenWidth = screen.getPrimaryDisplay().workArea.width

  let x = Math.round(windowBounds.x + windowBounds.width) - 15
  const y = Math.round(windowBounds.y - windowBounds.height) + 472

  if (x + windowBounds.width > screenWidth) {
    x = Math.round(trayBounds.x - windowBounds.width - 10) + 40
  }
  macWindow.setPosition(x, y, true)
  macWindow.show()

  macWindow.on('blur', () => {
    macWindow.hide()
    trayWindow.hide()
  })
  return macWindow
}

function createTray() {
  trayWindow = createTrayWindow()
  tray = new Tray(icon)
  tray.on('right-click', () => {
    // const trayBounds = tray.getBounds()
    // const windowBounds = trayWindow.getBounds()
    // const x = Math.round(trayBounds.x + 10)
    // const y = Math.round(trayBounds.y - windowBounds.height + 30)

    const trayBounds = tray.getBounds()
    const windowBounds = trayWindow.getBounds()
    const primaryDisplay = screen.getPrimaryDisplay()
    const screenWidth = primaryDisplay.workAreaSize.width
    let x = Math.round(trayBounds.x + 10)
    const y = Math.round(trayBounds.y - windowBounds.height + 30)

    // Check if the window would overflow the screen's right edge
    if (x + windowBounds.width > screenWidth) {
      // Position the window on the left side of the tray icon
      x = Math.round(trayBounds.x - windowBounds.width - 10)
    }

    trayWindow.setPosition(x, y, true)

    if (trayWindow.isVisible()) {
      console.log('Hiding tray window')
      trayWindow.hide()
    } else {

      console.log('Showing tray window')
      trayWindow.show()
    }
  })
  tray.setToolTip('strong-gate')
  tray.on('click', () => {
    mainWindow.show()
  })
  tray.on('blur', () => {
    trayWindow.hide()
  })
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1148,
    height: 900,
    autoHideMenuBar: true,
    modal: true,
    show: false,
    icon: icon,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      webSecurity: false,
      preload: path.join(__dirname, '../preload/index'),
      sandbox: false
    },
    disableAutoHideCursor: false,
    frame: false
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }

  ipcMain.on('quit-app', () => {
    app.quit()
  })

  ipcMain.on('minimize-window', () => {
    mainWindow.minimize()
  })

  ipcMain.on('maximize-window', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  })

  return mainWindow
}

app.whenReady().then(() => {
  createTray()
  createMainWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('open-macdonald', () => {
  createMacdonaldWindow()
})
