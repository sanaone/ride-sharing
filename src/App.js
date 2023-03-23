import React, { useState, useEffect } from "react";

import "./App.css";

import DropDownButton from "./components/DropDownButton";
import RideSearchCard from "./components/RideSearchCard";
import Model from "./components/Model";

import axios from "axios";
import UserInfoHeader from "./components/UserInfoHeader";
import ConfirmBooking from "./components/ConfirmBooking/ConfirmBooking";

const SEARCH_PLACEHOLDER = "Select where you are";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [cityFrom, setCityFrom] = useState(SEARCH_PLACEHOLDER);
  const [cityTo, setCityTo] = useState("Select where you want to go");
  const [modalType, setModalType] = useState("FROM");
  const [availableRides, setAvailableRides] = useState([]);
  const [cityData, setcityData] = useState([]);
  const [confirmBookingVisible, setConfirmBookingVisible] = useState(false);
  const [selectedRide, setSelectedRide] = useState({});
  // const bookNowHandler = (e) => {
  //   // console.log("loading booking confirmation modal shortly");
  //   setConfirmBookingVisible(true);
  // };

  const getAppData = async () => {
    const url = "http://localhost:3001/getAvailableRides";
    setAvailableRides((await axios.get(url)).data);
    const urlCityData = "http://localhost:3001/getCityData";
    setcityData((await axios.get(urlCityData)).data);
    const urlRideID = "http://localhost:3001/getAvailableRides";
    await axios.post(urlRideID, { id: 1 });
  };

  useEffect(() => {
    getAppData();
  }, []);

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
      </p>
      {
        /* write a code to map availableRides and render eachRideSearchCard */
        // console.log(availableRides[0])
      }
      {availableRides.map((availableRide, index) => {
        return (
          <RideSearchCard
            availableRide={availableRide}
            key={availableRide.id}
            setConfirmBookingVisible={setConfirmBookingVisible}
            setSelectedRide={setSelectedRide}
            bookNowVisible={selectedRide.id === availableRide.id}
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
