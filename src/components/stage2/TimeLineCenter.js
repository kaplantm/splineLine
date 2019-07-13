import React, { useState } from "react";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { ThemeProvider, useTheme } from "@material-ui/styles";
import TimelinePiece from "./TimelinePiece";
import shapeConstants from "../../utils/shapeConstants";
import DataPiece from "./DataPiece";

//TODO break out into components & add key prop
function TimeLineCenter(props) {
  const { lineCount } = props;
  let lines = [];
  for (let i = 0; i < lineCount; i++) {
    lines.push(
      <React.Fragment>
        {/* DATA DIV  */}
        <div className="flex-container flex-end">
          <DataPiece />
          <DataPiece />
          <DataPiece />
        </div>
        <div className="flex-container">
          <TimelinePiece />
          <TimelinePiece />
          <TimelinePiece />
        </div>
      </React.Fragment>
    );
  }
  lines.push(
    <React.Fragment>
      {/* DATA DIV  */}
      <div className="flex-container flex-end">
        <DataPiece />
        <DataPiece />
        <DataPiece />
      </div>
    </React.Fragment>
  );
  return <div className="timeLineCenter">{lines}</div>;
}

export default TimeLineCenter;
