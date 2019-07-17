import React from "react";
import { Typography } from "@material-ui/core";
import {
  testForHSLAColorString,
  mapNumericValueToRange
} from "../../utils/generalUtils";

function SelectorSet(props) {
  const {
    options,
    gradient,
    currentValue,
    onValueChange,
    spacing,
    label,
    color
  } = props;

  function getColor(opacity = 0) {
    const regexResult = testForHSLAColorString(color);

    if (regexResult) {
      const h = regexResult[1] || 0;
      const s = regexResult[2] || 50;
      const l = regexResult[3] || 50;
      const a = mapNumericValueToRange(opacity, 0, 1, 0.2, 1);
      return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }
    return "coral";
  }

  const getOptionBoxes = () => {
    const { length } = options;
    return options.map((option, index) => {
      const opacity = gradient ? index / length : 1;

      const { label, value, style = {} } = option;

      const backgroundColorStyle = color
        ? { backgroundColor: getColor(opacity) }
        : {};
      const defaultStyle = {
        ...backgroundColorStyle,
        marginLeft: spacing,
        marginRight: spacing
      };

      const selectedClass =
        currentValue === value || (!currentValue && !index)
          ? "selectorSetOptionsActive"
          : "";
      return (
        <div
          className={` ${selectedClass} animateColorChange`}
          key={`${label}${index}`}
          style={{ ...defaultStyle, ...style }}
          onMouseUp={() => onValueChange(value)}
        >
          {label}
        </div>
      );
    });
  };

  return (
    <div className="selectorSetContainer">
      <div className="labelContainer">
        <Typography
          id="how-many-lines"
          variant="h5"
          component="h2"
          fontSize={"1px"}
        >
          {label}
        </Typography>
      </div>
      <div className="selectorSetOptionsContainer">{getOptionBoxes()}</div>
    </div>
  );
}

export default SelectorSet;
