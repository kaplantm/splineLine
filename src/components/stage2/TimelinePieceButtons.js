import React from "react";
import { IconButton } from "@material-ui/core";
import { Done, Image, Edit } from "@material-ui/icons/";
import { EDIT_MODE, VIEW_MODE, IMAGE_MODE } from "./TimelinePiece";
import shapeNames from "../../utils/shapeConstants";

function TimelinePieceButtons({ shape, mode, hoverText, onModeChange }) {
  if (hoverText.value) {
    return <div className="transparent">{hoverText.value}</div>;
  }
  if (mode.value === EDIT_MODE) {
    return (
      <div className="hoverForFullOpacity animateColorChange">
        <IconButton onMouseUp={() => onModeChange(VIEW_MODE)}>
          <Done />
        </IconButton>
        {shape === shapeNames.SQUARE && (
          <IconButton onMouseUp={() => onModeChange(IMAGE_MODE)}>
            <Image />
          </IconButton>
        )}
      </div>
    );
  } else if (mode.value === IMAGE_MODE) {
    return (
      <IconButton onMouseUp={() => onModeChange(EDIT_MODE)}>
        <Done />
      </IconButton>
    );
  } else {
    return (
      <IconButton onMouseUp={() => onModeChange(EDIT_MODE)}>
        <Edit />
      </IconButton>
    );
  }
}

export default TimelinePieceButtons;
