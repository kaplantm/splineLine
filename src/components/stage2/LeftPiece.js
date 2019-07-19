import React from "react";
import TimelinePiece from "./TimelinePiece";
import shapeNames from "../../utils/shapeConstants";

function LeftPiece({
  index,
  lineCount,
  opacity,
  cellNum,
  color,
  defaultState,
  innerTextBorderColor,
  appMode
}) {
  const pieceProps = {
    baseHoverText: cellNum,
    opacity,
    defaultState,
    appMode,
    color,
    innerTextBorderColor
  };

  const uncurved = <TimelinePiece {...pieceProps} />;
  const upperCurve = (
    <TimelinePiece shape={shapeNames.CORNER_UPPER_LEFT} {...pieceProps} />
  );
  const lowerCurve = (
    <TimelinePiece shape={shapeNames.CORNER_LOWER_LEFT} {...pieceProps} />
  );

  if (index === 0) {
    return uncurved;
  }
  if (index % 2) {
    // if(index === lineCount -1)
    return index === lineCount - 1 ? uncurved : upperCurve;
  } else {
    return lowerCurve;
  }
}

export default LeftPiece;
