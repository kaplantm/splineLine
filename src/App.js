import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { ThemeProvider, useTheme } from "@material-ui/styles";
import theme from "./theming/theme";

import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";
import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";

const override = css`
  display: block;
  margin: 0.25em auto;
`;

function App() {
  const [stage, setStage] = useState(1);
  const [lineCount, setLineCount] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const state = {
    stage: { updater: setStage, value: stage },
    lineCount: { updater: setLineCount, value: lineCount },
    isLoading: { updater: setIsLoading, value: isLoading }
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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
