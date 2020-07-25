import React from "react";
import "./Header.css";
import Logo from "../../img/google_logo.png";
import getLinks from "./header_links";
import Search from "../search/Search.js";

function Header(props) {
  const links = getLinks();
  return (
    <div className="Header">
      <div className="header-content">
        <div className="header-left">
          <img src={Logo} alt="logo" className="logo" />
          <div className="header-main">
            <Search search={props.search} />
            <nav>
              <ul>
                {links.map((link, index) => {
                  return (
                    <li className={link.active ? "active" : null} key={index}>
                      {link.name}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-icons">
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
