import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Slider,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { ThemeProvider, useTheme } from "@material-ui/styles";
import theme from "./theming/theme";

import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0.25em auto;
`;

function App() {
  const handleChange = input => e => {
    // this.setState({ [input]: e.target.value });
    console.log("yo");
  };

  // console.log(useTheme());
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          {/* <TextField
            hintText="1"
            floatingLabelText="How many lines?"
            onChange={handleChange("lines")}
          /> */}
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
              defaultValue={2}
              aria-labelledby="how-many-lines"
              step={1}
              marks
              min={1}
              max={5}
            />
          </div>
          <Button variant="contained" color="primary">
            Create Timeline
          </Button>
          <div className="loader">
            <Typography id="how-many-lines" gutterBottom>
              Generating splines...
            </Typography>
            <BeatLoader
              css={override}
              sizeUnit={"px"}
              size={15}
              color={theme.palette.secondary.light}
              // loading={this.state.loading}
            />
          </div>
        </div>
        {/* {console.log(useTheme())} */}
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>How many lines?</p>
            <Button variant="contained" color="primary">
              Hello World
            </Button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
