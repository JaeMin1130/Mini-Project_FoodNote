import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Copyright from "./Copyright";
import Join from "./Join";
import LogIn from "./LogIn";
import Main from "./Main";
import Welcome from "./Welcome";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Welcome />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/join" element={<Join />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Copyright />
    </Box>
  );
}

export default App;
