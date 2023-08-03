import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Copyright from "./Copyright";
import Join from "./Join";
import LogIn from "./LogIn";
import Main from "./Main";
import Note from "./Note";
import Search from "./Search";
import Welcome from "./Welcome";

const theme = createTheme({
  palette: {
    background: {
      default: "#f0f0f0",
    },
    primary: {
      main: "#000000",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ],
  },
  components: {
    MuiIcon: {
      defaultProps: {
        fontSize: 50,
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Welcome />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="join" element={<Join />} />
          <Route path="main/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
