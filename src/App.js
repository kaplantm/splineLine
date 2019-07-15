import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theming/theme";
import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";

function App() {
  const [stage, setStage] = useState(1);
  const [lineCount, setLineCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const state = {
    stage: { updater: setStage, value: stage },
    lineCount: { updater: setLineCount, value: lineCount },
    isLoading: { updater: setIsLoading, value: isLoading }
  };

  const headerLogoClass = `App-logo ${
    state.stage.value !== 1 ? "pointer" : ""
  }`;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header" onMouseUp={() => setStage(1)}>
            <img src={logo} className={headerLogoClass} alt="logo" />
          </header>
          <div className="AppContent">
            {stage === 1 && <Stage1 {...state} />}
            {stage === 2 && <Stage2 {...state} />}
          </div>
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
