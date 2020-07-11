import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      {/* <div class="hide-child absolute ba">
        other
        <div class="child absolute ba">
          <div> Home </div>
          <div> about </div>
          <div> contacts </div>
          <div> Home </div>
        </div>
      </div> */}
      <nav className="fixed ph5 flex justify-between">
        <img src="logo.png" width="128" alt="logo" />
        <ul className="list pl0 flex items-center">
          <li>Home</li>
          <li>Packages</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Photographs</li>
          <li>Rates</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
