import React from "react";
import "./AboutHero.css";
import cleanroom from "../../images/pali_cleanroom.png";
import children from "../../images/pali_children.jpg";
import nature from "../../images/pali_nature.jpg";

const AboutHero = () => {
  return (
    <div className="mt6 pa5 bg-white">
      <h2>About Us</h2>
      <div className="flex mv4 justify-between">
        <img src={cleanroom} width="450px" alt="beds" />
        <div className="ttc w-50">
          <h2>clean, beautiful and comfortable.</h2>
          <p>
            In Pali Beach Resort We have known for offering clean, beautiful and
            comfortable rooms for a resonable price. we are always looking to
            satisfy our customer and that makes us one of the best best beach
            resort in mumbai
          </p>
        </div>
      </div>
      <div className="flex mv4 flex-row-reverse justify-between">
        <img src={children} width="450" alt="fun" />
        <div className="ttc w-50">
          <h2>perfect for childrens</h2>
          <p>
            this resort is a heaven for kids. it has everything to enjoy the
            waterpark to the fullest.
          </p>
        </div>
      </div>
      <div className="flex mv4 justify-between">
        <img src={nature} width="450" alt="nature" />
        <div className="ttc w-50">
          <h2>enjoy the nature</h2>
          <p>you will find many place to enjoy the nature here.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
