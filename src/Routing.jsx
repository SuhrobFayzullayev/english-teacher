import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
