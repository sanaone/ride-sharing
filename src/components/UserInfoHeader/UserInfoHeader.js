import React from "react";
import { useNavigate } from "react-router-dom";

import userAccount from "../../images/userAccount.svg";
import "./UserInfoHeader.css";

function UserInfoHeader(props) {
  const navigate = useNavigate();

  return (
    <div className="userInforHeaderContainer">
      <div className="tittle">Ride Sharing App</div>
      <div className="userName">{props.userID}</div>
      <img
        className="accountLogo"
        src={userAccount}
        alt=""
        onClick={() => navigate("/SignUpPage")}
      />
    </div>
  );
}

export default UserInfoHeader;
