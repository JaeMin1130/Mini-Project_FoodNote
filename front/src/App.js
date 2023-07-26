import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Copyright from "./Copyright";
import Welcome from "./Welcome";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Main from "./Main";
import Note from "./Note";
import Search from "./Search";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

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
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="App">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Welcome />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="main" element={<Main />} />
            <Route path="note" element={<Note />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </BrowserRouter>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default App;
