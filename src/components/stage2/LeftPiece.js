import React from "react";
import TimelinePiece from "./TimelinePiece";
import shapeNames from "../../utils/sharedConstants";

function LeftPiece(props) {
  const { index, lineCount } = props;

  const uncurved = <TimelinePiece {...props} />;
  const upperCurve = (
    <TimelinePiece shape={shapeNames.CORNER_UPPER_LEFT} {...props} />
  );
  const lowerCurve = (
    <TimelinePiece shape={shapeNames.CORNER_LOWER_LEFT} {...props} />
  );

  if (index === 0) {
    return uncurved;
  }
  if (index % 2) {
    return index === lineCount - 1 ? uncurved : upperCurve;
  } else {
    return lowerCurve;
  }
}

export default LeftPiece;
