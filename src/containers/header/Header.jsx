import React from "react";
import "./Header.scss";
import mainAIImage from "assets/ai.png";
import peopleImage from "assets/people.png";
/* funct */
const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content__title">
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <div className="header__content__description">
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div className="header__content__sendEmailBox">
          <input type="email" placeholder="Enter Your Email Address.." />
          <button>Get Started</button>
        </div>
        <div className="header__content__testimonials">
          <img src={peopleImage} alt="peopleImage" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <div className="header__mainImage">
        <img src={mainAIImage} alt="mainImage" />
      </div>
    </div>
  );
};

export default Header;
