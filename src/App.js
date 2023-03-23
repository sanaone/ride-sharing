import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";

import DropDownButton from "./components/DropDownButton";
import RideSearchCard from "./components/RideSearchCard";
import Model from "./components/Model";

import axios from "axios";
import UserInfoHeader from "./components/UserInfoHeader";
import ConfirmBooking from "./components/ConfirmBooking/ConfirmBooking";
import bookingBtn from "./images/bookingicon.png";
import closeButton from "./images/closeButton.svg";

const SEARCH_PLACEHOLDER = "Select where you are";
function App() {
  const phoneNo = "0777123123";
  //TODO : update the actual user phone no BY REDIRECTING TO SIGNUPPAGE

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [cityFrom, setCityFrom] = useState(SEARCH_PLACEHOLDER);
  const [cityTo, setCityTo] = useState("Select where you want to go");
  const [modalType, setModalType] = useState("FROM");
  const [availableRides, setAvailableRides] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);

  const [cityData, setcityData] = useState([]);
  const [confirmBookingVisible, setConfirmBookingVisible] = useState(false);
  const [selectedRide, setSelectedRide] = useState({});

  const getAppData = async () => {
    const url = "http://localhost:3001/getAvailableRides";
    const dataRides = await axios.get(url);
    setAvailableRides(dataRides.data);
    setFilteredRides(dataRides.data);

    const urlCityData = "http://localhost:3001/getCityData";
    setcityData((await axios.get(urlCityData)).data);

    // const urlRideID = "http://localhost:3001/getAvailableRides";
    // await axios.post(urlRideID, { id: 1 });
  };

  useEffect(() => {
    getAppData();
  }, []);

  //updateing ridesharingcard upon the dropdown selection change
  useEffect(() => {
    // console.log("this is from cityForm to response to change " + cityFrom);
    if (cityFrom !== "Select where you are") {
      //console.log("cityfrom has a value " + cityFrom);
      setFilteredRides(
        availableRides.filter((value) => {
          return value.cityFrom === cityFrom;
        })
      );
      /* 
          the requirment handle by the above code was to load all data when the page was loaded. for this below was the intial code came from
          my thought process. 
          // setAvailableRides(
      //   availableRides.filter((value) => {
      //     return value.cityFrom === cityFrom;
      //   })
      // );
      //console.log(availableRides);

          However the above code made certain errors and didnt work sometimes.  The erorrs arrised were below.
          1. When i start the app i could click certain for example mawelenell which had 2 rides would appear. however after that i click
          another cityname the screen turns blank onward.
            later i learned that we could have another array and set state for it for filtering. insteading of mutating the original array.

            Below in the rending window i instead of use the availablerides array. i render the filteredRides.
          TODO []: to create a close button to show all of the available rides when clicked. Users needs to be alowed to getback to original
              state instead of refreshing the page as currently it only loads during refreshing pase.  
         */
    }
    // con
  }, [cityFrom, availableRides]);

  return (
    <div className="App">
      <UserInfoHeader />
      <DropDownButton
        title={cityFrom}
        setOpenModel={setOpenModal}
        ModelType={"FROM"}
        setModalType={setModalType}
      />
      <DropDownButton
        title={cityTo}
        setOpenModel={setOpenModal}
        topMargin={0}
        color={"black"}
        ModelType={"TO"}
        setModalType={setModalType}
      />

      <p className="SearchResultTiltle">
        {cityFrom !== SEARCH_PLACEHOLDER ? (
          <span>
            Available rides from
            <span style={{ color: "#0075ff", fontWeight: "bold" }}>
              {" " + cityFrom}
            </span>
            :
          </span>
        ) : (
          <span>
            Available rides from
            <span style={{ color: "#0075ff", fontWeight: "bold" }}></span> :
          </span>
        )}
        <img
          className="btnMyBooking"
          src={bookingBtn}
          alt=""
          onClick={() =>
            navigate("/MyBooking", { state: { phoneNo: phoneNo } })
          }
        />
        <img
          className="RideshareResetFilter"
          src={closeButton}
          alt=""
          onClick={() => {
            setFilteredRides(availableRides);
            setCityFrom(SEARCH_PLACEHOLDER);
          }}
        />
      </p>
      {
        /* write a code to map availableRides and render eachRideSearchCard */
        // console.log(availableRides[0])
      }
      {filteredRides.map((availableRide, index) => {
        return (
          <RideSearchCard
            availableRide={availableRide}
            key={availableRide.id}
            setConfirmBookingVisible={setConfirmBookingVisible}
            setSelectedRide={setSelectedRide}
            ctaBtnVisibile={selectedRide.id === availableRide.id}
            ctaBtnText="Book Now"
          />
        );
      })}

      {openModal ? (
        <Model
          setOpenModal={setOpenModal}
          data={cityData}
          setModalType={setModalType}
          onSelectCity={modalType === "FROM" ? setCityFrom : setCityTo}
          placeHolder={"Search Place"}
        />
      ) : null}
      {confirmBookingVisible ? (
        <ConfirmBooking
          setConfirmBookingVisible={setConfirmBookingVisible}
          selectedRide={selectedRide}
        />
      ) : null}
    </div>
  );
}

export default App;
