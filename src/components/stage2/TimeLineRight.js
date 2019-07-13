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
function TimeLineRight(props) {
  const { lineCount } = props;

  const style = { width: "100%" };

  const lastLine = (
    <React.Fragment>
      <DataPiece style={style} />
    </React.Fragment>
  );

  let lines = [];

  const isOddLineCount = lineCount % 2 !== 0;
  const modifier = isOddLineCount ? 2 : 1;
  const numCurves = (lineCount - modifier) / 2;

  for (let i = 0; i < numCurves; i++) {
    const curvedLine = (
      <React.Fragment>
        <DataPiece style={style} />
        <TimelinePiece
          shape={shapeConstants.CORNER_UPPER_RIGHT}
          style={style}
        />
        <TimelinePiece
          shape={shapeConstants.CORNER_LOWER_RIGHT}
          style={style}
        />
      </React.Fragment>
    );

    lines.push(curvedLine);
  }
  if (isOddLineCount) {
    const plainLine = (
      <React.Fragment>
        <DataPiece style={style} />
        <TimelinePiece style={style} />
      </React.Fragment>
    );
    lines.push(plainLine);
  }
  lines.push(lastLine);
  return <div className="timeLineRight">{lines}</div>;
}

export default TimeLineRight;
