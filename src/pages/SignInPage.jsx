import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrUpdateToken, resetToken } from "../features/getToken";
import { selectToken } from "../utils/selectors";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const identifiers = { email: userEmail, password: userPassword };

  useEffect(() => {
    if (token.data?.status === 200) navigate("/user");
    if (token.data?.status === 400) {
      alert(token.data.message);
      dispatch(resetToken());
    }
  }, [token, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchOrUpdateToken(identifiers));
  };

  return (
    <div className="signpage">
      <Header />
      <div className="main">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
