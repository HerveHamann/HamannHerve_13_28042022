import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "../redux";

import { useSelector } from "react-redux";

const Form = () => {
  const state = useSelector((state) => console.log(state));

  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const identifiers = { email: userEmail, password: userPassword };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(identifiers),
  };

  async function SendIdentifiers() {
    await fetch("http://localhost:3001/api/v1/user/login", options).then((res) =>
      res.json().then((res) => {
        if (res.status === 200) {
          dispatch(getToken(res.body.token));
        } else {
          console.log(res.message);
        }
      })
    );
  }

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} />
      <h1>Sign In</h1>

      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" id="username" />
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
          <button
            className="sign-in-button"
            onClick={() => {
              SendIdentifiers();
            }}>
            Sign In
          </button>
        </NavLink>
      </form>
    </section>
  );
};

export default Form;
