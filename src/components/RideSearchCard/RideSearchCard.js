import "./RideSearchCard.css";
// import { useNavigate } from "react-router-dom";

function RideSearchCard({
  availableRide,
  setConfirmBookingVisible,
  setSelectedRide,
  bookNowVisible,
  cancelBookingVisible,
  callDriverVisible,
}) {
  const clickHandler = (event) => {
    //setBookNowVisible(!bookNowVisible);
    setSelectedRide(availableRide);
  };

  // const navigate = useNavigate();

  return (
    <div
      className="rideSearchCard"
      style={
        bookNowVisible || callDriverVisible
          ? { border: "1px solid rgb(0, 117, 255)" }
          : { border: "1px solid rgb(0, 0, 0)" }
      }
      onClick={clickHandler}
    >
      <div className="rideSearchCardInner">
        <div className="searchCard-item-right">
          <div className="searchCard-item-1">Van - Hiace 10 seater</div>
          <div className="searchCard-item-2">{availableRide.cityFrom}</div>
          <div className="searchCard-item-3">
            {availableRide.noOfSeatsAvailable} seats available
          </div>
        </div>
        <div className="searchCard-item-left">
          <div className="searchCard-item-1">Leaving 9:00 PM</div>
          <div className="searchCard-item-2">{availableRide.cityTo}</div>
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
        onClick={(e) => {
          setConfirmBookingVisible(true);
          e.stopPropagation();
        }}
      >
        Book Now
      </button>

      <button
        className="btnCancelBooking"
        style={
          cancelBookingVisible
            ? { visibility: "visible" }
            : { visibility: "hidden", display: "none" }
        }
        onClick={(e) => {
          // setConfirmBookingVisible(true);
          e.stopPropagation();
        }}
      >
        Cancel
      </button>
      <button
        className="btncallDriverVisible"
        style={
          callDriverVisible
            ? { visibility: "visible" }
            : { visibility: "hidden", display: "none" }
        }
        onClick={(e) => {
          // setConfirmBookingVisible(true);
          e.stopPropagation();
        }}
      >
        Call Driver
      </button>
    </div>
  );
}

export default RideSearchCard;
