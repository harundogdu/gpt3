import React from "react";
import "./Footer.scss";
import LogoImage from "assets/logo.svg";
const Footer = () => {
  const FooterListItem = [
    {
      id: 1,
      href: "#",
      title: "Links",
      p1: "Overons",
      p2: "Social Media",
      p3: "Counters",
      p4: "Contact",
    },
    {
      id: 2,
      href: "#",
      title: "Company",
      p1: "Terms & Conditions",
      p2: "Privacy Policy",
      p3: "Contact",
      p4: "",
    },
    {
      id: 3,
      href: "#",
      title: "Get in touch",
      p1: "Crechterwoord K12 182 DK Alknjkcb",
      p2: "085-132567",
      p3: "info@payme.net",
      p4: "",
    },
  ];
  return (
    <div className="footer">
      <div className="footer__top">
        <h1>
          Do you want to step in to the <br /> future before others
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__left">
          <img src={LogoImage} alt="LogoImage" />
          <span>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</span>
        </div>
        <div className="footer__bottom__right">
          {FooterListItem.map((item) => (
            <ul>
              <li>
                <a href={item.href}>
                  <h6>{item.title}</h6>
                </a>

                <a href={item.href}>
                  <p> {item.p1} </p>
                </a>

                <a href={item.href}>
                  <p> {item.p2} </p>
                </a>

                <a href={item.href}>
                  <p>{item.p3}</p>
                </a>

                <a href={item.href}>
                  <p>{item.p4}</p>
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
