import React from "react";
import { Typography } from "@material-ui/core";
import { getColorCustomOpacityFromHSLA } from "../../utils/generalUtils";

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

  const getOptionBoxes = () => {
    const { length } = options;
    return options.map((option, index) => {
      const opacity = gradient ? index / length : 1;

      const { label, value, style = {} } = option;

      const backgroundColorStyle = color
        ? { backgroundColor: getColorCustomOpacityFromHSLA(color, opacity) }
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
