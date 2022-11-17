import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="auth/sign-up" element={<SignUp />} />
        <Route path="auth/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
