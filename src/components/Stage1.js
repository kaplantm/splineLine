import React from "react";
import "./Stage1.css";
import { Slider, Typography, Button } from "@material-ui/core";
import Loader from "./stage1/Loader";
import SelectorSet from "./stage1/SelectorSet";
import theme from "../theming/theme";

function Stage1(props) {
  const { stage, lineCount, lineColor, isLoading } = props;

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

  const onSelectedLineValueChange = value => {
    console.log("onSelectedLineValueChange", value);
    lineCount.updater(value);
  };
  const onSelectedLineColorValueChange = value => {
    console.log("onSelectedLineValueChange", value);
    lineColor.updater(value);
  };
  const sharedSelectStyle = {
    paddingLeft: "1em",
    paddingRight: "1em"
  };
  return (
    <React.Fragment>
      <div className="timelineOptionsContainer">
        <SelectorSet
          label="LINES"
          gradient
          color="hsla(210, 100%, 56%, 1)"
          options={[
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 }
          ]}
          currentValue={lineCount.value}
          onValueChange={onSelectedLineValueChange}
        />
        <SelectorSet
          label="COLOR"
          spacing={"10px"}
          options={[
            {
              label: "Red",
              value: theme.palette.tertiary.main,
              style: {
                backgroundColor: "coral",
                ...sharedSelectStyle,
                marginLeft: 0
              }
            },
            {
              label: "Blue",
              value: theme.palette.primary.main,
              style: {
                backgroundColor: "dodgerblue",
                ...sharedSelectStyle
              }
            },
            {
              label: "Green",
              value: theme.palette.secondary.main,
              style: {
                backgroundColor: theme.palette.secondary.main,
                ...sharedSelectStyle
              }
            }
          ]}
          currentValue={lineColor.value}
          onValueChange={onSelectedLineColorValueChange}
        />
      </div>
      <Loader text={"Generating Splines..."} loading={isLoading.value} />
    </React.Fragment>
  );
}

export default Stage1;
