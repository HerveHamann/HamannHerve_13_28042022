import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} />
      <h1>Sign In</h1>

      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <NavLink to="/user">
          <button className="sign-in-button">Sign In</button>
        </NavLink>
      </form>
    </section>
  );
};

export default Form;
