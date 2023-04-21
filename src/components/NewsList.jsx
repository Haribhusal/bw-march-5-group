import React from "react";
import NewsItem from "./NewsItem";
import newsData from "./../data/news.json";

const NewsList = () => {
  console.log(newsData);
  return (
    <div className="newsList">
      {newsData.map((item) => (
        <NewsItem
          myTitle={item.title}
          imageUrl={item.imageLink}
          desc={item.desc}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default NewsList;
