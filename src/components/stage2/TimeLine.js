import React from "react";
import TimelinePiece from "./TimelinePiece";
import DataPiece from "./DataPiece";
import shapeNames from "../../utils/shapeConstants";
import { mapNumericValueToRange } from "../../utils/generalUtils";

function getLeftPiece({ index, lineCount, opacity, cellNum }) {
  const uncurved = <TimelinePiece opacity={opacity} baseHoverText={cellNum} />;

  const upperCurve = (
    <TimelinePiece
      shape={shapeNames.CORNER_UPPER_LEFT}
      opacity={opacity}
      baseHoverText={cellNum}
    />
  );
  const lowerCurve = (
    <TimelinePiece
      shape={shapeNames.CORNER_LOWER_LEFT}
      opacity={opacity}
      baseHoverText={cellNum}
    />
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

function getRightPiece({ index, lineCount, opacity, cellNum }) {
  const uncurvedTextBelow = (
    <TimelinePiece
      textClassModifier="-below"
      opacity={opacity}
      baseHoverText={cellNum}
    />
  );
  const upperCurve = (
    <TimelinePiece
      shape={shapeNames.CORNER_UPPER_RIGHT}
      opacity={opacity}
      baseHoverText={cellNum}
    />
  );
  const lowerCurve = (
    <TimelinePiece
      shape={shapeNames.CORNER_LOWER_RIGHT}
      opacity={opacity}
      baseHoverText={cellNum}
    />
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

  const cellsPerLine = 5;
  const totalCells = lineCount * cellsPerLine;

  for (let i = 0; i < lineCount; i++) {
    const cells = [];
    for (let j = 0; j < cellsPerLine; j++) {
      const cellNum =
        i % 2
          ? i * cellsPerLine + (cellsPerLine - j)
          : i * cellsPerLine + j + 1;

      let opacity = cellNum / totalCells;
      opacity = mapNumericValueToRange(opacity, 0, 1, 0.3, 1);
      console.log(cellNum, totalCells, opacity);
      let element = <TimelinePiece opacity={opacity} baseHoverText={cellNum} />;

      if (j === 0) {
        element = getLeftPiece({ index: i, lineCount, cellNum, opacity });
      } else if (j === 4) {
        element = getRightPiece({ index: i, lineCount, cellNum, opacity });
      }
      cells.push(
        <React.Fragment key={`TIMELINE_CELL_${i + j}`}>
          {element}
        </React.Fragment>
      );
    }
    lines.push(
      <React.Fragment key={`TIMELINE_CENTER_${i}`}>
        <div className="flex-container">{cells}</div>
      </React.Fragment>
    );
  }
  return <div className="timeLineCenter">{lines}</div>;
}

export default TimeLine;
