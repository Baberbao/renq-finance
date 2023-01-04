import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#312F55",
      light: "#313439",
      contrastText: "#fff",
    },
    secondary: {
      main: "#06044a",
      light: "#4c02f1",
      contrastText: "#312F55",
    },
    text: {
      primary: "#fff",
      secondary: "#35343f",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    color: "#FFFFFF",
    heading: {
      fontWeight: 700,
      fontSize: "36px",
      color: "white",
    },
    paragraph: {
      fontWeight: 400,
      fontSize: "14px",
    },
  },

  body: {
    fontFamily: "Open Sans",
    background: "#050330",
    color: "#ffffff",
  },
});

theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Open Sans",
        background: "#050330",
        color: "#ffffff",
      },
      ".img-fluid": {
        maxWidth: "100%",
        height: "auto",
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;
