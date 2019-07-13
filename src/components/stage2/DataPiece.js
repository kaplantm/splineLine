import React, { useState } from "react";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import shapeConstants from "../../utils/shapeConstants";
import PieceBase from "./PieceBase";

function DataPiece(props) {
  const { style = {}, shape = shapeConstants.SQUARE } = props;
  return <PieceBase shape={shape} color={"grey"} style={style} />;
}

export default DataPiece;
