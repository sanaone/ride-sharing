import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MyBooking.css";
import leftArrow from "../../images/leftArrow.svg";
import RideSearchCard from "../../components/RideSearchCard";
import availableRides from "../../AvailableRides.json";

function MyBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="myBookingContainer">
      {/* <div className="title">My Booking for : {location.state.phoneNo}</div> */}
      <div className="BookingSearchContainer">
        <img
          className="Booking_leftArrow"
          src={leftArrow}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <div className="bookingTitle">
          My Booking : {location.state.phoneNo}
        </div>
      </div>
      <div className="Booking_Status">
        Your booking is {"<booking status> " + " <booking status msg>"}
      </div>
      <div className="Booking_noOfSeatsRequested">
        {"xx2xx " + "Seats requested"}
      </div>
      <RideSearchCard
        //FIXME why cant i make a custom css for this instance of the react component
        className="Booking-RideSharingCard"
        style={{ margin: "0px 0px", width: "100%", color: "red" }}
        //TODO to remove availableRides[0] and actualy pull the rides available for this customer (customerID is the phoneNo)
        availableRide={availableRides[0]}
        key={availableRides[0].id}
        setConfirmBookingVisible={(visible) => {
          //TODO to remove this function or todo something about it if not used.
          console.log("confirmbooking visible set to " + visible);
        }}
        //TODO to set the selected ride may be this users can have multiple bookings
        //originally this is used to pass the infor of the selected ridecard
        setSelectedRide={
          //availableRides[0]
          () => {
            console.log(
              "Set Selected ride called form bookings>>ridesharingcard"
            );
          }
        }
        // Booknow has to be invisible here all the time because this is a booking already
        bookNowVisible={false}
        cancelBookingVisible={false}
        callDriverVisible={true}
      />
    </div>
  );
}

export default MyBooking;
