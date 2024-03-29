import { getMovie } from "../../Services/authservices";
import { useState, useEffect } from "react";
import AllMovieList from "./MovieList";
import MovieLayout from "../../layout/home/MovieLayout";
import CartSkeleton from "../Fragments/CartSkeleton";

function AllMovie() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovie().then((data) => {
      setMovies(data);
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
      {isLoading && <CartSkeleton cards={24} />}
      {!isLoading && movies.map((movie) => <AllMovieList key={movie.id} movie={movie} id={movie.id} />)}
    </MovieLayout>
  );
}

export default AllMovie;
