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

const theme = createTheme({
  typography: {
    palette: {
      mode: "dark",
    },
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
    ].join(","),
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
