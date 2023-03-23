import React, { useState } from "react";

import "./App.css";

import cityNameData from "./CityData.json";
import DropDownButton from "./components/DropDownButton";
import RideSearchCard from "./components/RideSearchCard";
import Model from "./components/Model";
import availableRidesData from "./AvailableRides.json";
import UserInfoHeader from "./components/UserInfoHeader";

const SEARCH_PLACEHOLDER = "Select where you are";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [cityFrom, setCityFrom] = useState(SEARCH_PLACEHOLDER);
  const [cityTo, setCityTo] = useState("Select where you want to go");
  const [modalType, setModalType] = useState("FROM");
  const [availableRides, setAvailableRides] = useState(availableRidesData);

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
        console.log(availableRides[0])
      }
      {availableRides.map((availableRide, rideKey) => {
        return <RideSearchCard availableRide={availableRide} key={rideKey} />;
      })}

      {openModal ? (
        <Model
          setOpenModal={setOpenModal}
          data={cityNameData}
          setModalType={setModalType}
          onSelectCity={modalType === "FROM" ? setCityFrom : setCityTo}
          placeHolder={"Search Place"}
        />
      ) : null}
    </div>
  );
}

export default App;
