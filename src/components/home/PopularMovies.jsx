import { useState, useEffect } from "react";
import MovieLayout from "../../layout/home/MovieLayout";
import { getPopularMovie } from "../../Services/authservices";
import PopularMovieList from "./PopularMovieList";
import CartSkeleton from "../Fragments/CartSkeleton";

function PopularMovie() {
  const [popularMovieas, setPopularMovieas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPopularMovie().then((data) => {
      setPopularMovieas(data);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MovieLayout>
      {isLoading && <CartSkeleton cards={12} />}
      {popularMovieas.map((movie) => (
        <PopularMovieList key={movie.id} movie={movie} id={movie.id} />
      ))}
    </MovieLayout>
  );
}

export default PopularMovie;
