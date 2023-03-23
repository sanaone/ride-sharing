import React from "react";
import userAccount from "../../images/userAccount.svg";
import "./UserInfoHeader.css";

function UserInfoHeader() {
  return (
    <div className="userInforHeaderContainer">
      <div className="tittle">Ride Sharing App</div>

      <img className="accountLogo" src={userAccount} alt="" />
    </div>
  );
}

export default UserInfoHeader;
