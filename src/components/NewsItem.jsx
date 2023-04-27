import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ myTitle, desc, id }) => {
  return (
    <article className="post relative group bg-white hover:-translate-y-2 hover:rounded-md rounded-sm hover:shadow-xl transition-all duration-700  p-10">
      <Link to={`/post/${id}`}>
        {/* <figure><img src={imageUrl} alt="sasa" /></figure> */}
        <div className="info">
          <h3 className="group-hover:text-blue-600  text-2xl mb-5 font-bold">
            {myTitle}
          </h3>
          <p>{desc}</p>

          <span className="absolute top-0 right-0">Hari Bhusal</span>
          <button>Read More</button>
        </div>
      </Link>
    </article>
  );
};

export default NewsItem;
