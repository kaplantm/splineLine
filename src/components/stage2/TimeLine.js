import React from "react";
import TimelinePiece from "./TimelinePiece";
import { mapNumericValueToRange } from "../../utils/generalUtils";
import LeftPiece from "./LeftPiece";
import RightPiece from "./RightPiece";

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

      const pieceProps = { index: i, lineCount, cellNum, opacity };
      if (j === 0) {
        element = <LeftPiece {...pieceProps} />;
      } else if (j === 4) {
        element = <RightPiece {...pieceProps} />;
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
