import React from "react";

const NewsItem = ({ myTitle, imageUrl, desc, link }) => {
  return (
    <a href={link}>
      <article className="post">
        <figure>
          <img src={imageUrl} alt="sasa" />
        </figure>
        <div className="info">
          <h3>{myTitle}</h3>
          <p>{desc}</p>

          <button>Read More</button>
        </div>
      </article>
    </a>
  );
};

export default NewsItem;
