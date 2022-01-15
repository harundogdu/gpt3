import React from "react";
import "./Blog.scss";
import {
  BlogImage1,
  BlogImage2,
  BlogImage3,
  BlogImage4,
  BlogImage5,
} from "assets/export";

const Blog = () => {
  const blogItems = [
    {
      id: 1,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      src: BlogImage1,
      isActive: true,
    },
    {
      id: 2,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      src: BlogImage2,
      isActive: false,
    },
    {
      id: 3,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      src: BlogImage3,
      isActive: false,
    },
    {
      id: 4,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      src: BlogImage4,
      isActive: false,
    },
    {
      id: 5,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      src: BlogImage5,
      isActive: false,
    },
    {
      id: 6,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      date: "Sep 26, 2021",
      src: BlogImage1,
      isActive: false,
    },
  ];
  return (
    <div className="blog">
      <div className="blog__header">
        A lot is happening, <br /> We are blogging about it.
      </div>
      <div className="blog__container">
        {blogItems.map((item) => (
          <div
            className={`${
              item.isActive
                ? "blog__container__item active"
                : "blog__container__item"
            }`}
            key={item.id}
          >
            <div className="blog__container__item__image">
              <img src={item.src} alt="blog" />
            </div>
            <div className="blog__container__item__content">
              <div className="blog__container__item__content__date">
                {item.date}
              </div>
              <div className="blog__container__item__content__title">
                {item.title}
              </div>
              <div className="blog__container__item__content__more">
                Read Full Article
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
