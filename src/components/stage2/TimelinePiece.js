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
    baseHoverText = ""
  } = props;
  console.log(props);
  const [contentValue, setContent] = useState();
  const [modeValue, setMode] = useState(VIEW_MODE);
  const [labelValue, setLabel] = useState();
  // const [contentValue, setContent] = useState(
  //   "visited washington dc with hanna karas"
  // );
  // const [modeValue, setMode] = useState(VIEW_MODE);
  // const [labelValue, setLabel] = useState("Summery 2015");
  const [hoverText, setHoverText] = useState(baseHoverText);

  const state = {
    content: { updater: setContent, value: contentValue },
    label: { updater: setLabel, value: labelValue },
    mode: { updater: setMode, value: modeValue },
    hoverText: { updater: setHoverText, value: hoverText }
  };

  const onMouseUp = e => {
    // console.log("onMouseUp", e.target);
    // state.content.updater("cool new stuff");
    if (state.mode.value === EDIT_MODE) {
      console.log("onMouseUp", "set view");
      state.mode.updater(VIEW_MODE);
    } else {
      state.mode.updater(EDIT_MODE);
      console.log("onMouseUp", "set edit");
    }
  };
  const onMouseEnter = e => {
    // console.log("onMouseEnter", e.target);
    setHoverText("Edit");
  };

  const onMouseOut = e => {
    setHoverText(baseHoverText);
    // console.log("onMouseOut", e.target);
  };

  const handleChangeEvent = updater => e => {
    // this.setState({ [input]: e.target.value });
    // console.log("yo");
    updater(e.target.value);
  };

  const shouldDisplayTextContent =
    state.content.value || state.label.value || state.mode.value === EDIT_MODE;
  // const textClasses = ` ${textClassModifier} ${
  //   shouldDisplayTextContent ? "" : "hidden"
  // }`;

  console.log(shouldDisplayTextContent);
  return (
    <div style={{ position: "relative" }}>
      <PieceBase
        shape={shape}
        style={style}
        onMouseUp={onMouseUp}
        // onMouseOver={onMouseOver}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        textClassModifier={textClassModifier}
        displayTextContent={shouldDisplayTextContent}
        innerTextContent={
          state.mode.value === EDIT_MODE ? "Done" : state.hoverText.value
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
