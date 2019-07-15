import React from "react";
import TimelinePiece from "./TimelinePiece";
import DataPiece from "./DataPiece";
import shapeNames from "../../utils/shapeConstants";

function getLeftPiece(index, lineCount) {
  const uncurved = <TimelinePiece baseHoverText={"1"} />;

  const upperCurve = (
    <TimelinePiece baseHoverText={"1"} shape={shapeNames.CORNER_UPPER_LEFT} />
  );
  const lowerCurve = (
    <TimelinePiece baseHoverText={"1"} shape={shapeNames.CORNER_LOWER_LEFT} />
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

function getRightPiece(index, lineCount) {
  const uncurvedTextBelow = (
    <TimelinePiece baseHoverText={"1"} textClassModifier="-below" />
  );
  const upperCurve = (
    <TimelinePiece baseHoverText={"1"} shape={shapeNames.CORNER_UPPER_RIGHT} />
  );
  const lowerCurve = (
    <TimelinePiece baseHoverText={"1"} shape={shapeNames.CORNER_LOWER_RIGHT} />
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
function TimeLine(props) {
  const { lineCount } = props;
  let lines = [];
  for (let i = 0; i < lineCount; i++) {
    lines.push(
      <React.Fragment key={`TIMELINE_CENTER_${i}`}>
        <div className="flex-container">
          {getLeftPiece(i, lineCount)}
          <TimelinePiece baseHoverText={i * 3 + 2} />
          <TimelinePiece baseHoverText={i * 3 + 3} />
          <TimelinePiece baseHoverText={i * 3 + 4} />
          {getRightPiece(i, lineCount)}
        </div>
      </React.Fragment>
    );
  }
  return <div className="timeLineCenter">{lines}</div>;
}

export default TimeLine;
