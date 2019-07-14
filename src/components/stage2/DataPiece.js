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
  const { style = {}, shape = shapeNames.SQUARE } = props;
  return <PieceBase shape={shape} isStaticPiece={true} style={style} />;
}

export default DataPiece;
