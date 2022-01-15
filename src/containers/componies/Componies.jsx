import React from "react";
import "./Componies.scss";
import GoogleImage from "assets/google.png";
import SlackImage from "assets/slack.png";
import AtlassianImage from "assets/atlassian.png";
import DropBoxImage from "assets/dropbox.png";
import ShopifyImage from "assets/shopify.png";
const Componies = () => {
  const brandsItems = [
    {
      id: 1,
      href: "#",
      alt: "GoogleImage",
      src: GoogleImage ,
    },
    {
      id: 2,
      href: "#",
      alt: "SlackImage",
      src: SlackImage ,
    },
    {
      id: 3,
      href: "#",
      alt: "AtlassianImage",
      src:  AtlassianImage ,
    },
    {
      id: 4,
      href: "#",
      alt: "DropBoxImage",
      src: DropBoxImage ,
    },
    {
      id: 5,
      href: "#",
      alt: "ShopifyImage",
      src: ShopifyImage ,
    },
  ];
  return (
    <div className="componies">
      <ul>
        {brandsItems.map(item => (
          <li key={item.id}>
              <a href={item.href}>
                  <img alt={item.alt} src={item.src} />
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Componies;
