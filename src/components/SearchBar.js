import React, { useState } from "react";
// import CityData from "../CityData.json";
//import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

function SearchBar({ placeholder, data, searchText }) {
  const [filderedData, setFilderedData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    const newFilter = data.filter((value) => {
      //   return value.Name.includes(searchWord);
      return value.Name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilderedData([]);
    } else {
      setFilderedData(newFilter);
    }
  };
  return (
    <div className="Search">
      <div className="Searchinputs">
        <input
          className="SearchText"
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
      </div>
      {filderedData.length !== 0 ? (
        <div className="DataResults">
          {filderedData.map((value, key) => {
            return (
              <div className="dataItem" key={key}>
                {" "}
                {value.Name}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
