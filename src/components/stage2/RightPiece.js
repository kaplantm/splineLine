import React from "react";
import TimelinePiece from "./TimelinePiece";
import shapeNames from "../../utils/shapeConstants";

function RightPiece({
  index,
  lineCount,
  opacity,
  cellNum,
  color,
  appMode,
  innerTextBorderColor,
  cellId
}) {
  const pieceProps = {
    cellId,
    opacity,
    color,
    appMode,
    innerTextBorderColor
  };

  const uncurvedTextBelow = (
    <TimelinePiece textClassModifier="-below" {...pieceProps} />
  );
  const upperCurve = (
    <TimelinePiece shape={shapeNames.CORNER_UPPER_RIGHT} {...pieceProps} />
  );
  const lowerCurve = (
    <TimelinePiece shape={shapeNames.CORNER_LOWER_RIGHT} {...pieceProps} />
  );

  if (index === lineCount - 1) {
    return lineCount % 2 ? uncurvedTextBelow : lowerCurve;
  }
  if (index % 2) {
    return lowerCurve;
  } else {
    return upperCurve;
  }
}

export default RightPiece;
