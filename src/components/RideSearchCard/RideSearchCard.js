import React, { useState } from "react";
import "./RideSearchCard.css";
import Model from "../Model";

function RideSearchCard() {
  const [bookNowVisible, setBookNowVisible] = useState(false);

  const clickHandler = (event) => {
    // alert("card clicked");
    console.log("the card has been clicked! " + event.type);
    setBookNowVisible(!bookNowVisible);
  };

  const bookNowHandler = (e) => {
    e.stopPropagation();
    alert("hi");
  };

  return (
    <div
      className="rideSearchCard"
      style={
        bookNowVisible
          ? {
              border: "1px solid rgba(0, 117, 255, 0.99)",
              paddingBottom: "0px",
            }
          : { border: "1px solid rgba(0, 0, 0, 0.99)", paddingBottom: "8px" }
      }
      onClick={clickHandler}
    >
      {/* //<button onClick={shoot}>Take the shot!</button> */}
      <div className="searchCard-item-right">
        <div className="searchCard-item-1">Van - Hiace 10 seater</div>
        <div className="searchCard-item-2">Akurana</div>
        <div className="searchCard-item-3">2 seats available</div>
      </div>

      <div className="searchCard-item-left">
        <div className="searchCard-item-1">Leaving</div>
        <div className="searchCard-item-2">9:00 PM</div>
        <div className="searchCard-item-3">Today</div>
      </div>
      <button
        className="btnBookNow"
        style={
          bookNowVisible
            ? { visibility: "visible" }
            : { visibility: "hidden", display: "none" }
        }
        onClick={bookNowHandler}
      >
        Book Now
      </button>
    </div>
  );
}

export default RideSearchCard;
