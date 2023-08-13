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
          <Route path="/join" element={<Join />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
