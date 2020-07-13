import React from "react";
import "./pricing.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="mt6 mh4-ns">
      <div className="mv4 bg-white pa3 br3 shadow2">
        <strong>1. ROOM CHARGES </strong>
        <span>(exclusive of food, room accommodation only)</span>
        <div className="flex flex-wrap">
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
          <article className="br2 tc ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
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
      <div className="pv2 br2 bg-white mv2 ph3">
        <strong>4. CONFERENCE RATES </strong>
        <br></br>Please call 9768129741/2 and discuss
      </div>
      <div className="pv2 br2 bg-white mv2 ph3">
        <strong>5. ONE DAY PICNIC RATES </strong>
        <br></br>Please <Link to="picnic">click here</Link> to know more about 1
        day picnic in our resort in Mumbai
      </div>
      <div className="pv2 br2 bg-white mv2 ph3">
        <strong>
          6. BAR MENU :{" "}
          <a href="bar_menu.png" target="blank">
            Click here
          </a>
          <br />
          &nbsp; &nbsp; FOOD MENU : Click here{" "}
        </strong>
      </div>
      <div className="pv2 br2 bg-white mv2 ph3">
        <strong>7. RESERVATIONS</strong>
        <p>
          All bookings made via phone are on a best effort basis. We reserve
          rooms for you.It is, however,{" "}
          <strong>'guaranteed' ONLY if paid 100% in Full</strong> OR if guest
          checks in by 11 a.m.
        </p>
        <p>
          Deposit money into our Bank Account by Online Transfer OR by visiting
          a local ICICI branch and making a cash deposit
        </p>
        <div className="w-70">
          <div className="flex">
            <span>Bank Name</span>
            <span>ICICI Bank</span>
          </div>
          <div className="flex">
            <span>Account Name</span>
            <span>
              <strong>Pali Beach Resort and Water Park</strong>
            </span>
          </div>
          <div className="flex">
            <span>Account NO</span>
            <span>
              <strong>0018 050 13253</strong>
            </span>
          </div>
          <div className="flex">
            <span>IFSC Code</span>
            <span>ICIC0000018</span>
          </div>
          <div className="flex">
            After deposit or on-line transfer kindly call the Reception on
            022-28452357/8, 9029090808 and inform with details, so we can
            confirm the receipt of advance. Also IMPORTANTLY, please carry your
            deposit slip or the on-line transfer's transaction copy
          </div>
        </div>
        <div className="mt4">
          <span>Please note:</span>
          <ol>
            <li>
              Check in 11.00 am and Check Out 10.00 a.m. (Sun checkout 9 am)
            </li>
            <li>All rooms are A/C unless mentioned</li>
            <li>Room guests can use Water Park complimentary</li>
            <li>
              1 Mineral Water Bottle, Morning Tea/Coffee complimentary per room
              night
            </li>
            <li>Rates inclusive of Luxury Tax</li>
            <li>Members get discounts on Rooms, Food & Beverages</li>
            <li>Rooms once booked cannot be cancelled.</li>
            <li>
              Any Person / Group found not following the rules will be asked to
              leave
            </li>
            <li>
              These rates are subject to change without prior
              notice.Specifically on national holidays & festivals
            </li>
            <li>
              All decisions and issues will be decided by the resort management
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
