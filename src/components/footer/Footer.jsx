import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="ph5 bg-near-black white">
      <div className="flex">
        <div className="flex1">
          <h3 className="red">Address</h3>
          <p>46/2, Near Showroom, Maharastra, Mumbai-400001.</p>
        </div>
        <div className="flex1">
          <h3 className="red">Phone</h3>
          <p>
            5643535363636<br></br>3646464567
          </p>
        </div>
        <div className="flex1">
          <h3 className="red">Email</h3>
          <p>username@email.com</p>
        </div>
      </div>
      <h5 className="tc pb3 mb0">
        © Copyright Pali Beach Resort {new Date().getFullYear()}. All right
        reserved.
      </h5>
    </footer>
  );
};

export default Footer;
