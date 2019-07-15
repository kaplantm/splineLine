import React from "react";
import "./Stage2.css";
import TimeLine from "./stage2/TimeLine";

function Stage2(props) {
  const { lineCount = 3 } = props;
  const lines = lineCount.value;

  return (
    <React.Fragment>
      <div className="flex-container margin-auto">
        <TimeLine lineCount={lines} />
      </div>
    </React.Fragment>
  );
}

export default Stage2;
