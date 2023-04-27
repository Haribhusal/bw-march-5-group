import axios from "axios";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const Singlepost = () => {
  const [loader, setLoader] = useState(true);
  const [singlePostData, setSinglePostData] = useState([]);
  const { id } = useParams();

  const getSinglePostData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setSinglePostData(res.data);
        setLoader(false);
        // setSinglePostData;
      });
  };

  useEffect(() => {
    getSinglePostData();
  }, []);
  return (
    <div className="p-10 h-screen bg-blue-200 flex justify-center">
      {loader ? (
        <span className="h-20 w-20 bg-red-400 rounded-lg animate-ping"></span>
      ) : (
        <article className="bg-white p-10">
          <h1>{singlePostData.title}</h1>
          <p>{singlePostData.body}</p>
        </article>
      )}
    </div>
  );
};

export default Singlepost;
