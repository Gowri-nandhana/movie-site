import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PostDetails.css'

function PostDetails() {
  let [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="title-box">
      <h1>{data.title}</h1>
    </div>
  );
}

export default PostDetails;
