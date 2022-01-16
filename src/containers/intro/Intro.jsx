import React from "react";
import "./Intro.scss";
import PossibilityImage from "assets/possibility.png";
const Intro = () => {
  return (
    <div className="intro" id="case-studies">
      <div className="intro__left">
        <img src={PossibilityImage} alt="possibility" />
      </div>
      <div className="intro__right">
        <h4>Request Early Access to Get Started</h4>
        <h2>The possibilities are beyond your imagination</h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  );
};

export default Intro;
