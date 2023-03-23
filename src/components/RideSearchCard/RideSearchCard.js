import React, { useState } from "react";
import "./RideSearchCard.css";
// import { useNavigate } from "react-router-dom";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";

function RideSearchCard({ availableRide }) {
  const [bookNowVisible, setBookNowVisible] = useState(false);

  const clickHandler = (event) => {
    setBookNowVisible(!bookNowVisible);
  };

  const bookNowHandler = (e) => {
    e.stopPropagation();
  };

  // const navigate = useNavigate();

  return (
    <div
      className="rideSearchCard"
      style={
        bookNowVisible
          ? { border: "1px solid rgb(0, 117, 255)" }
          : { border: "1px solid rgb(0, 0, 0)" }
      }
      onClick={clickHandler}
    >
      <div className="rideSearchCardInner">
        <div className="searchCard-item-right">
          <div className="searchCard-item-1">Van - Hiace 10 seater</div>
          <div className="searchCard-item-2">{availableRide.CityFrom}</div>
          <div className="searchCard-item-3">2 seats available</div>
        </div>
        <div className="searchCard-item-left">
          <div className="searchCard-item-1">Leaving</div>
          <div className="searchCard-item-2">9:00 PM</div>
          <div className="searchCard-item-3">Today</div>
        </div>
      </div>

      <button
        className="btnBookNow"
        style={
          bookNowVisible
            ? { visibility: "visible" }
            : { visibility: "hidden", display: "none" }
        }
        onClick={() => {
          bookNowHandler();
        }}
      >
        Book Now
      </button>
    </div>
  );
}

export default RideSearchCard;
