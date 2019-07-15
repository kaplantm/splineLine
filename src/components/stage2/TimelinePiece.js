import React, { useState } from "react";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import shapeNames from "../../utils/shapeConstants";
import PieceBase from "./PieceBase";

const EDIT_MODE = "EDIT_MODE";
const VIEW_MODE = "VIEW_MODE";

function TimeLinePiece(props) {
  const {
    style = {},
    shape = shapeNames.SQUARE,
    textClassModifier,
    // baseHoverText = "", //use for debugging (to display cellNums)
    opacity = 1
  } = props;

  const baseHoverText = "";
  const [contentValue, setContent] = useState();
  const [modeValue, setMode] = useState(VIEW_MODE);
  const [labelValue, setLabel] = useState();
  const [hoverText, setHoverText] = useState(baseHoverText);

  const state = {
    content: { updater: setContent, value: contentValue },
    label: { updater: setLabel, value: labelValue },
    mode: { updater: setMode, value: modeValue },
    hoverText: { updater: setHoverText, value: hoverText }
  };

  const onMouseUp = e => {
    if (state.mode.value === EDIT_MODE) {
      state.mode.updater(VIEW_MODE);
    } else {
      state.mode.updater(EDIT_MODE);
    }
  };

  const onMouseEnter = e => {
    state.hoverText.updater("Edit");
  };

  const onMouseOut = e => {
    state.hoverText.updater(baseHoverText);
  };

  const onClickOut = () => {
    if (state.mode.value === EDIT_MODE) {
      state.mode.updater(VIEW_MODE);
    }
  };

  const handleChangeEvent = updater => e => {
    updater(e.target.value);
  };

  const shouldDisplayTextContent =
    state.content.value || state.label.value || state.mode.value === EDIT_MODE;

  const color = `hsl(210, 100%, 56%, ${opacity})`;

  return (
    <div style={{ position: "relative" }}>
      <PieceBase
        shape={shape}
        style={{ ...style }}
        onMouseUp={onMouseUp}
        color={color}
        // onMouseOver={onMouseOver}
        textClassModifier={textClassModifier}
        displayTextContent={shouldDisplayTextContent}
        onClickOut={onClickOut}
        onMouseOver={onMouseEnter}
        onMouseOut={onMouseOut}
        innerTextContent={
          state.mode.value === EDIT_MODE ? (
            <div className="hoverForFullOpacity animateColorChange">Done</div>
          ) : (
            <div className="transparent">{state.hoverText.value}</div>
          )
        }
      >
        {state.mode.value !== EDIT_MODE && (
          <React.Fragment>
            <h3>{state.label.value}</h3>
            {state.content.value}
          </React.Fragment>
        )}
        {state.mode.value === EDIT_MODE && (
          <React.Fragment>
            <TextField
              autoFocus={true}
              defaultValue={state.label.value}
              style={{ marginTop: "-.5em" }}
              placeholder="Enter Year or Label"
              id="outlined-multiline-static"
              inputProps={{
                maxLength: 20
              }}
              variant="outlined"
              onChange={handleChangeEvent(state.label.updater)}
            />
            <TextField
              defaultValue={state.content.value}
              style={{ marginTop: ".5em", marginBottom: "-.5em" }}
              placeholder="Enter Text"
              id="outlined-multiline-static"
              multiline
              rows="4"
              inputProps={{
                maxLength: 70
              }}
              variant="outlined"
              onChange={handleChangeEvent(state.content.updater)}
            />
          </React.Fragment>
        )}
      </PieceBase>
    </div>
  );
}

export default TimeLinePiece;
