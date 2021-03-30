import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0B1639",
      light: "#0F1A53",
      dark: "#13172C",
    },
    secondary: {
      main: "#FA00C8",
    },
    text: {
      main: "#FFFFFF",
      light: "#FFFFFE",
      dark: "#535353",
    }
  },
  typography: {
    fontFamily: "Comfortaa",
    fontSize: 14,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
  shape: {
    borderRadius: 100
  }
});

export default theme;
