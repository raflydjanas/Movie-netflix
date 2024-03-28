import { useState, useEffect } from "react";
import MovieLayout from "../../layout/home/MovieLayout";
import { getPopularMovie } from "../../Services/authservices";
import PopularMovie from "./PopularMovie";

function PouplarList() {
  const [popularMovieas, setPopularMovieas] = useState([]);

  useEffect(() => {
    getPopularMovie().then((show) => {
      setPopularMovieas(show);
    });
  }, []);
  console.log(popularMovieas);
  return (
    <MovieLayout>
      {popularMovieas.map((movie) => (
        <PopularMovie key={movie.id} movie={movie} id={movie.id} />
      ))}
    </MovieLayout>
  );
}

export default PouplarList;
