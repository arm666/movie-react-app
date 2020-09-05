import React, { useEffect, useState } from "react";
import "./moviebar.css";
import MovieCard from "./../MovieCard";
import useGetMovies from "./../hooks/getMovies";

function HomeMovieBar({ url }) {
  // stores movies
  const { movieList } = useGetMovies(url);
  return (
    <div className="moviesList">
      {movieList != "undefined" &&
        movieList.map((val, index) => (
          <div key={"movieCard" + index}>
            <MovieCard details={val} />
          </div>
        ))}
    </div>
  );
}

export default HomeMovieBar;
