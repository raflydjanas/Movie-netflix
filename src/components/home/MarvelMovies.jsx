import { useState, useEffect } from "react";
import { getMarvelMovie } from "../../Services/marvelMovies";
import MovieLayout from "../../layout/home/MovieLayout";
import MarvelList from "./MarvelList";

function MarvelMovies() {
  const [marvel, setMarvel] = useState([]);
  useEffect(() => {
    getMarvelMovie().then((data) => {
      setMarvel(data);
    });
  }, []);

  return (
    <MovieLayout>
      {marvel.map((movie) => (
        <MarvelList key={movie.imdbID} movie={movie} />
      ))}
    </MovieLayout>
  );
}

export default MarvelMovies;
