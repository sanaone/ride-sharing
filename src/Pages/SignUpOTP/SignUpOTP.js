import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SignUpOTP.css";

function SignUpOTP() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="signUpContainer">
      <div className="signUpTitle">Enter the OTP sent to your phone</div>
      <div className="phone-OTP-NoLabel" />
      Phone Number
      <div className="phoneOTPNoLayout">
        <div className="lblphoneNo">+94 {location.state.phoneNo}</div>
      </div>
      <div className="phoneOTPNoLayout">
        <div className="phone-OTP-NoLabel">OTP</div>
        <input className="txtOTP" type="text" />
      </div>
      <button className="btnNext" onClick={() => navigate("/")}>
        Next
      </button>
    </div>
  );
}

export default SignUpOTP;
