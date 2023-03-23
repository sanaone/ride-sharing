import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

function SignUpPage() {
  const navigate = useNavigate();
  const [phoneNo, setPhoneNo] = useState("");

  return (
    <div className="signUpContainer">
      <div className="signUpTitle">Enter your phone number to continue</div>
      <div className="phoneNoLabel" />
      Phone Number
      <div className="phoneNoLayout">
        <div className="phoneNoPrefix">+94</div>
        <input
          className="txtphoneNo"
          type="text"
          onChange={(e) => {
            setPhoneNo(e.target.value);
            console.log("INPUT>>" + phoneNo);
          }}
        />
      </div>
      <button
        className="btnNext"
        onClick={() => navigate("/SignUpOTP", { state: { phoneNo: phoneNo } })}
      >
        Next
      </button>
    </div>
  );
}

export default SignUpPage;
