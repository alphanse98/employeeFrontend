import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Register from "../page/Register";
import AdditionalDetails from "../page/AdditionalDetails";


const AppRoute = () => {

  function AuthenticatedRoute({ children }) {
    if (localStorage.getItem("AuthToken")) {
      return children;
    }
    return <Navigate to="/" />;
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/AdditionalDetails" element={<AuthenticatedRoute><AdditionalDetails /></AuthenticatedRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
