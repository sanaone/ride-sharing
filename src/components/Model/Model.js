import React, { useState } from "react";
import "./Model.css";
import leftArrow from "../../images/leftArrow.svg";

function Model({ placeHolder, setOpenModal, data, onSelectCity }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchText(searchWord);
    console.log("search word is: " + searchWord);
    const newFilter = data.filter((value) => {
      return value.Name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  //This method below will handle the city selection and it will pass it to the parent component.
  const clickHandlerCity = (cityName) => {
    onSelectCity(cityName);
    setOpenModal(false);
  };

  const renderResults = () => {
    console.log(searchText.length);
    if (searchText.length === 0) {
      return data.map((value, key) => {
        return <ResultRow value={value} key={key} onClick={clickHandlerCity} />;
      });
    } else if (filteredData.length !== 0) {
      return filteredData.map((value, key) => {
        return <ResultRow value={value} key={key} onClick={clickHandlerCity} />;
      });
    } else {
      return (
        <div className="No-result-row">Sorry we couldn’t find that place</div>
      );
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="searchContainer">
          <img
            className="leftArrow"
            src={leftArrow}
            alt=""
            onClick={() => setOpenModal(false)}
          ></img>
          <input
            className="SearchText"
            type="text"
            placeholder={placeHolder}
            onChange={handleFilter}
          />
        </div>
        <div className="searchResultPane">{renderResults()}</div>
      </div>
    </div>
  );
}

function ResultRow({ value, key, onClick }) {
  return (
    <div className="result-row" key={key} onClick={() => onClick(value.Name)}>
      {value.Name}
    </div>
  );
}

export default Model;
