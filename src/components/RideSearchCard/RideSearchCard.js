import React, { useState } from "react";
import "./RideSearchCard.css";

function RideSearchCard() {
  const [bookNowVisible, setBookNowVisible] = useState([false]);

  const clickHandler = (event) => {
    // alert("card clicked");
    console.log("the card has been clicked! " + event.type);
  };

  return (
    <div className="rideSearchCard" onClick={clickHandler}>
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
      <button className="btnBookNow"> Book Now</button>
    </div>
  );
}

export default RideSearchCard;
