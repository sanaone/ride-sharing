import "./RideSearchCard.css";
// import { useNavigate } from "react-router-dom";

function RideSearchCard({
  availableRide,
  setConfirmBookingVisible,
  style,
  setSelectedRide,
  ctaBtnVisibile,
  ctaBtnText,
  ctaBtnStyle,
}) {
  const clickHandler = (event) => {
    //setBookNowVisible(!bookNowVisible);
    setSelectedRide(availableRide);
  };

  // const navigate = useNavigate();
  //what does get style do? it sets the blue color theme acordingly. call driver btn,  booknow btn, ===>Blue ..
  const getStyle = () => {
    let mystlye = {};

    if (ctaBtnVisibile && ctaBtnText !== "Cancel") {
      mystlye = { border: "1px solid rgb(0, 117, 255)" };
    } else {
      mystlye = { border: "1px solid rgb(0, 0, 0)" };
    }
    return style ? { ...mystlye, ...style } : mystlye;
  };

  return (
    <div className="rideSearchCard" style={getStyle()} onClick={clickHandler}>
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
      {ctaBtnVisibile ? (
        <button
          className="btnBookNow"
          style={ctaBtnStyle}
          onClick={(e) => {
            setConfirmBookingVisible(true);
            e.stopPropagation();
          }}
        >
          {ctaBtnText}
        </button>
      ) : null}
    </div>
  );
}

export default RideSearchCard;
