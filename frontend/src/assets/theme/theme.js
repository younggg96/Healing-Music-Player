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
    
  },
  typography: {
    fontFamily: "Comfortaa",
    fontSize: 14,
  },
});

export default theme;
