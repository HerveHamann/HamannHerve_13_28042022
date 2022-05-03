import React from "react";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <div>
      <nav className="main-nav">
        <NavLink to="/">
          <img src={argentBankLogo} alt="Logo Argent Bank" />
        </NavLink>
        {user ? (
          <div className="main-nav-item">
            <NavLink to="/user">
              <div className="underline-text">
                <FontAwesomeIcon icon={faUserCircle} />
                {user}
              </div>
            </NavLink>
            <NavLink to="/">
              <div className="underline-text">
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sign Out
              </div>
            </NavLink>
          </div>
        ) : (
          <NavLink to="/sign-in">
            <div className="main-nav-item sign-in underline-text">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </div>
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
