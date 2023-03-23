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
    if (searchText.length === 0) {
      return data.map((value, index) => {
        return (
          <ResultRow
            text={value.name}
            key={value.id}
            onClick={clickHandlerCity}
          />
        );
      });
      /*Above  the previous code was
            return filteredData.map((value, key) => {
        return <ResultRow value={value} key={key} onClick={clickHandlerCity} />;

        we corrected the naming converstion for easy for other developers to undestand. how did we do it.
        value={value} diidnt make any bells as it was hard to undestand. so ali spoke about how to correct it.
        making a sense wording or nameing. for example its easily undestandable for a person to get the text property or a textbox.

        similary the resultrow is undestandble name. and the actual work done was displaying a text in row.
        we the the propertyname to text. need to follow this in the future.
        //TODO : Practice proper nameing for properties in components 
      */
    } else if (filteredData.length !== 0) {
      return filteredData.map((value, index) => {
        return (
          <ResultRow
            text={value.name}
            key={value.id}
            onClick={clickHandlerCity}
          />
        );
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

function ResultRow({ text, onClick }) {
  return (
    <div className="result-row" onClick={() => onClick(text)}>
      {text}
    </div>
  );
}

export default Model;
