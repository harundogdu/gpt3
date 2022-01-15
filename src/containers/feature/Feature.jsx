import React from "react";
import "./Feature.scss";
const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Improving end distrusts instantly",
      desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      id: 2,
      title: "Become the tended active",
      desc: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      id: 3,
      title: "Message or am nothing",
      desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      id: 4,
      title: "Really boy law county",
      desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  return (
    <div className="feature">
      <div className="feature__left">
        <h2>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="feature__right">
        <ul>
          {features.map(item =>(
              <li key={item.id}>
              <h6>{item.title}</h6>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feature;
