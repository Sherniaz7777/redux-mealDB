import React from "react";
import "../components/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="main">
      <div className="Container">
        <nav>
          <NavLink to={'/'}>
            <div className="logotip">
              <img
                src="https://www.themealdb.com/images/logo-small.png"
                alt=""
              />
            </div>
          </NavLink>

          <div className="Home-search">
            <NavLink className={"NavLink"} to={"/"}>
              <button>Home</button>
            </NavLink>

            <input type="text" placeholder="Search" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
