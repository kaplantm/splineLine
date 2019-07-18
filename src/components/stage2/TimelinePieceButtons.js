import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import { Done, Image, Edit } from "@material-ui/icons/";
import { EDIT_MODE, VIEW_MODE, IMAGE_MODE } from "./TimelinePiece";
import shapeNames from "../../utils/shapeConstants";

function TimelinePieceButtons({ shape, mode, hoverText, handleChange }) {
  if (mode.value === EDIT_MODE) {
    return (
      <div className="hoverForFullOpacity animateColorChange">
        <IconButton onMouseUp={() => mode.updater(VIEW_MODE)}>
          <Done />
        </IconButton>
        {shape === shapeNames.SQUARE && (
          <IconButton onMouseUp={() => mode.updater(IMAGE_MODE)}>
            <Image />
          </IconButton>
        )}
      </div>
    );
  } else if (mode.value === IMAGE_MODE) {
    return (
      <IconButton onMouseUp={() => mode.updater(EDIT_MODE)}>
        <Done />
      </IconButton>
    );
  } else {
    return <div className="transparent">{hoverText.value}</div>;
  }
}

export default TimelinePieceButtons;
