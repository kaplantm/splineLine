import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// import { blue, green } from "@material-ui/core/colors";

const palette = {
  primary: {
    main: "hsla(210, 100%, 56%, 1)"
  },
  secondary: {
    main: "hsla(144, 37%, 50%, 1)"
  },
  tertiary: {
    main: "hsla(16, 100%, 66%, 1)"
  }
};
let theme = {
  palette,
  overrides: {
    MuiIconButton: {
      root: {
        color: "white",
        backgroundColor: "hsla(220, 13%, 18%, .5);",
        margin: ".25em",
        "&:hover": {
          backgroundColor: "hsla(220, 13%, 18%, .75);"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        color: "white"
      }
    },
    MuiInput: {
      root: {
        color: "white"
      }
    },
    MuiTextField: {
      root: {
        color: "white",
        "& label.Mui-focused": {
          color: "green"
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "hsla(216, 10%, 67%, 1)"
          },
          "&:hover fieldset": {
            borderColor: "hsla(216, 10%, 67%, 1)",
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderColor: "hsla(216, 10%, 87%, 1)"
          }
        }
      }
    },
    MuiSlider: {
      root: {
        color: palette.secondary.main,
        height: 8
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        marginTop: -8,
        marginLeft: -12,
        "&:focus,&:hover,&$active": {
          boxShadow: "inherit"
        }
      },
      active: {},
      valueLabel: {
        left: "calc(-50% + 4px)"
      },
      track: {
        height: 8,
        borderRadius: 4
      },
      mark: {
        display: "none"
      },
      rail: {
        height: 8,
        borderRadius: 4
      }
    },
    MuiTypography: {
      h5: {
        color: "hsla(216, 30%, 67%, 1)"
      }
    }
  }
};

theme = responsiveFontSizes(createMuiTheme(theme));

export default theme;
