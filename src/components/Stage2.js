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

function Stage2(props) {
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

  // console.log(useTheme());
  return (
    <React.Fragment>
      <p>hey</p>
    </React.Fragment>
  );
}

export default Stage2;
