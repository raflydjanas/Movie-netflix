import { getMovie } from "../../Services/authservices";
import { useState, useEffect } from "react";
import AllMovieList from "./MovieList";
import MovieLayout from "../../layout/home/MovieLayout";
import CartSkeleton from "../Fragments/CartSkeleton";
import FeatureButton from "./FeatureButton";

function AllMovie() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 15;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    getMovie(limit, offset)
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data]);
        setIsLoading(false);
        setOffset((prevOffset) => prevOffset + limit);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      });
  };

  const handleLoadMore = () => {
    fetchData();
  };

  return (
    <>
      <MovieLayout>
        {isLoading && <CartSkeleton cards={24} />}
        {!isLoading && movies.map((movie) => <AllMovieList key={movie.id} movie={movie} id={movie.id} />)}
      </MovieLayout>
      <FeatureButton />
      {movies.length > 0 && (
        <div className="flex items-center justify-center">
          <button onClick={handleLoadMore} className="w-[10rem] lg:w-[15rem]  bg-red-700 hover:bg-red-800 mb-[6rem] mt-[2rem] py-2 px-3  rounded-md">
            Show More v
          </button>
        </div>
      )}
    </>
  );
}

export default AllMovie;
