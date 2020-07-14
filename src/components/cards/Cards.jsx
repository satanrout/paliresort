import React from "react";
import "./cards.css";
import pali_delux from "../../images/pali_delux.webp";
import pali_entrance from "../../images/pali_entrance.webp";
import pali_waterpark from "../../images/pali_waterpark.webp";
import pali_senior from "../../images/pali_senior.webp";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: pali_delux,
      imageUrl: {
        first: pali_waterpark,
        second: pali_senior,
        third: pali_entrance,
        fourth: pali_delux,
      },
    };
  }

  image1 = () => {
    this.setState({
      currentImage: this.state.imageUrl.first,
    });
  };
  image2 = () => {
    this.setState({
      currentImage: this.state.imageUrl.second,
    });
  };
  image3 = () => {
    this.setState({
      currentImage: this.state.imageUrl.third,
    });
  };
  image4 = () => {
    this.setState({
      currentImage: this.state.imageUrl.fourth,
    });
  };

  render() {
    return (
      <div className="flex ph5-ns ph1 card-size justify-between">
        <div className="img mr3">
          <img src={this.state.currentImage} alt="accorditaion" />
        </div>
        <div className="text flex items-center">
          <ul className="list">
            <li onClick={this.image1} className="pointer bg-white grey card-li">
              Enjoy Your Day With Our Water Park.
            </li>
            <li onClick={this.image2} className="pointer bg-white grey card-li">
              Take a Break And Chill.
            </li>
            <li onClick={this.image3} className="pointer bg-white grey card-li">
              Entrance Of Pali Beach Resort.
            </li>
            <li onClick={this.image4} className="pointer bg-white grey card-li">
              Perfect For Seniors.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cards;
