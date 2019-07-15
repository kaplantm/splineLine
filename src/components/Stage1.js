import React, { useState } from "react";
import logo from "../logo.svg";
import "./Stage1.css";
import { Slider, Typography, Button } from "@material-ui/core";
import Loader from "./stage1/Loader";

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
      <Typography id="how-many-lines" gutterBottom variant="h4" component="h2">
        How many lines?
      </Typography>
      <div
        style={{
          width: "60%",
          maxWidth: 500,
          marginTop: "4em",
          marginBottom: "4em"
        }}
      >
        <Slider
          valueLabelDisplay="on"
          defaultValue={lineCount.value}
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
      <Loader text={"Generating Splines..."} loading={isLoading.value} />
    </React.Fragment>
  );
}

export default Stage1;
