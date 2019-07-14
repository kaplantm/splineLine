import React from "react";
import TimelinePiece from "./TimelinePiece";
import DataPiece from "./DataPiece";

function TimeLineCenter(props) {
  const { lineCount } = props;
  let lines = [];
  for (let i = 0; i < lineCount; i++) {
    lines.push(
      <React.Fragment key={`TIMELINE_CENTER_${i}`}>
        {/* DATA DIV  */}
        <div className="flex-container flex-end">
          <DataPiece />
          <DataPiece />
          <DataPiece />
        </div>
        <div className="flex-container">
          <TimelinePiece />
          <TimelinePiece />
          <TimelinePiece />
        </div>
      </React.Fragment>
    );
  }
  lines.push(
    <React.Fragment key={`TIMELINE_CENTER_${lineCount}`}>
      {/* DATA DIV  */}
      <div className="flex-container flex-end">
        <DataPiece />
        <DataPiece />
        <DataPiece />
      </div>
    </React.Fragment>
  );
  return <div className="timeLineCenter">{lines}</div>;
}

export default TimeLineCenter;
