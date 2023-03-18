import React, { useState } from "react";
import { useEffect } from "react";
import "./MoviesHub.css";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e37a86d6a2841832f55e125b53024051&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&query="`;

const MoviesHub = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return (
    <div className="movies-hub-body bg-[#22254b] font['Poppins'] m-0">
      <header className="bg-[#373b69] p-[1rem] flex justify-center">
        <form id="form" onSubmit={handleOnSubmit}>
          <input
            type="text"
            id="search"
            className="search bg-transparent rounded-[50px] text-[1rem] py-[0.5rem] px-[1rem] text-white placeholder:text-[#7378c5] focus:outline-none focus:bg-[#22254b]"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>

      <main id="main" className="flex flex-wrap items-center justify-center">
        {movies.map((movie, index) => (
          <div
            className="movie w-[300px] m-[1rem] bg-[#373b69] relative overflow-hidden rounded-[3px]"
            key={index}
          >
            <img
              className="w-full h-[450px] object-cover md:h-[250px]"
              src={
                movie.poster_path
                  ? IMG_PATH + movie.poster_path
                  : "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80"
              }
              alt={movie.title}
            />
            <div className="movie-info text-[#eee] flex items-center justify-between tracking-[0.5px] px-[1rem] pt-[0.5rem] pb-[1rem]">
              <h3 className="mt-0">{movie.original_title}</h3>
              <span
                className={`bg-[#22254b] py-[0.25rem] px-[0.5rem] rounded-[3px] font-bold ${setVoteClass(
                  movie.vote_average
                )}`}
              >
                {movie.vote_average}
              </span>
            </div>
            <div className="overview bg-white p-[2rem] absolute left-0 bottom-0 right-0 max-h-full">
              <h3>Overview</h3>
              {movie.overview}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MoviesHub;
