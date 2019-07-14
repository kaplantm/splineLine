import React from "react";
import TimelinePiece from "./TimelinePiece";
import shapeNames from "../../utils/shapeConstants";
import DataPiece from "./DataPiece";

function TimeLineLeft(props) {
  const { lineCount } = props;
  const style = { width: "100%" };

  const firstLine = (
    <React.Fragment key={`TIMELINE_LEFT_${0}`}>
      <DataPiece style={style} />
      <TimelinePiece style={style} />
      <DataPiece style={style} />
    </React.Fragment>
  );

  let lines = [firstLine];

  const isEvenLineCount = lineCount % 2 === 0;
  const modifier = isEvenLineCount ? 2 : 1;
  const numCurves = (lineCount - modifier) / 2;

  for (let i = 0; i < numCurves; i++) {
    const curvedLine = (
      <React.Fragment key={`TIMELINE_LEFT_${i + 1}`}>
        <TimelinePiece shape={shapeNames.CORNER_UPPER_LEFT} style={style} />
        <TimelinePiece shape={shapeNames.CORNER_LOWER_LEFT} style={style} />
        <DataPiece style={style} />
      </React.Fragment>
    );

    lines.push(curvedLine);
  }

  if (isEvenLineCount) {
    const plainLine = (
      <React.Fragment key={`TIMELINE_LEFT_${numCurves}`}>
        >
        <TimelinePiece style={style} />
        <DataPiece style={style} />
      </React.Fragment>
    );
    lines.push(plainLine);
  }

  return <div className="timeLineLeft">{lines}</div>;
}

export default TimeLineLeft;
