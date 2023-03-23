import React from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import cityNamedata from "./CityData.json";
import DropDownButton from "./components/DropDownButton";
import RideSearchCard from "./components/RideSearchCard";
import Model from "./components/Model";

function App() {
  return (
    <div className="App">
      <DropDownButton title="Select where you are" />
      <DropDownButton
        title="Select where you want to go"
        topMargin={0}
        color={"black"}
      />
      <p className="SearchResultTiltle">
        Available rides from <span style={{ color: "blue" }}>airport :</span>{" "}
      </p>
      <RideSearchCard />
      <Model />
      <SearchBar placeholder={"Search"} data={cityNamedata} />
    </div>
  );
}

export default App;
