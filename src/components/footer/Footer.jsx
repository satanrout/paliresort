import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ph5-ns bg-near-black white">
      <div className="flex footer_mo">
        <div className="flex1">
          <h5 className="red">Site Adress:</h5>
          <div>Pali Chowk Road,</div>
          <div>Uttan, Bhayandar(W),</div>
          <div>Thane = 401106.</div>
          <div>Landline: 28452357/28452358</div>
        </div>
        <div className="flex1">
          <h5 className="red">Booking Office:</h5>
          <div>117, 2nd Floor, Raghuleela Mall,</div>
          <div>UPoisur, Kandivali (W),</div>
          <div>Mumbai - 400067.</div>
          <div>Mobile : 9768129741/42</div>
        </div>
        <div className="flex1">
          <h5 className="red">Head Office:</h5>
          <div>102, 1st Floor, Star Palace Bldg,</div>
          <div>Station Road, Near Santok Cinema,</div>
          <div>Bhayandar(W), Thane - 401101.</div>
          <div>Landline : 28189340</div>
          <div>Fax : 28191338</div>
        </div>
        <div className="flex1">
          <h5 className="red">Sitemap</h5>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/picnic">One Day Picnic</Link>
            </li>
            <li>
              <Link to="/amenities">Amenities</Link>
            </li>
          </ol>
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
