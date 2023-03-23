import React from "react";
import DownArrowVector from "../../images/downArrowVector.svg";
import "./DropDownButton.css";
import Model from "../Model";

function DropDownButton({ title, topMargin, color }) {
  const clickhandler = () => {
    alert("Button Clicked");
  };

  return (
    <button
      onClick={clickhandler}
      style={{ marginTop: topMargin, color: color, borderColor: color }}
    >
      {title}
      <img
        src={DownArrowVector}
        width="13.29"
        height="7"
        alt=""
        className={color === "black" ? "blackImage" : ""}
      />
    </button>
  );
}

export default DropDownButton;
