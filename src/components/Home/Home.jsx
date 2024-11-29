import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

let dummyArr = [1, 2, 3, 4];

function Home() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data.length === 0) {
    return (
      <>
        {dummyArr.map(() => {
          return <Loading />;
        })}
      </>
    );
  }

  const colors = ["#ff7e5f", "#feb47b", "#86a8e7", "#91eae4"];
  return (
    <>
      <div className="post-boxes">
        {data.map((post, index) => {
          return (
            <div key={post.id}>
            <Link to={`${post.id}`} className="home-link">
              <div
                
                className="post-box"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <h2>
                  {" "}
                  {post.id} - {post.title}{" "}
                </h2>
                <p>{post.body}</p>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
