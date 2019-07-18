import React from "react";
import TimelinePiece, { EDIT_MODE, VIEW_MODE } from "./TimelinePiece";
import {
  mapNumericValueToRange,
  getColorCustomOpacityFromHSLA
} from "../../utils/generalUtils";
import LeftPiece from "./LeftPiece";
import RightPiece from "./RightPiece";

function TimeLine(props) {
  const { lineCount, lineColor } = props;

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
      const color = getColorCustomOpacityFromHSLA(lineColor, opacity);
      let element = (
        <TimelinePiece
          color={color}
          opacity={opacity}
          baseHoverText={cellNum}
          innerTextBorderColor={lineColor}
        />
      );

      const pieceProps = {
        index: i,
        lineCount,
        cellNum,
        opacity,
        color,
        innerTextBorderColor: lineColor
      };
      if (j === 0) {
        const defaultState = cellNum === 1 ? EDIT_MODE : VIEW_MODE;
        element = <LeftPiece {...pieceProps} defaultState={defaultState} />;
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
