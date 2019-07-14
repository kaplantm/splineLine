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
  const { style = {}, shape = shapeNames.SQUARE, textClassModifier } = props;

  const [contentValue, setContent] = useState(
    "Started at UMaine Studying New Media and Computer Science"
  );
  const [modeValue, setMode] = useState(VIEW_MODE);

  const state = {
    content: { updater: setContent, value: contentValue },
    mode: { updater: setMode, value: modeValue }
  };

  const onMouseUp = e => {
    // console.log("onMouseUp", e.target);
    // state.content.updater("cool new stuff");
    state.mode.updater(EDIT_MODE);
  };
  const onMouseOver = e => {
    // console.log("onMouseOver", e.target);
  };

  return (
    <div style={{ position: "relative" }}>
      <PieceBase
        shape={shape}
        style={style}
        onMouseUp={onMouseUp}
        onMouseOver={onMouseOver}
        textClassModifier={textClassModifier}
        innerTextContent={"Done"}
      >
        {state.mode.value !== EDIT_MODE && state.content.value}
        {state.mode.value === EDIT_MODE && (
          <div>
            {/* <Button
              variant="contained"
              color="primary"
              // onClick={handleCreateTimelineButtonClick}
            >
              Update
            </Button> */}
            {/* <div
              style={{
                position: "absolute",
                top: -20,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            > */}
            <TextField
              // style={{ width: "100%", marginTop: "-2em" }}
              id="outlined-multiline-static"
              multiline
              rows="4"
              inputProps={{
                maxLength: 70
              }}
              defaultValue="Default Value"
              variant="outlined"
            />
            {/* </div> */}
          </div>
        )}
      </PieceBase>
      {/* {state.mode.value === EDIT_MODE && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextField
            style={{ width: "80%", height: 80 }}
            id="outlined-multiline-static"
            multiline
            // rows="4"
            defaultValue="Default Value"
            // className={classes.textField}
            // margin="normal"
            variant="outlined"
          />
        </div>
      )} */}
    </div>
  );
}

export default TimeLinePiece;
