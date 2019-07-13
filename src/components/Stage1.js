import React, { useState } from "react";
import logo from "../logo.svg";
import "./Stage1.css";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { ThemeProvider, useTheme } from "@material-ui/styles";
import theme from "../theming/theme";

import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0.25em auto;
`;

function Stage1(props) {
  const { stage, lineCount, isLoading } = props;

  const handleSliderChange = (e, value) => {
    lineCount.updater(value);
  };

  const handleCreateTimelineButtonClick = () => {
    isLoading.updater(true);
    setTimeout(() => {
      stage.updater(stage.value + 1);
      isLoading.updater(false);
    }, 1000);
  };
  return (
    <React.Fragment>
      <Typography id="how-many-lines" gutterBottom>
        How many lines?
      </Typography>
      <div
        style={{
          width: "60%",
          maxWidth: 500,
          marginTop: "2em",
          marginBottom: "2em"
        }}
      >
        <Slider
          valueLabelDisplay="on"
          defaultValue={stage.value}
          aria-labelledby="how-many-lines"
          step={1}
          marks
          min={1}
          max={5}
          onChangeCommitted={handleSliderChange}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateTimelineButtonClick}
      >
        Create Timeline
      </Button>
      {isLoading.value && (
        <div className="loader">
          <Typography id="how-many-lines" gutterBottom>
            Generating splines...
          </Typography>
          <BeatLoader
            css={override}
            sizeUnit={"px"}
            size={15}
            color={theme.palette.secondary.light}
            loading={isLoading.value}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default Stage1;
