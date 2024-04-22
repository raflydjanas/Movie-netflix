import { getMovieDetails } from "../Services/authservices";
import { Link, useParams } from "react-router-dom";
import MovieLayout from "../layout/home/MovieLayout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function WatchLaterPage() {
  const { id } = useParams();
  const movieId = useSelector((state) => state.movie.data);
  console.log(movieId);
  const [moviesData, setMoviesData] = useState([]);
  console.log({ moviesData });

  useEffect(() => {
    getMovieDetails().then((data) => {
      setMoviesData(data);
    });
  }, [movieId, moviesData]);

  return (
    <MovieLayout>
      {moviesData.length > 0 && movieId.length > 0 ? (
        <>
          {movieId.map((movie) => {
            const movieData = moviesData.find((m) => m.id === movie.id);

            return (
              <Link key={movieData.id} to={`/details/${id}`}>
                <div className="relative hover:scale-110 hover:z-10 lg:hover:scale-150 transition duration-300 p-2 lg:p-1">
                  <img src={movieData?.image?.medium} alt={movieData.name} className="w-[full] rounded-md" />
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 ease-in-out text-white flex flex-col items-start justify-center p-3">
                    <div className="mt-[10rem]">
                      <i className=" text-lg">{movieData.name}</i>
                      <i className="flex flex-wrap text-xs">{movieData.genres.join(" , ")}</i>
                      <i className=" text-sm">{movieData.language}</i>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1>Sorry data not found</h1>
        </div>
      )}
    </MovieLayout>
  );
}

export default WatchLaterPage;
