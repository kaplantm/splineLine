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
import shapeNames from "../../utils/shapeConstants";
import DataPiece from "./DataPiece";

//TODO break out into components & add key prop
function TimeLineRight(props) {
  const { lineCount } = props;

  const style = { width: "100%" };

  let lines = [];

  const isOddLineCount = lineCount % 2 !== 0;
  const modifier = isOddLineCount ? 2 : 1;
  const numCurves = (lineCount - modifier) / 2;

  for (let i = 0; i < numCurves; i++) {
    const curvedLine = (
      <React.Fragment key={`TIMELINE_LEFT_${i}`}>
        <DataPiece style={style} />
        <TimelinePiece shape={shapeNames.CORNER_UPPER_RIGHT} style={style} />
        <TimelinePiece shape={shapeNames.CORNER_LOWER_RIGHT} style={style} />
      </React.Fragment>
    );

    lines.push(curvedLine);
  }
  if (isOddLineCount) {
    const plainLine = (
      <React.Fragment key={`TIMELINE_LEFT_${numCurves}`}>
        <DataPiece style={style} />
        <TimelinePiece style={style} textClassModifier="-below" />
      </React.Fragment>
    );
    lines.push(plainLine);
  }
  return <div className="timeLineRight">{lines}</div>;
}

export default TimeLineRight;
