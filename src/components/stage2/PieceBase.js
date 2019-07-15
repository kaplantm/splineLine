import React from "react";
import "./PieceBase.css";
import shapeNames, { shapeClasses } from "../../utils/shapeConstants";
import ClickOutHandler from "react-onclickout";

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
    onMouseOut,
    onMouseEnter,
    displayTextContent,
    onClickOut
  } = props;

  const shapeClassName = isStaticPiece
    ? `${shapeClasses[shape]}-static`
    : shapeClasses[shape];
  const textLocationClass = `${shapeClassName}-text${textClassModifier}`;
  const textBorderClass = displayTextContent
    ? `${shapeClassName}-text-border`
    : "";
  const innerTextLocationClass = `${shapeClassName}-inner-text${textClassModifier}`;

  // Used to override css color (so we can have flat gradient across timeline)
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
