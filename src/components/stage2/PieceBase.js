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

function PieceBase(props) {
  const {
    shape,
    style,
    onMouseOver,
    isStaticPiece,
    onMouseUp,
    id,
    children,
    textClassModifier = "",
    innerTextContent
  } = props;

  let element, combinedStyle;

  const shapeClassName = isStaticPiece
    ? `${shapeClasses[shape]}-static`
    : shapeClasses[shape];
  const textLocationClass = `${shapeClassName}-text${textClassModifier}`;
  const innerTextLocationClass = `${shapeClassName}-inner-text${textClassModifier}`;

  return (
    <div
      className={`${shapeClassName} animateColorChange"`}
      style={combinedStyle}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      id={id}
    >
      {!isStaticPiece && (
        <React.Fragment>
          <div className={`absolute-full ${innerTextLocationClass}`}>
            {innerTextContent}
          </div>
          <div className={`timeLineBlockText ${textLocationClass}`}>
            {children}
          </div>
        </React.Fragment>
      )}
    </div>
  );

  // if(shape === shapeNames.SQUARE){

  // }
  // else{

  // }
  // element = getCurvedPiece({
  //   shapeClassName,
  //   combinedStyle,
  //   onMouseOver,
  //   onMouseUp,
  //   id,
  //   children
  // });

  // switch (shape) {
  //   case shapeNames.CORNER_UPPER_RIGHT:
  //     combinedStyle = { ...style };
  //     shapeClassName = "quarter-circle-upper-right";
  //     break;
  //   case shapeNames.CORNER_LOWER_RIGHT:
  //     combinedStyle = { ...style };
  //     shapeClassName = "quarter-circle-upper-right";
  //     break;
  //   case shapeNames.CORNER_UPPER_LEFT:
  //     combinedStyle = { ...style };
  //     shapeClassName = "quarter-circle-upper-left";
  //     break;
  //   case shapeNames.CORNER_LOWER_LEFT:
  //     combinedStyle = { ...style };

  //     element = getCurvedPiece({
  //       shapeClassName: "quarter-circle-lower-left",
  //       combinedStyle,
  //       onMouseOver,
  //       onMouseUp,
  //       id,
  //       children
  //     });
  //     break;
  //   default:
  //     combinedStyle = { ...style };
  //     const squareClass = isStaticPiece ? "square-static" : "square";
  //     const textLocationClass = textBelow
  //       ? "square-text-below"
  //       : "square-text-above";
  //     element = (
  //       <div
  //         className={squareClass + " animateColorChange"}
  //         style={combinedStyle}
  //         onMouseOver={onMouseOver}
  //         onMouseUp={onMouseUp}
  //         id={id}
  //       >
  //         <div className={"timeLineBlockText " + textLocationClass}>
  //           <div>{children}</div>
  //         </div>
  //       </div>
  //     );
  // }
  // return element;
}

export default PieceBase;
