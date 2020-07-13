import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero flex items-center justify-end ph5-ns">
      <form
        className="hero_form form br3 pa3-ns ma2-ns dib bw2 shadow-5"
        action="mailto:satyaranjanrout81@gmail.com?"
        method="post"
        encType="text/plain"
      >
        <div className="ma3 flex">
          <span className="flex span1 flex-column">
            <label>Check in</label>
            <input
              className="check br-pill ba ph2"
              name="check in"
              type="date"
            />
          </span>
          <span className="flex span1 flex-column">
            <label>Check out</label>
            <input
              className="check br-pill ba ph2"
              name="check out"
              type="date"
            />
          </span>
        </div>
        <div className="ma3 flex">
          <span className="span1 flex flex-column">
            <label>Adults</label>
            <input
              className="br-pill ba ph2 number"
              type="number"
              name="children"
              step="1"
            />
          </span>
          <span className="span1 flex flex-column">
            <label>Children</label>
            <input
              className="br-pill ba ph2 number"
              type="number"
              name="children"
              step="1"
            />
          </span>
        </div>
        <div className="ma3 flex flex-column">
          <label>Room Type</label>
          <select className="room br-pill ba ph2" name="room type">
            <option value="Select Room Type">Select Room Type</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
            <option value="Luxury Double Room">Luxury Double Room</option>
          </select>
        </div>
        <div className="ma3 flex flex-column">
          <label>Name</label>
          <input className="br-pill ba ph2 name" name="name" type="text" />
        </div>
        <div className="ma3 flex flex-column">
          <label>Email</label>
          <input className="br-pill ba ph2 email" type="email" name="email" />
        </div>
        <div>
          <input
            className="btn ml3 f6 grow no-underline br-pill ba ph2 mb2 dib black"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default Hero;
