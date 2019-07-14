import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";

const palette = {
  primary: blue,
  secondary: {
    main: "hsla(144, 37%, 50%, 1)"
  }
};
let theme = {
  palette,
  overrides: {
    // MuiOutlinedInput: {
    //   notchedOutline: {
    //     borderColor: "#e0e0e0",
    //     "&$focused": {
    //       borderColor: "#607d8b"
    //     }
    //   }
    // focused: {
    //   borderColor: "#607d8b"
    // }
    // "&$focused": { borderColor: "#607d8b" }
    // },
    MuiTextField: {
      root: {
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
    }
  }
};

theme = responsiveFontSizes(createMuiTheme(theme));

export default theme;
