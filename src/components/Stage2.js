import React, { useState } from "react";
import logo from "../logo.svg";
import "./Stage2.css";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { ThemeProvider, useTheme } from "@material-ui/styles";
import TimelinePiece from "./stage2/TimelinePiece";
import shapeNames from "../utils/shapeConstants";
import TimeLineCenter from "./stage2/TimeLineCenter";
import TimeLineLeft from "./stage2/TimeLineLeft";
import TimeLineRight from "./stage2/TimeLineRight";

function Stage2(props) {
  const { lineCount = 3 } = props;
  const lines = lineCount.value;

  return (
    <React.Fragment>
      <div className="flex-container margin-auto">
        <TimeLineLeft lineCount={lines} />
        <TimeLineCenter lineCount={lines} />
        <TimeLineRight lineCount={lines} />
      </div>
    </React.Fragment>
  );
}

export default Stage2;
