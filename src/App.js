import react from "react";
import React from "react";
import "./styles.css";
import getMovies from "./data/getMovies";

import { useState, useEffect } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  //Use data/getMovies.js to load data
  //Show loader until the data is loaded

  //Show list of movies
  //Movie Name, List of Genres (Comma separated)

  //Implement search on name of movie
  //Implement filter based on genres

  /* Filter results
    // Results should show if both search and genre are matching
    // Optional: Highlight the matching part with the search key
  */

  useEffect(() => {
    getMovies()
      .then((json) => {
        setMovies(json.movies);
        setList(json.movies);
        setGenres(json.genres);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const movieChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    const match = value.toLowerCase();
    const filteredList = movies.filter((item) =>
      item.title.toLowerCase().includes(match)
    );
    setList(filteredList);
  };

  const getGenres = (arr) => {
    return arr.join(",");
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Movie"
        value={search}
        onChange={movieChange}
        id="movie"
      />
      <select>
        <option value="">All Genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      {loading && <div>Loading.... </div>}
      {!loading &&
        list != [] &&
        list.map((item, index) => {
          return (
            <div key={index}>
              <strong>{item.title}</strong> — {getGenres(item.genres)}
            </div>
          );
        })}
    </div>
  );
}
