import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      navClass: "active",
    };
  }

  menu = () => {
    this.setState({ navClass: "notActive" });
  };

  removeOverlay = () => {
    this.setState({ navClass: "active" });
  };

  render() {
    return (
      <header id="header">
        <nav className="fixed ph5-ns flex items-center justify-between">
          <div>
            <img src="logo.png" width="128" className="logo" alt="logo" />
          </div>
          <div className={`nav_mb ${this.state.navClass}`}>
            <ul className="list pl0 flex items-center">
              <li onClick={this.removeOverlay}>
                <NavLink
                  onClick={this.removeOverlay}
                  exact={true}
                  activeClassName="red"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li onClick={this.removeOverlay}>
                <NavLink exact={true} activeClassName="red" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li onClick={this.removeOverlay}>
                <NavLink exact={true} activeClassName="red" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li onClick={this.removeOverlay}>
                <NavLink exact={true} activeClassName="red" to="/about">
                  About
                </NavLink>
              </li>
              <li onClick={this.removeOverlay}>
                <NavLink exact={true} activeClassName="red" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li onClick={this.removeOverlay} className="cross">
                <div className="rotatediv1"></div>
                <div className="rotatediv2"></div>
              </li>
            </ul>
          </div>
          <div onClick={this.menu} className="ham">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
