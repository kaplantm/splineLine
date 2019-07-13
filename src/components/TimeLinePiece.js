import React, { useState } from "react";
import logo from "../logo.svg";
import "./TimeLinePiece.css";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import shapeConstants from "../utils/shapeConstants";

function TimeLinePiece(props) {
  const { shape, style, color, onmouseover, id } = props;

  let element, combinedStyle;

  const backgroundColorObj = color ? { backgroundColor: color } : {};
  const borderColorObj = color ? { borderColor: color } : {};
  switch (shape) {
    case shapeConstants.CORNER_UPPER_RIGHT:
      combinedStyle = { ...style, ...borderColorObj };
      element = (
        <div
          className="quarter-circle-bottom-left"
          style={combinedStyle}
          onMouseOver={onmouseover}
          id={id}
        />
      );
      break;
    case shapeConstants.CORNER_LOWER_RIGHT:
      combinedStyle = { ...style, ...borderColorObj };
      element = (
        <div
          className="quarter-circle-top-left"
          style={combinedStyle}
          onMouseOver={onmouseover}
          id={id}
        />
      );
      break;
    case shapeConstants.CORNER_UPPER_LEFT:
      combinedStyle = { ...style, ...borderColorObj };
      element = (
        <div
          className="quarter-circle-bottom-right"
          style={combinedStyle}
          onMouseOver={onmouseover}
          id={id}
        />
      );
      break;
    case shapeConstants.CORNER_LOWER_LEFT:
      combinedStyle = { ...style, ...borderColorObj };
      element = (
        <div
          className="quarter-circle-top-right"
          style={combinedStyle}
          onMouseOver={onmouseover}
          id={id}
        />
      );
      break;
    default:
      combinedStyle = { ...style, ...backgroundColorObj };
      element = (
        <div
          className="square"
          style={combinedStyle}
          onMouseOver={onmouseover}
          id={id}
        />
      );
  }
  return element;
}

export default TimeLinePiece;
