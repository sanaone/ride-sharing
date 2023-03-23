import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SignUpOTP.css";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase.config";

function SignUpOTP() {
  const location = useLocation();
  const navigate = useNavigate();

  const [recaptchaSolved, setrecaptchaSolved] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [otp, setOTP] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      setrecaptchaSolved(false);
    };
  }, [seconds]);

  useEffect(() => {
    onCapthaVerify();
  }, []);

  function onCapthaVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          setrecaptchaSolved(true);
          requestOTP();

          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      auth
    );
    window.recaptchaVerifier.verify();
  }

  function requestOTP() {
    //logiclly this wrong however im usign this to disable the next button
    setrecaptchaSolved(false);

    const phoneNumber = location.state.phoneNo;

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setrecaptchaSolved(true);
        setSeconds(45);
        // alert("");
        // ...
      })
      .catch((error) => {
        alert("otp wsant sent plz check : ");
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  }

  async function validateOTP() {
    try {
      const result = await window.confirmationResult.confirm(otp);
      alert(result.user.phoneNumber + " has succesfully logged in");
    } catch (err) {
      alert("Invalid OTP");
    }
  }

  return (
    <div className="signUpContainer">
      <div className="signUpTitle">Enter the OTP sent to your phone</div>
      <div id="recaptcha-container"></div>
      <div className="phone-OTP-NoLabel" />
      Phone Number
      <div className="phoneOTPNoLayout">
        <div className="lblphoneNo"> {location.state.phoneNo}</div>
      </div>
      <div className="phoneOTPNoLayout">
        <div className="phone-OTP-NoLabel">OTP</div>
        <div className="countdown-text">
          {seconds > 0 ? (
            <p>Time Remaining :{seconds < 10 ? `0${seconds}` : seconds}</p>
          ) : (
            <p>Didn't recieve code?</p>
          )}

          <button
            disabled={seconds > 0}
            style={{
              color: seconds > 0 ? "#DFE3E8" : "#FF5630",
            }}
            onClick={requestOTP}
          >
            Resend OTP
          </button>
        </div>
        <input
          className="txtOTP"
          type="number"
          pattern="[0-9]*"
          // inputmode="numeric"
          value={otp}
          onChange={(e) => {
            setOTP(e.target.value);
          }}
        />
      </div>
      <button
        className="btnNext"
        disabled={!recaptchaSolved}
        style={
          recaptchaSolved
            ? { backgroundColor: "#0075ff" }
            : { backgroundColor: "#909090" }
        }
        onClick={validateOTP}
      >
        Next
      </button>
    </div>
  );
}

export default SignUpOTP;
