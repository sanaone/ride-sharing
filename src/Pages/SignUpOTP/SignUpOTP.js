import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SignUpOTP.css";
import Cookies from "js-cookie";
import axios from "axios";
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
          //requestOTP();
          alert("recaptre solved");
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          console.log(
            "this is from the expired callback from oncapthaverfiy func.."
          );
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      auth
    );

    try {
      window.recaptchaVerifier.verify();
      console.log("triggered the recapture verify... wait");
    } catch (err) {
      console.log(err);
    }
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
        setSeconds(10);
        alert("we have set the recaptcha ");
        // ...
      })
      .catch((error) => {
        alert("otp wasnt sent plz check : ");
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  }

  async function validateOTP() {
    try {
      const tokenRecived = await axios.post("http://localhost:3001/login", {
        username: location.state.phoneNo,
      });

      Cookies.set("myCookie", JSON.stringify(tokenRecived), {
        expires: 7,
      });
      // alert(tokenRecived.AccessToken);
      //console.log(JSON.parse(Cookies.get("myCookie")).data.AccessToken);

      const result = await window.confirmationResult.confirm(otp);
      alert(result.user.phoneNumber + " has succesfully logged in");
      alert(location.state.phoneNumber + " has succesfully logged in");
      //TODO To route this to the booking page

      //console.log(tokenRecived);
    } catch (err) {
      alert(
        "Invalid OTP however moving to the next window as otp code is opted for the time being"
      );
    }
    navigate("/MyBooking", { state: { phoneNo: location.state.phoneNo } });
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
