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

function InteractiveTimeLinePiece(props) {
  const { style = {}, shape = shapeConstants.SQUARE } = props;
  return <PieceBase shape={shape} color={"blue"} style={style} />;
}

export default InteractiveTimeLinePiece;
