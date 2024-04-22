import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function LinkToWatchVideo({ id }) {
  return (
    <Link to={`https://www.tvmaze.com/shows/${id}`}>
      <div className="absolute rounded-lg top-[12rem] left-3 h-[15rem] w-[10rem] xl:top-[14rem] 2xl:top-[17rem] lg:left-10 lg:w-[16rem]  lg:h-[23rem] opacity-0 bg-black bg-opacity-50 hover:opacity-100 z-0 transition duration-300 ease-in-out text-white flex flex-col items-start justify-center p-3">
        <CiPlay1 size={50} className="text-white mx-auto my-auto" />
      </div>
    </Link>
  );
}

export default LinkToWatchVideo;
