import { useState, useEffect } from "react";
import MovieLayout from "../../layout/home/MovieLayout";
import { getPopularMovie } from "../../Services/authservices";
import PopularMovieList from "./PopularMovieList";

function PopularMovie() {
  const [popularMovieas, setPopularMovieas] = useState([]);

  useEffect(() => {
    getPopularMovie().then((data) => {
      setPopularMovieas(data);
    });
  }, []);

  return (
    <MovieLayout>
      {popularMovieas.map((movie) => (
        <PopularMovieList key={movie.id} movie={movie} id={movie.id} />
      ))}
    </MovieLayout>
  );
}

export default PopularMovie;
