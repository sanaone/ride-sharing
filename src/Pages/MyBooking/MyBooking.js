import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MyBooking.css";
import leftArrow from "../../images/leftArrow.svg";
import RideSearchCard from "../../components/RideSearchCard";
import availableRides from "../../AvailableRides.json";

function MyBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const BOOKING_STATUSES = {
    pending: "PENDING",
    confirmed: "CONFIRMED",
  };

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
        Your booking is{" "}
        {availableRides[0].bookingStatus === BOOKING_STATUSES.pending
          ? "pending. Please wait until the driver accepts your request. "
          : "accepted. You can contact your driver."}
      </div>
      <div className="Booking_noOfSeatsRequested">
        {availableRides[0].noOfSeatsAvailable + " Seats requested"}
      </div>
      <RideSearchCard
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

        ctaBtnVisibile={true}
        ctaBtnText={
          availableRides[0].bookingStatus === BOOKING_STATUSES.pending
            ? "Cancel"
            : "Call Driver"
        }
        ctaBtnStyle={
          availableRides[0].bookingStatus === BOOKING_STATUSES.pending
            ? { backgroundColor: "rgb(80,80,80)" }
            : null
        }
      />
    </div>
  );
}

export default MyBooking;
