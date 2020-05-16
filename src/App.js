import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theming/theme'
import Stage1 from './components/Stage1'
import Stage2 from './components/Stage2'

function App() {
    const [lineCount, setLineCount] = useState(
        parseInt(window.localStorage.getItem('lineCount') || 3)
    )
    const [lineColor, setlineColor] = useState(
        window.localStorage.getItem('lineColor') || theme.palette.primary.main
    )
    const [appMode, setAppMode] = useState(
        window.localStorage.getItem('appMode') || 'edit'
    )

    const state = {
        lineCount: { updater: setLineCount, value: lineCount },
        lineColor: { updater: setlineColor, value: lineColor },
        appMode: { updater: setAppMode, value: appMode },
    }

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <div className="App">
                    <header className="App-main-header">
                        <img
                            src={logo}
                            className="App-main-logo pointer"
                            alt="logo"
                        />
                    </header>
                    <div className="AppContent">
                        <Stage1 {...state} />
                        <Stage2 {...state} />
                        {state.lineCount.value > 2 && <Stage1 {...state} />}
                    </div>
                </div>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default App
