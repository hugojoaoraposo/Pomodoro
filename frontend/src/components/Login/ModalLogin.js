import React, { useState } from "react";
import "./ModalLogin.css";

//import LoginService from "../service/LoginService";


import { Link } from "react-router-dom";

function ModalLogin(props) {
  return (
    <div className="enter-container">
      <Link to="/profile">
        <button className="enter-button">Login</button>
      </Link>
    </div>
  );
}

export default ModalLogin;