import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <h2 className="tc">Testimonials</h2>
      <div className="flex flex-wrap ph4">
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <h3 className="f5">Mr. Anil Shah (Chetana Publications)</h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70">
            I have been to many resorts in and around Mumbai but this is surely
            my best. The thing I liked most was the food.
          </p>
        </article>
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <h3 className="f5">Mr. Mangesh Mehta (Regular Guest)</h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70">
            Quite affectionate and outgoing. She loves to get chin scratches and
            will roll around on the floor waiting for you give her more of them.
          </p>
        </article>
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <h3 className="f5">Mr. Nimesh Gupta (Promark IND.)</h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70">
            We had a fantastic time in our 3 days at your Resort. The entire 500
            strong group enjoyed themselves tremendously. We will surely return
            again.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Testimonials;
