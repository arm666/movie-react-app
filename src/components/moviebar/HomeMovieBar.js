import React from "react";
import "./moviebar.css";
import MovieCard from "./../MovieCard";
import useGetMovies from "./../hooks/getMovies";
import { NavLink } from "react-router-dom";

function HomeMovieBar({ url }) {
  // stores movies
  const { movieList } = useGetMovies(url);
  return (
    <div className="moviesList">
      {movieList !== "undefined" &&
        movieList.map((val, index) => (
          <NavLink
            to={"/movie-react-app/movie/" + val.id}
            key={"movieCard" + index}
          >
            <MovieCard details={val} />
          </NavLink>
        ))}
    </div>
  );
}

export default HomeMovieBar;
