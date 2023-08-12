import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState(true);

  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-full inline-block cursor-pointer p-2">
      <img
        className="h-full w-full"
        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute w-full h-full top-0 left-0 hover:bg-[rgba(0,0,0,0.7)] opacity-0 hover:opacity-100 text-white">
        <p className="text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>
        <p className="absolute w-full h-full top-4 left-4">
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
