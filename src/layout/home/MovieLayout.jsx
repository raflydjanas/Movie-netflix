import { useEffect, useState } from "react";
import { getMovie } from "../../Services/authservices";
import MovieList from "../../components/home/MovieList";

function AllMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <div className="w-full flex items-center justify-center mt-[3rem] lg:mt-[5rem]">
      <ul className="grid grid-cols-2 gap-1 lg:flex lg:flex-wrap lg:justify-center ">
        {movies.map((movie) => (
          <MovieList key={movie.id} movie={movie} id={movie.id} />
        ))}
      </ul>
    </div>
  );
}

export default AllMovie;
