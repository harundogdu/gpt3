import React from "react";
import "./WGPT3.scss";
const WGPT3 = () => {
  const featureItems = [
    {
      id: 1,
      title: "Chatbots",
      description:
        "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
      id: 2,
      title: "Knowledgebase",
      description:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments be.",
    },
    {
      id: 3,
      title: "Education",
      description:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments be.",
    },
  ];
  return (
    <div className="wgpt3" id="what-is-gpt">
      <div className="wgpt3__header">
        <div className="wgpt3__header__title">
          <h3>What is GPT-3</h3>
        </div>
        <div className="wgpt3__header__description">
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>
      <div className="wgpt3__body">
        <div className="wgpt3__body__title">
          <h3>The possibilities are beyond your imagination</h3>
        </div>
        <div className="wgpt3__body__slogan">
          <a href="!#">Explore The Library</a>
        </div>
      </div>
      <div className="wgpt3__footer">
        <ul>
          {featureItems.map((item) => (
            <li key={item.id}>
              <h5 className="wgpt3__footer__title">{item.title}</h5>
              <p className="wgpt3__footer__desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WGPT3;
