import { getMovie } from "../../Services/authservices";
import { useState, useEffect } from "react";
import AllMovieList from "./MovieList";
import MovieLayout from "../../layout/home/MovieLayout";

function AllMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <MovieLayout>
      {movies.map((movie) => (
        <AllMovieList key={movie.id} movie={movie} id={movie.id} />
      ))}
    </MovieLayout>
  );
}

export default AllMovie;
