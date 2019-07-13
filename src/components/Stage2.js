import React, { useState } from "react";
import logo from "../logo.svg";
import "./Stage2.css";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { ThemeProvider, useTheme } from "@material-ui/styles";
import TimeLinePiece from "./TimeLinePiece";
import shapeConstants from "../utils/shapeConstants";

function Stage2(props) {
  //   const highlightLinked = source => {
  //     // source.style.
  //     console.log(
  //       "highlightLinked",
  //       source.target.id,
  //       source.target.className,
  //       source.target.style.backgroundColor
  //     );
  //   };
  return (
    <React.Fragment>
      <div className="flex-container height-100 margin-auto center-column">
        <div className="flex-container margin-auto">
          <div className="cyan">
            {/* DATA DIV */}
            <TimeLinePiece
              shape={shapeConstants.SQUARE}
              color={"cornflowerblue"}
              style={{ width: "100%" }}
            />
            {/* <div className="red square height-100px width-100" /> */}
            <TimeLinePiece
              // onmouseover={highlightLinked}
              shape={shapeConstants.SQUARE}
              style={{ width: "100%" }}
              color={"orange"}
              id={"dero"}
            />
            {/* DATA DIV */}
            <TimeLinePiece
              shape={shapeConstants.SQUARE}
              color={"cornflowerblue"}
              style={{ width: "100%" }}
            />
            <TimeLinePiece
              shape={shapeConstants.CORNER_UPPER_LEFT}
              style={{ width: "100%" }}
              color={"yellow"}
            />

            <TimeLinePiece
              shape={shapeConstants.CORNER_LOWER_LEFT}
              style={{ width: "100%" }}
              color={"yellow"}
            />
            {/* DATA DIV */}
            <TimeLinePiece
              shape={shapeConstants.SQUARE}
              color={"cornflowerblue"}
              style={{ width: "100%" }}
            />
          </div>

          <div className="flex-container pink">
            {/* DATA DIV */}
            <div className="flex-container flex-end">
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
            </div>
            <div className="flex-container">
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
            </div>
            {/* DATA DIV */}
            <div className="flex-container flex-end">
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
            </div>
            <div className="flex-container">
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
            </div>{" "}
            {/* DATA DIV */}
            <div className="flex-container flex-end">
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
            </div>
            <div className="flex-container">
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"blue"} />
            </div>{" "}
            {/* DATA DIV */}
            <div className="flex-container flex-end">
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
              <TimeLinePiece shape={shapeConstants.SQUARE} color={"magenta"} />
            </div>
          </div>
          <div className="olive">
            {/* DATA DIV */}
            <TimeLinePiece
              shape={shapeConstants.SQUARE}
              color={"green"}
              style={{ width: "100%" }}
            />
            <TimeLinePiece
              shape={shapeConstants.CORNER_UPPER_RIGHT}
              style={{ width: "100%" }}
              color={"yellow"}
            />

            <TimeLinePiece
              shape={shapeConstants.CORNER_LOWER_RIGHT}
              style={{ width: "100%" }}
              color={"yellow"}
            />

            {/* DATA DIV */}
            <TimeLinePiece
              shape={shapeConstants.SQUARE}
              color={"green"}
              style={{ width: "100%" }}
            />
            <TimeLinePiece
              shape={shapeConstants.SQUARE}
              style={{ width: "100%" }}
              color={"blue"}
            />
            {/* DATA DIV */}
            <TimeLinePiece
              shape={shapeConstants.SQUARE}
              color={"green"}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Stage2;
