import React, { useState } from "react";
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
    appMode,
    defaultState = VIEW_MODE
  } = props;

  const baseHoverText = "";
  const [modeValue, setMode] = useState(defaultState);
  const [contentValue, setContent] = useState();
  const [imageValue, setImage] = useState();
  const [labelValue, setLabel] = useState();

  const [savedContentValue, setSavedContent] = useState();
  const [savedImageValue, setSavedImage] = useState();
  const [savedLabelValue, setSavedLabel] = useState();
  const [hoverText, setHoverText] = useState(baseHoverText);

  function updateSavedValues() {
    console.log(state);
    state.savedLabel.updater(state.label.value);
    state.savedContent.updater(state.content.value);
    state.savedImage.updater(state.image.value);
  }

  //TODO: don't want both onSwitchModa and onModeChange
  const onSwitchMode = e => {
    if (state.mode.value === EDIT_MODE) {
      state.mode.updater(VIEW_MODE);
    } else {
      state.mode.updater(EDIT_MODE);
    }
  };

  const onModeChange = newMode => {
    updateSavedValues();
    state.mode.updater(newMode);
  };

  const state = {
    mode: { updater: setMode, value: modeValue },
    content: { updater: setContent, value: contentValue },
    label: { updater: setLabel, value: labelValue },
    image: { updater: setImage, value: imageValue },
    savedContent: { updater: setSavedContent, value: savedContentValue },
    savedLabel: { updater: setSavedLabel, value: savedLabelValue },
    savedImage: { updater: setSavedImage, value: savedImageValue },
    hoverText: {
      updater: setHoverText,
      value: hoverText
    }
  };
  console.log(appMode);

  const handleChangeEvent = updater => e => {
    updater(e.target.value);
  };

  function getPieceChildContent() {
    return state.mode.value === VIEW_MODE ? (
      <React.Fragment>
        <h3 style={{ wordBreak: "break-all" }}>{state.label.value}</h3>
        <span style={{ wordBreak: "break-all" }}>{state.content.value}</span>
      </React.Fragment>
    ) : (
      <PieceEditor {...state} handleChangeEvent={handleChangeEvent} />
    );
  }

  const shouldDisplayTextContent =
    state.content.value ||
    state.label.value ||
    (appMode === "edit" && state.mode.value === EDIT_MODE);

  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <PieceBase
          shape={shape}
          style={{ ...style }}
          color={color}
          innerTextBorderColor={innerTextBorderColor}
          image={state.savedImage.value}
          textClassModifier={textClassModifier}
          displayTextContent={shouldDisplayTextContent}
          innerTextContent={
            appMode === "edit" && (
              <TimelinePieceButtons
                shape={shape}
                mode={state.mode}
                hoverText={state.hoverText}
                onModeChange={onModeChange}
              />
            )
          }
        >
          {getPieceChildContent()}
        </PieceBase>
      </div>
    </React.Fragment>
  );
}

export default TimeLinePiece;
