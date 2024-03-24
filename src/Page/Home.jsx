import { useEffect, useState } from "react";
import { getMovie } from "../Services/authservices";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie().then((data) => {
      setMovies(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold underline">Movie</h1>
      <ul className="flex flex-wrap">
        {movies.map((movie) => (
          <li key={movie.id}>
            <div>
              <p>{movie.name}</p>
              <p>{movie.genres.slice(1, 3).join(", ")}</p>
              <p>{movie.language}</p>
            </div>
            <img src={movie.image.medium} alt={movie.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
