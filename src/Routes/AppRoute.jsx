import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Register from "../page/Register";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
