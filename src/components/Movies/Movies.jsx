import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Movies.css";
import { Link } from "react-router-dom";

function Movies() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/all/day", {
        params: {
          language: "en-Us",
        },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzRiODYxYWNlN2FiNmVlNTg0NjQxMjA5MzkzOTliZiIsIm5iZiI6MTczMDI3NTQ1OC4zNTA5NTkzLCJzdWIiOiI2NzIxZTc5NDE4MGIwYTVhYjkwYzE3NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HXYGg8axRSCubn5Yn_z4P9E-1wmyqC6sbohLROddzXI",
        },
      })
      .then((result) => {
        console.log(result);
        setData(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="movie-section">
        <div className="movies-container">
          {data.map((obj, index) => {
            return (
              <div key={obj.id}>
                <Link to={`/movie/${obj.id}`} className="movie-link">
                  <div className="movie-item">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                      alt=""
                    />
                    <h1>{obj.title ? obj.title : "no title"}</h1>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Movies;
