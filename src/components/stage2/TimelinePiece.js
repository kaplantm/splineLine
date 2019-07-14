import React, { useState } from "react";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import shapeNames from "../../utils/shapeConstants";
import PieceBase from "./PieceBase";

function TimeLinePiece(props) {
  const { style = {}, shape = shapeNames.SQUARE, textClassModifier } = props;

  const onMouseUp = e => {
    console.log("onMouseUp", e.target);
  };
  const onMouseOver = e => {
    // console.log("onMouseOver", e.target);
  };

  return (
    <PieceBase
      shape={shape}
      style={style}
      onMouseUp={onMouseUp}
      onMouseOver={onMouseOver}
      textClassModifier={textClassModifier}
    >
      Started at UMaine Studying New Media and Computer Science Started at
    </PieceBase>
  );
}

export default TimeLinePiece;
