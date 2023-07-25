import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Copyright from "./Copyright";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Welcome />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Copyright />
    </div>
  );
}

export default App;
