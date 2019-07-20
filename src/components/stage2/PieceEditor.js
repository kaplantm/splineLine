import React from "react";
import { TextField } from "@material-ui/core";
import { EDIT_MODE } from "./TimelinePiece";

function PieceEditor({
  shape,
  image,
  mode,
  label,
  content,
  handleChangeEvent,
  savedContent,
  savedLabel,
  savedImage
}) {
  console.log({ savedContent });
  return (
    <React.Fragment>
      {mode.value === EDIT_MODE && (
        <React.Fragment>
          <TextField
            autoFocus={true}
            defaultValue={savedLabel.value}
            style={{ marginTop: "-.5em" }}
            placeholder="Enter Year or Label"
            id="label-entry"
            inputProps={{
              maxLength: 20
            }}
            variant="outlined"
            onChange={handleChangeEvent(label.updater)}
          />
          <TextField
            defaultValue={savedContent.value}
            style={{ marginTop: ".5em", marginBottom: "-.5em" }}
            placeholder="Enter Text"
            id="content-entry"
            multiline
            rows="4"
            inputProps={{
              maxLength: 70
            }}
            variant="outlined"
            onChange={handleChangeEvent(content.updater)}
          />
        </React.Fragment>
      )}
      {mode.value !== EDIT_MODE && (
        <TextField
          autoFocus={true}
          defaultValue={savedImage.value}
          style={{ marginTop: "-.5em" }}
          placeholder="Enter Image URL"
          id="image-url-entry"
          inputProps={{
            maxLength: 1000
          }}
          variant="outlined"
          onChange={handleChangeEvent(image.updater)}
        />
      )}
    </React.Fragment>
  );
}

export default PieceEditor;
