import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero flex items-center justify-end ph5">
      <form
        className="form grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5"
        action="mailto:satyaranjanrout81@gmail.com"
        method="post"
        type="text/plain"
      >
        <div className="ma3 flex">
          <span className="flex flex-column">
            <label htmlFor="check in">Check in</label>
            <input
              className="check"
              name="check in"
              type="date"
              htmlFor="check in"
            />
          </span>
          <span className="flex flex-column">
            <label htmlFor="check out">Check out</label>
            <input
              className="check"
              name="check out"
              type="date"
              htmlFor="check out"
            />
          </span>
        </div>
        <div className="ma3 flex">
          <span className="span1 flex flex-column">
            <label htmlFor="quantity">Adults</label>
            <input className="number" type="number" name="children" step="1" />
          </span>
          <span className="span1 flex flex-column">
            <label htmlFor="quantity-children">Children</label>
            <input className="number" type="number" name="children" step="1" />
          </span>
        </div>
        <div className="ma3 flex flex-column">
          <label htmlFor="room">Room Type</label>
          <select className="room" name="room type">
            <option value="Select Room Type">Select Room Type</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Luxury Double Room">Luxury Double Room</option>
          </select>
        </div>
        <div className="ma3 flex flex-column">
          <label htmlFor="name">Name</label>
          <input className="name" name="name" type="text" htmlFor="name" />
        </div>
        <div className="ma3 flex flex-column">
          <label htmlFor="email">Email</label>
          <input className="email" type="email" name="email" />
        </div>
        <div>
          <input className="btn" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Hero;
