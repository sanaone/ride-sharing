import React, { useState } from "react";
import "./ConfirmBooking.css";

function ConfirmBooking({ setConfirmBookingVisible, selectedRide }) {
  const [seatValidationMsg, setseatValidationMsg] = useState("");

  const handleTextChange = (e) => {
    const iSeatsAvailable = parseInt(e.target.value);
    if (iSeatsAvailable <= selectedRide.noOfSeatsAvailable) {
      setseatValidationMsg("");

      // To update the Booking JSon file with seatsbooked value and phoneNo as the user ID
    } else {
      setseatValidationMsg(
        "Please enter a number within " + selectedRide.noOfSeatsAvailable
      );
    }
  };
  return (
    <div
      className="modalBackground-cb"
      onClick={
        () => setConfirmBookingVisible(false)
        // () => alert("background clicked")
      }
    >
      <div className="modalContainer-cb" onClick={(e) => e.stopPropagation()}>
        <div className="title">Confirm your booking</div>

        <div className="noOfSeatsTitle">
          Number of seats you want to book out of{" "}
          {selectedRide.noOfSeatsAvailable}
        </div>
        <input
          className="txtNoOfSeats"
          onChange={handleTextChange}
          type="number"
          pattern="[0-9]*"
          inputmode="numeric"
        />
        <label className="seatsNoValidation">{seatValidationMsg}</label>
        <div className="btnContainer">
          <button
            className="btncancel"
            onClick={() => {
              setConfirmBookingVisible(false);
            }}
          >
            Cancel
          </button>
          <button
            className="btnbooknow"
            style={
              seatValidationMsg !== ""
                ? { backgroundColor: "#909090" }
                : { backgroundColor: "#0075ff" }
            }
            disabled={seatValidationMsg}
            onClick={() => {
              alert(
                "THE BUTTON HAS ACCEPTED THE CLICK AND READY PROCESS THE DATA"
              );
            }}
          >
            Yes, book now{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;
