import { Link } from "react-router-dom";

function PopularMovieList({ movie, id }) {
  return (
    <Link to={`/details/${id}`}>
      <div className="relative hover:scale-110 hover:z-10 lg:hover:scale-150 transition duration-300 p-2 lg:p-1">
        <img src={movie.image.medium} alt={movie} className="w-[full] rounded-md" />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 ease-in-out text-white flex flex-col items-start justify-center p-3">
          <div className="mt-[10rem]">
            <i className=" text-lg">{movie.name}</i>
            <i className="flex flex-wrap text-xs">{movie.genres.join(" , ")}</i>
            <i className=" text-sm">{movie.language}</i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PopularMovieList;
