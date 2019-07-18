import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { Done, Image, Edit } from "@material-ui/icons/";
import shapeNames from "../../utils/shapeConstants";
import PieceBase from "./PieceBase";
import PieceEditor from "./PieceEditor";
import TimelinePieceButtons from "./TimelinePieceButtons";

export const EDIT_MODE = "EDIT_MODE";
export const IMAGE_MODE = "IMAGE_MODE";
export const VIEW_MODE = "VIEW_MODE";

function TimeLinePiece(props) {
  const {
    style = {},
    shape = shapeNames.SQUARE,
    textClassModifier,
    // baseHoverText = "", //use for debugging (to display cellNums)
    color,
    innerTextBorderColor,
    defaultState = VIEW_MODE
  } = props;

  const baseHoverText = "";
  const [contentValue, setContent] = useState();
  const [modeValue, setMode] = useState(defaultState);
  const [imageValue, setImage] = useState();
  const [labelValue, setLabel] = useState();
  const [hoverText, setHoverText] = useState(baseHoverText);

  const onSwitchMode = e => {
    if (state.mode.value === EDIT_MODE) {
      state.mode.updater(VIEW_MODE);
    } else {
      state.mode.updater(EDIT_MODE);
    }
  };

  const state = {
    content: { updater: setContent, value: contentValue },
    label: { updater: setLabel, value: labelValue },
    mode: { updater: setMode, value: modeValue },
    image: { updater: setImage, value: imageValue },
    hoverText: {
      updater: setHoverText,
      value: hoverText || (
        <IconButton onMouseUp={onSwitchMode}>
          <Edit />
        </IconButton>
      )
    }
  };
  const handleChange = (updater, value) => {
    console.log("handleChange");
    updater(value);
  };

  const handleChangeEvent = updater => e => {
    updater(e.target.value);
  };

  const shouldDisplayTextContent =
    state.content.value || state.label.value || state.mode.value === EDIT_MODE;

  return (
    <React.Fragment>
      {/* {state.mode.value === IMAGE_MODE && <FullScreenInput />} */}
      <div style={{ position: "relative" }}>
        <PieceBase
          shape={shape}
          style={{ ...style }}
          color={color}
          innerTextBorderColor={innerTextBorderColor}
          image={state.image.value}
          textClassModifier={textClassModifier}
          displayTextContent={shouldDisplayTextContent}
          innerTextContent={
            <TimelinePieceButtons
              shape={shape}
              mode={state.mode}
              hoverText={state.hoverText}
              handleChange={handleChange}
            />
          }
        >
          {state.mode.value === VIEW_MODE ? (
            <React.Fragment>
              <h3>{state.label.value}</h3>
              {state.content.value}
            </React.Fragment>
          ) : (
            <PieceEditor {...state} handleChangeEvent={handleChangeEvent} />
          )}
        </PieceBase>
      </div>
    </React.Fragment>
  );
}

export default TimeLinePiece;
