import React from "react";
import "./direction.css";

const Direction = () => {
  return (
    <div className="ph5">
      <h2 className="tc">Directions</h2>
      <div className="flex">
        <article class="center mw5 mw6-ns hidden ba ma4">
          <h3 class="f4 bg-near-black white mv0 pv2 ph3">By Road</h3>
          <div class="pa3 bt">
            <p class="f6 f5-ns lh-copy measure mv0">
              Left from the N.Highway at Dahisar leading to the railway crossing
              at Bhayandar.Further a left at Bhayandar police station proceeding
              towards Uttan-Pali village.
            </p>
          </div>
        </article>
        <article class="center mw5 mw6-ns hidden ba ma4">
          <h3 class="f4 bg-near-black white mv0 pv2 ph3">By Rail</h3>
          <div class="pa3 bt">
            <p class="f6 f5-ns lh-copy measure mv0">
              Byayandar station Then just 11 Kms. more to reach us via Public
              transport in the form of rickshaws, vans, mini buses and our
              private pick-up vehicles.
            </p>
          </div>
        </article>
        <article class="center mw5 mw6-ns hidden ba ma4">
          <h3 class="f4 bg-near-black white mv0 pv2 ph3">By Sea</h3>
          <div class="pa3 bt">
            <p class="f6 f5-ns lh-copy measure mv0">
              Ferry, from Gorai creek at Borivali gets you to Gorai village,
              where you can avail public transport to reach us quickly.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Direction;
