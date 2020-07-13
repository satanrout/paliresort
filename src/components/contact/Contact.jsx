import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="pa4 black-80 ma6-ns mt6 ">
      <form
        action="mailto:satyaranjanrout81@gmail.com"
        method="post"
        type="text/plain"
        className="measure center"
      >
        <fieldset className="ba b--transparent ph0 mh0" />
        <legend className="f4 fw6 ph0 mh0 contact">Contact Us</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">
            Email
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="email"
            name="email-address"
            id="email-address"
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="name">
            Name
          </label>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="name"
            id="password"
          />
        </div>
        <div>
          <label htmlFor="comment" className="f6 b db mb2">
            Comments
          </label>
          <textarea
            id="comment"
            name="comment"
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            aria-describedby="comment-desc"
          ></textarea>
        </div>
        <div className="">
          <input
            className="b mt2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
