import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rajdhani from "./fonts/Rajdhani-Medium.ttf";
import Copyright from "./Copyright";
import Join from "./Join";
import LogIn from "./LogIn";
import Main from "./Main";
import Welcome from "./Welcome";

// const theme = createTheme({
//   typography: {
//     fontFamily: "'Noto Sans KR', sans-serif",
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Welcome />} />
        <Route path="/MiniProject_MealNote/*" element={<Welcome />} />
        <Route path="/MiniProject_MealNote/join" element={<Join />} />
        <Route path="/MiniProject_MealNote/main/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
