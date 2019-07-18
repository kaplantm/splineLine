import React from "react";
import "./PieceBase.css";
import shapeNames, { shapeClasses } from "../../utils/shapeConstants";
import ClickOutHandler from "react-onclickout";

function getFillStyle(color, image, shape) {
  const backgroundImageStyle = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }
    : {};
  return shape === shapeNames.SQUARE
    ? {
        backgroundColor: color,
        ...backgroundImageStyle
      }
    : {
        borderColor: color
      };
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
    innerTextBorderColor,
    children,
    textClassModifier = "",
    innerTextContent,
    onMouseOut,
    onMouseEnter,
    displayTextContent,
    onClickOut,
    image
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
  const fillStyle = color ? getFillStyle(color, image, shape) : {};
  const borderColorStyle = innerTextBorderColor
    ? { borderColor: innerTextBorderColor }
    : {};

  return (
    <ClickOutHandler onClickOut={onClickOut}>
      <div className="pieceContainer">
        <div
          style={{ ...style, ...fillStyle }}
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
                style={borderColorStyle}
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
