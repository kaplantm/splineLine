import React, { useState } from "react";
import "./PieceBase.css";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import shapeNames, { shapeClasses } from "../../utils/shapeConstants";
import { flexbox } from "@material-ui/system";
import ClickOutHandler from "react-onclickout";

function getCurvedPiece({
  shapeClassName,
  combinedStyle,
  onMouseOver,
  onMouseUp,
  id,
  children
}) {
  return (
    <div
      className={`${shapeClassName} animateColorChange"`}
      style={combinedStyle}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      id={id}
    >
      <div className={`timeLineBlockText ${shapeClassName}-text`}>
        {children}
      </div>
    </div>
  );
}

function getColorStyle(color, shape) {
  return shape === shapeNames.SQUARE
    ? { backgroundColor: color }
    : { borderColor: color };
}

function PieceBase(props) {
  const {
    shape,
    style,
    color,
    onMouseOver,
    isStaticPiece,
    onMouseUp,
    id,
    children,
    textClassModifier = "",
    innerTextContent,
    onMouseUpInner,
    onMouseOut,
    onMouseEnter,
    displayTextContent,
    onClickOut
  } = props;

  let element, combinedStyle;

  const shapeClassName = isStaticPiece
    ? `${shapeClasses[shape]}-static`
    : shapeClasses[shape];
  const textLocationClass = `${shapeClassName}-text${textClassModifier}`;
  const textBorderClass = displayTextContent
    ? `${shapeClassName}-text-border`
    : "";
  const innerTextLocationClass = `${shapeClassName}-inner-text${textClassModifier}`;

  const colorStyle = color ? getColorStyle(color, shape) : {};
  return (
    <ClickOutHandler onClickOut={onClickOut}>
      <div className="pieceContainer">
        <div
          style={{ ...style, ...colorStyle }}
          className={`${shapeClassName} animateColorChange"`}
          // onMouseOver={onMouseOver}
          id={id}
        >
          {!isStaticPiece && (
            <React.Fragment>
              <div
                className={`absolute-full ${innerTextLocationClass}`}
                onMouseUp={onMouseUp}
                onMouseOut={onMouseOut}
                onMouseEnter={onMouseEnter}
                onMouseOver={onMouseOver}
              >
                {innerTextContent}
              </div>
              <div
                className={`timeLineBlockText ${textLocationClass} ${textBorderClass}`}
              >
                {children}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </ClickOutHandler>
  );
}

export default PieceBase;
