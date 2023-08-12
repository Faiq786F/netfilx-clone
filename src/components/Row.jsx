import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'

const Row = ({ name, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  const slideLeft = ()=>{
    const slider = document.getElementById('slider' + rowId)

    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = ()=>{
    const slider = document.getElementById('slider' + rowId)

    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{name}</h2>
      <div className="relative flex items-center group">
        <MdArrowBackIosNew onClick={slideLeft} size={40} className="bg-white left-3 p-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        <div id={"slider" + rowId} className="w-full h-full relative overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <MdArrowForwardIos onClick={slideRight} size={40} className="bg-white right-3 p-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
      </div>
    </>
  );
};

export default Row;
