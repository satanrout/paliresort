import React from "react";
import "./amenities.css";
import pali_room from "../../images/pali_room.jpg";
import pali_senior from "../../images/pali_senior.png";

const Amenities = () => {
  return (
    <div className="mt6 ph5-ns ph2">
      <h3 className="tc mb3">Amenities</h3>
      <div className="flex amen_mo justify-between mb3">
        <div>
          <img src={pali_room} width="400px" alt="room" />
        </div>
        <p className="pa3-ns pa2 w-50-ns">
          Luxury and Comfort are personified in our 6 elegantly furnished
          cottages 8 rooms all air-conditioned with attached bath. Hotel
          provides state of art facility to their patrons. Every room has
          exclusive services.
        </p>
      </div>
      <div className="sar amen_mo mt3">
        <div>
          <img src={pali_senior} width="400px" alt="room" />
        </div>
        <p className="pa3-ns pa2 w-50-ns">
          <strong>Services at resort</strong>
          <br></br>
          room service, cable television connections with 4 music channels,
          direct dialling telephone, doctor on call and 24 hours hot/cold water,
          colour T.V. with in-house movie channel and live satellite
          transmission, front deek with sea view along with lush green lawn
          Business Centre, Banquet & Conference Facilities, Major credit cards
          accepted. <br></br>Among other facilities, The resort offers a well
          equipped Gym. and an outdoor Swimming Pool with another kids pool
          attached. resort also has dance floor and party lawns for party
          animals.
        </p>
      </div>
      <h3 className="tc">Room Interior</h3>
      <p className="w-50-ns pa2">
        Spacious, modern and comforting ,just the recipe for the guests tried
        after enjoying the resort facilities.We have 7 cottages and 40 rooms
        which gives you a wonderful seclusive experience. We have a celebration
        hall with a capacity of 1000 people , the ideal location for marriages
        and parties. Children's garden slides and a garden train, video games,
        bumper cars, indoor games and sports we have something for everyone. All
        our cottages come with colour TV, room service, and air conditioning.
        Our green gardens and party halls host banquets, parties and get
        together accompanied by all kinds of music brought to you by DJ's.
      </p>
      <p className="pa2">
        Outdoor sports like football, basketball and volleyball are entertained
        and indoor games like table tennis, carom etc... For nature lovers,
        there is beautiful flora and fauna all year round. The resort is
        enclosed within a tiny hill range. Pali beach resort has all the modern
        conveniences with a remote country flavour.
      </p>
      <strong className="pa2">We have the following facilities:</strong>
      <p className="pa2">
        1. A/C Cottages<br></br>
        2. Special vegetarian, Jain and non-veg cuisine<br></br>
        3. 3 Swimming pools<br></br>
        4. Large slides pool<br></br>
        5. Garden train<br></br>
        6. Bumper cars<br></br>
        7. Playground equipment<br></br>
        8. Outdoor games<br></br>- Football<br></br>- Volleyball<br></br>-
        Basketball <br></br>- Cricket<br></br>
        9. Indoor games<br></br>- Table tennis<br></br>- Carom<br></br>- Chess
        <br></br>
        10. Card room<br></br>
        11. Beach front<br></br>
        12. Conference room<br></br>
        13. Outdoor party lawns<br></br>
        14. Celebration /Reception hall<br></br>
        15. Video games<br></br>
        16. Kid rides<br></br>
        17. Training for swimming and games
      </p>
    </div>
  );
};

export default Amenities;
