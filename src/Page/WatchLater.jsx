import { Link } from "react-router-dom";
import MovieLayout from "../layout/home/MovieLayout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdLocalMovies } from "react-icons/md";
import axios from "axios";
import FeatureButton from "../components/home/FeatureButton";

function WatchLaterPage() {
  const movieId = useSelector((state) => state.movie.data);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetchdata().then((data) => {
      setMoviesData(data);
    });
  }, [movieId, setMoviesData]);

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows");
      const data = await response?.data?.slice(0, 90);
      return data;
    } catch (error) {
      console.log("data not found", error);
      throw error;
    }
  };

  return (
    <div className="bg-slate-900 w-full h-screen">
      {moviesData.length > 0 && movieId.length > 0 ? (
        <MovieLayout>
          {movieId.map((movie) => {
            const movieData = moviesData.find((m) => m.id == movie.id);

            return (
              <Link key={movieData.id} to={`/details/${movieData.id}`}>
                <div className="relative hover:scale-110 hover:z-10 lg:hover:scale-150 transition duration-300 p-2 lg:p-1">
                  <img src={movieData?.image?.medium} alt={movieData.name} className="w-[full] rounded-md " />
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 ease-in-out text-white flex flex-col items-start justify-center p-3">
                    <div className="mt-[10rem]">
                      <i className=" text-lg">{movieData?.name}</i>
                      <i className="flex flex-wrap text-xs">{movieData.genres.join(" , ")}</i>
                      <i className=" text-sm">{movieData?.language}</i>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </MovieLayout>
      ) : (
        <div className="flex flex-col gap-6 items-center justify-center h-screen mx-auto">
          <h1>
            <MdLocalMovies size={56} />
          </h1>
          <h2 className="text-2xl text-center">Sorry, there are no films, please enter the film you want to watch another time</h2>
        </div>
      )}

      <FeatureButton />
    </div>
  );
}

export default WatchLaterPage;
