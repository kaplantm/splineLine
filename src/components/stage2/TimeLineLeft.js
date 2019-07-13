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
function TimeLineLeft(props) {
  const { lineCount } = props;
  const style = { width: "100%" };

  const firstLine = (
    <React.Fragment>
      <DataPiece style={style} />
      <TimelinePiece style={style} />
      <DataPiece style={style} />
    </React.Fragment>
  );

  let lines = [firstLine];

  const isEvenLineCount = lineCount % 2 === 0;
  const modifier = isEvenLineCount ? 2 : 1;
  const numCurves = (lineCount - modifier) / 2;

  for (let i = 0; i < numCurves; i++) {
    const curvedLine = (
      <React.Fragment>
        <TimelinePiece shape={shapeConstants.CORNER_UPPER_LEFT} style={style} />
        <TimelinePiece shape={shapeConstants.CORNER_LOWER_LEFT} style={style} />
        <DataPiece style={style} />
      </React.Fragment>
    );

    lines.push(curvedLine);
  }

  if (isEvenLineCount) {
    const plainLine = (
      <React.Fragment>
        <TimelinePiece style={style} />
        <DataPiece style={style} />
      </React.Fragment>
    );
    lines.push(plainLine);
  }

  return <div className="timeLineLeft">{lines}</div>;
}

export default TimeLineLeft;
