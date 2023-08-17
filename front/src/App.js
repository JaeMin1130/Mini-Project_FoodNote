import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./Join";
import Main from "./Main";
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Welcome />} />
        <Route path="/MiniProject_MealNote/*" element={<Welcome />} />
        <Route path="/MiniProject_MealNote/join" element={<Join />} />
        <Route path="/MiniProject_MealNote/main/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
