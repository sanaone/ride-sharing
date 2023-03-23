import React from "react";
import { useNavigate } from "react-router-dom";

import userAccount from "../../images/userAccount.svg";
import "./UserInfoHeader.css";

function UserInfoHeader() {
  const navigate = useNavigate();

  return (
    <div className="userInforHeaderContainer">
      <div className="tittle">Ride Sharing App</div>

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
