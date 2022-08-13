import React, { useState } from "react";
import logo from "/assets/edited-awa-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { navTitle } from "../../utility/nav-title";
import "./navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <div className="header">
      <div className="nav-logo">
        <Link to='/'>
          <img src={logo} alt="awa-logo" className="awa-logo" />
        </Link>
        <h2 className="header-name">abdulwahab abbas</h2>
      </div>
      <nav className={menuClicked ? "nav-space active" : "nav-space"}>
        {navTitle.map((title, index) => (
          <Link
            key={index}
            to={`/${title}`}
            onClick={() => {
              setActiveLink(index);
              setMenuClicked(false);
            }}
            className={index === activeLink ? "active link" : "link"}
          >
            {title}
          </Link>
        ))}
        <button className="intro-contact">Hire me Today</button>
      </nav>
      <span className="icon" onClick={() => setMenuClicked(!menuClicked)}>
        {menuClicked ? (
          <FontAwesomeIcon icon={faTimes} className="hamburger" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="hamburger" />
        )}
      </span>
    </div>
  );
}

export default Navbar;
