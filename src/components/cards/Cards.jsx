import React from "react";
import "./cards.css";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: "https://via.placeholder.com/150",
      imageUrl: {
        first: "https://via.placeholder.com/180",
        second: "https://via.placeholder.com/160",
        third: "https://via.placeholder.com/140",
        fourth: "https://via.placeholder.com/150",
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
      <div className="flex ph5 card-size justify-between">
        <img src={this.state.currentImage} alt="accorditaion" />
        <div>
          <ul className="list pl0">
            <li onClick={this.image1} className="bg-white grey card-li">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li onClick={this.image2} className="bg-white grey card-li">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li onClick={this.image3} className="bg-white grey card-li">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li onClick={this.image4} className="bg-white grey card-li">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cards;
