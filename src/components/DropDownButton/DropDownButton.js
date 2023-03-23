import React from "react";
import DownArrowVector from "../../images/downArrowVector.svg";
import "./DropDownButton.css";
//import cityNamedata from "../../CityData.json";

function DropDownButton({
  title,
  topMargin,
  color,
  setOpenModel,
  ModelType,
  setModalType,
}) {
  const clickhandler = () => {
    setOpenModel(true);
    setModalType(ModelType);
  };

  return (
    <button
      className="btnSelectCity"
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
