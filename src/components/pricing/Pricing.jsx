import React from "react";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="mt6 mh4">
      <div className="mv4 bg-white pa3 br3 shadow2">
        <strong>1. ROOM CHARGES </strong>
        <span>(exclusive of food, room accommodation only)</span>
        <div className="flex flex-wrap">
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Standard Room 1
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹2,000
            </div>
            <p>For Two Adults</p>
            <p>
              Extra<br></br>₹1500/Adult, ₹1000/Chilren
            </p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Standard Room 2
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹2,300
            </div>
            <p>For Two Adults</p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Deluxe Junior 1
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹3,000
            </div>
            <p>For Two Adults</p>
            <p className="green">Best Value Room</p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Deluxe Junior 2
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹3,300
            </div>
            <p>For Two Adults</p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Deluxe Senior 1
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹3,700
            </div>
            <p>For Two Adults</p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Deluxe Senior 2
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹4,000
            </div>
            <p>For Two Adults</p>
            <p className="blue">Best Recommended Room</p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Family Cottage
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹4,800
            </div>
            <p>For Two Adults</p>
          </article>
        </div>
        <em className="tc red">Note: ₹1,000 Extra For Extra Person In Room.</em>
      </div>
      <div className="mv4 bg-white pa3 br3 shadow2">
        <strong>2. GROUP ROOM and DORMITORY CHARGES </strong>
        <div className="flex flex-wrap">
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Basic Dormitory
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹600 Per Person
            </div>
            <p>(Mattresses + Linen. Non A/C)</p>
            <p>50 tax compulsory</p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Standard Dormitory
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹700 Per Person
            </div>
            <p>(Mattresses + Linen + Towels + A/C)</p>
            <p>30 tax compulsory</p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Deluxe Dormitory
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹800 Per Person
            </div>
            <p>(Beds, AC, LCD TV etc..)</p>
            <p>15 tax compulsory</p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Room Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>Deluxe Private Group Room
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹900 Per Person
            </div>
            <p>(Beds, AC, TV etc..)</p>
            <p>4 tax compulsory</p>
          </article>
        </div>
        <em className="tc red">
          NOTE: Food package compulsory in all dormitories.
        </em>
      </div>
      <div className="mv4 bg-white pa3 br3 shadow2">
        <strong>3. ROOM ADD-ON FOOD PACKAGE </strong>
        <span>(to be paid extra over Accommodation charges)</span>
        <div className="flex flex-wrap">
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>1 Day Package
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹800
            </div>
            <p>
              <strong>Includes</strong>
              <br></br>1 Breakfast, 1 Lunch, 1 Eve. Tea
            </p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>1½ Day Package
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹1,100
            </div>
            <p>
              <strong>Includes</strong>
              <br></br>2 Breakfasts, 1 Lunch, 1 Eve. Tea, 1 Dinner
            </p>
          </article>
          <article class="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <h3 className="bg-near-black ma0 white pa3">Pricing</h3>
            <div className="pv3">
              <strong>Type</strong>
              <br></br>2 Day Package
            </div>
            <div>
              <strong>Price</strong>
              <br></br>₹2,0200
            </div>
            <p>
              <strong>Includes</strong>
              <br></br>3 Breakfasts, 2 Lunches, 2 Eve. Teas, 2 Dinners
            </p>
          </article>
        </div>
        <em className="tc red">
          NOTE: All meals will need to be taken in the Buffet Area.
        </em>
      </div>
      <div>
        <strong>4. CONFERENCE RATES </strong>
        <br></br>Please call 9768129741/2 and discuss
      </div>
    </div>
  );
};

export default Pricing;
