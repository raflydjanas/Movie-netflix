import { Link } from "react-router-dom";

function MarvelList({ movie, id }) {
  return (
    <Link to={`/details/${id}`}>
      <div className="relative hover:scale-110 hover:z-10 lg:hover:scale-150 transition duration-300 p-2 lg:p-1">
        <img src={movie.Poster} alt={movie.Title} className="w-[13rem] rounded-md" />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 ease-in-out text-white flex flex-col items-start justify-center p-3">
          <div className="mt-[10rem]">
            <i className=" text-lg">{movie.Title}</i>
            <i className="flex flex-wrap text-xs">{movie.Type}</i>
            <i className=" text-sm">{movie.Year}</i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MarvelList;
