import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
/* func */
const Navbar = () => {
  const menuItem = [
    {
      id: 1,
      name: "Home",
      href: "#home",
    },
    {
      id: 2,
      name: "What is GPT?",
      href: "#what-is-gpt",
    },
    {
      id: 3,
      name: "Open AI",
      href: "#open-ai",
    },
    {
      id: 4,
      name: "Case Studies",
      href: "#case-studies",
    },
    {
      id: 5,
      name: "Library",
      href: "#library",
    },
  ];
  return (
    <div className="navbar" id="home">
      <div className="navbar__navbar-logo">
        <img src={Logo} alt="Logo_Image" />
      </div>
      <div className="navbar__navbar-menu">
        <ul>
          {menuItem.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar__navbar-btn_container">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;