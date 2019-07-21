import React, { useState } from "react";
import shapeNames, { Modes } from "../../utils/sharedConstants";
import PieceBase from "./PieceBase";
import PieceEditor from "./PieceEditor";
import TimelinePieceButtons from "./TimelinePieceButtons";

function TimeLinePiece(props) {
  const {
    style = {},
    shape = shapeNames.SQUARE,
    textClassModifier,
    color,
    innerTextBorderColor,
    appMode,
    cellId,
    defaultState = Modes.VIEW_MODE
  } = props;

  const [modeValue, setMode] = useState(defaultState);
  const [savedContentValue, setSavedContent] = useState(
    window.localStorage.getItem(`savedContent${cellId}`)
  );
  const [savedImageValue, setSavedImage] = useState(
    window.localStorage.getItem(`savedImage${cellId}`)
  );
  const [savedLabelValue, setSavedLabel] = useState(
    window.localStorage.getItem(`savedLabel${cellId}`)
  );
  const [contentValue, setContent] = useState(savedContentValue);
  const [imageValue, setImage] = useState(savedImageValue);
  const [labelValue, setLabel] = useState(savedLabelValue);
  const [hoverText, setHoverText] = useState(); //can set to cellId for testing

  function updateSavedValues() {
    state.savedLabel.updater(state.label.value);
    state.savedContent.updater(state.content.value);
    state.savedImage.updater(state.image.value);

    window.localStorage.setItem(`savedLabel${cellId}`, state.label.value);
    window.localStorage.setItem(`savedContent${cellId}`, state.content.value);
    window.localStorage.setItem(`savedImage${cellId}`, state.image.value);
  }

  const onModeChange = newMode => {
    if (state.mode.value !== Modes.VIEW_MODE) {
      updateSavedValues();
    }
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

  const handleChangeEvent = updater => e => {
    updater(e.target.value);
  };

  function getPieceChildContent() {
    return state.mode.value === Modes.VIEW_MODE ? (
      <React.Fragment>
        <h3 style={{ wordBreak: "break-all" }}>{state.savedLabel.value}</h3>
        <span style={{ wordBreak: "break-all" }}>
          {state.savedContent.value}
        </span>
      </React.Fragment>
    ) : (
      <PieceEditor {...state} handleChangeEvent={handleChangeEvent} />
    );
  }

  const shouldDisplayTextContent =
    state.content.value ||
    state.label.value ||
    (appMode === "edit" && state.mode.value === Modes.EDIT_MODE);

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
