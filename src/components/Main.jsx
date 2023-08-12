import axios from "axios";
import React, { useEffect, useState } from "react";
import req_URLS from "../req";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(req_URLS.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);
  return (
    <div className="w-full h-[70vh] text-white">
      {movie && (
        <>
          <div className="w-full h-full">
            <div className="absolute w-full h-[70vh] bg-gradient-to-tr from-black"></div>
            <img
              className="w-full h-full object-cover object-center"
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt={movie?.original_title}
            />
          </div>

          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
            <div className="my-4">
              <button className="border border-gray-300 bg-gray-300 px-5 py2 text-black">
                Play
              </button>
              <button className="border border-gray-300 px-5 py2 text-white ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-300 my-1">
              Released: {movie?.release_date}
            </p>
            <p className="w-full md:w-[75%] lg:w-[50%] xl:w-[35%]">
              {movie?.overview}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
