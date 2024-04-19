import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
