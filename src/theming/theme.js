import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";
import { whileStatement } from "@babel/types";

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
        color: "white"
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
        "& .MuiInput-underline:after": {
          borderBottomColor: "green"
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: palette.primary.A200
          },
          "&:hover fieldset": {
            borderColor: palette.primary.A200,
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderColor: palette.primary[300]
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
        color: "#92A6C4"
      }
    }
  }
};

theme = responsiveFontSizes(createMuiTheme(theme));

export default theme;
