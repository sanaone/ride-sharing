import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="fromWrapper">
        <select name="From" id="From">
          <option value="Select where you are" disabled selected>
            Select where you are
          </option>
          <option value="Akurana">Akurana</option>
          <option value="Mawanella">Mawanella</option>
          <option value="Kegalle">Kegalle</option>
          <option value="Kurunegalle">Kurunegalle</option>
          <option value="Katunayaka">Katunayaka Airport</option>
        </select>
      </div>
      <input placeholder="Search" />
    </div>
  );
}

export default App;
