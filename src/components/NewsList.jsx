import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import newsData from "./../data/news.json";
import axios from "axios";

const NewsList = () => {
  const [fetchedPosts, setFetchedPost] = useState([]);

  const fetchPosts = () =>
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setFetchedPost(res.data);
    });

  useEffect(() => {
    fetchPosts();
  }, []);

  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: "Hello 1",
  //     desc: "Hello desc",
  //   },
  //   {
  //     id: 2,
  //     title: "Hello 2",
  //     desc: "Hello desc",
  //   },
  //   {
  //     id: 3,
  //     title: "Hello 3",
  //     desc: "Hello desc",
  //   },
  // ]);
  // const [name, setName] = useState("");
  // let name = "Hari";

  // const changeName = () => {
  //   name = " Ramesh";
  // };
  // changeName();

  // console.log(newsData);
  return (
    <div className="newsList px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 bg-blue-200">
      {/* <h1>{name}</h1>
      <button onClick={() => setName("Test Name")}>Change Name</button> */}
      {/* {posts.map((item) => (
        <h1>{item.title}</h1>
      ))} */}

      {fetchedPosts.map((item) => (
        <NewsItem
          key={item.id}
          myTitle={item.title}
          desc={item.body}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default NewsList;
