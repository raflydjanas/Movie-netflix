import { searchMovies } from "../Services/authservices";
import FeatureButton from "../components/home/FeatureButton";
import MovieLayout from "../layout/home/MovieLayout";
import { useState } from "react";

function SearchMoviesPage() {
  const [inputValue, setInputValue] = useState("");
  const [searchResaults, setSearchResaults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await searchMovies(inputValue);
      setSearchResaults(res.map((result) => result.show));
      setInputValue("");
      setIsLoading(false);
    } catch (error) {
      console.log("erorr searching movies", error);
    }
  };

  return (
    <div className={`flex flex-col bg-slate-900 ${searchResaults.length > 0 ? "h-auto" : "h-screen"}`}>
      <form onSubmit={handleSubmit} className="my-10 mx-4 xl:mx-16 w-full xl:w-[70%]">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search"
          className="w-[70%] xl:w-[80%] mr-2 xl:mr-5 bg-slate-700 py-2 px-2 rounded-md mt-5 text-white opacity-80"
        />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 xl:px-7 rounded-md">
          Search
        </button>
      </form>

      <MovieLayout>
        {isLoading && <h1 className="text-white text-xl">Loading...</h1>}
        {searchResaults.map((movie) => (
          <>
            <div key={movie.id} className="relative hover:scale-110 hover:z-10 lg:hover:scale-150 transition duration-300 p-2 lg:p-1">
              <img src={movie?.image?.medium} alt={movie?.name} className="w-[full] rounded-md " />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 ease-in-out text-white flex flex-col items-start justify-center p-3">
                <div className="mt-[10rem]">
                  <i className=" text-lg">{movie?.name}</i>
                  <i className="flex flex-wrap text-xs">{movie?.genres?.join(" , ")}</i>
                  <i className=" text-sm">{movie?.language}</i>
                </div>
              </div>
            </div>
          </>
        ))}
      </MovieLayout>
      <FeatureButton />
    </div>
  );
}

export default SearchMoviesPage;
