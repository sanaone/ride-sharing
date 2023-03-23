import React from "react";
import App from "./App";
import "./MainApp.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpPage from "./Pages/SignUpPage";
import SignUpOTP from "./Pages/SignUpOTP";
import MyBooking from "./Pages/MyBooking";

function MainApp() {
  return (
    <div className="MainApp">
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/SignUpPage" element={<SignUpPage />} />
            <Route exact path="/SignUpOTP" element={<SignUpOTP />} />
            <Route exact path="/MyBooking" element={<MyBooking />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default MainApp;
