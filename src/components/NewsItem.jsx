import React from "react";

const NewsItem = ({ myTitle, desc }) => {
  return (
    <a href="/">
      <article className="post">
        {/* <figure><img src={imageUrl} alt="sasa" /></figure> */}
        <div className="info">
          <h3>{myTitle.slice(0, 10)}...</h3>
          <p>{desc.slice(0, 50)}...</p>

          <button>Read More</button>
        </div>
      </article>
    </a>
  );
};

export default NewsItem;
