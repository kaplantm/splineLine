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

function DataPiece(props) {
  const { style = {}, shape = shapeNames.SQUARE, textClassModifier } = props;
  return (
    <PieceBase
      shape={shape}
      isStaticPiece={true}
      style={style}
      textClassModifier={textClassModifier}
    />
  );
}

export default DataPiece;
