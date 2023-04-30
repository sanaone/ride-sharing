import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MyBooking.css";
import leftArrow from "../../images/leftArrow.svg";
import RideSearchCard from "../../components/RideSearchCard";
//import availableRides from "../../AvailableRides.json";
import axios from "axios";

function MyBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const [myBooking, setMyBooking] = useState({});

  const BOOKING_STATUSES = {
    //status ENUM('pending', 'accepted', 'completed', 'cancelled')
    pending: "pending",
    accepted: "accepted",
  };

  const getAppData = async () => {
    const url = "http://localhost:3001/getMyBookings";
    //console.log(await axios.post(urlLogin, { username: "sana" }));
    const response = await axios.post(url, { id: 7 });

    console.log(response.data[0]);
    setMyBooking(response.data[0]);
  };

  useEffect(() => {
    getAppData();
  }, []);

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
        {myBooking.bookingStatus === BOOKING_STATUSES.pending
          ? "pending. Please wait until the driver accepts your request. "
          : "accepted. You can contact your driver."}
      </div>
      <div className="Booking_noOfSeatsRequested">
        {myBooking.requestedSeats + " Seats requested"}
      </div>
      <RideSearchCard
        className="Booking-RideSharingCard"
        style={{ margin: "0px 0px", width: "100%", color: "red" }}
        //TODO to remove myBooking and actualy pull the rides available for this customer (customerID is the phoneNo)
        isBooking={true}
        availableRide={myBooking}
        key={myBooking.id}
        setConfirmBookingVisible={(visible) => {
          //TODO to remove this function or todo something about it if not used.
          console.log("confirmbooking visible set to " + visible);
        }}
        //TODO to set the selected ride may be this users can have multiple bookings
        //originally this is used to pass the infor of the selected ridecard
        setSelectedRide={
          //myBooking
          () => {
            console.log(
              "Set Selected ride called form bookings>>ridesharingcard"
            );
          }
        }
        // Booknow has to be invisible here all the time because this is a booking already

        ctaBtnVisibile={true}
        ctaBtnText={
          myBooking.bookingStatus === BOOKING_STATUSES.pending
            ? "Cancel"
            : "Call Driver"
        }
        ctaBtnStyle={
          myBooking.bookingStatus === BOOKING_STATUSES.pending
            ? { backgroundColor: "rgb(80,80,80)" }
            : null
        }
      />
    </div>
  );
}

export default MyBooking;
