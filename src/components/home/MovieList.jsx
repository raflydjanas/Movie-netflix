import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
function AllMovieList({ movie, id, index }) {
  return (
    <Link to={`/details/${id}`}>
      <motion.div
        transition={{
          delay: index * 0.05,
          ease: "easeInOut",
          duration: 0.2,
        }}
        viewport={{ amount: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative hover:scale-110 hover:z-10 lg:hover:scale-150 transition duration-300 p-2 lg:p-1"
      >
        <img src={movie.image.medium} alt={movie.name} className="w-[full] rounded-md" />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 ease-in-out text-white flex flex-col items-start justify-center p-3">
          <div className="mt-[10rem]">
            <i className=" text-lg">{movie.name}</i>
            <i className="flex flex-wrap text-xs">{movie.genres.join(" , ")}</i>
            <i className=" text-sm">{movie.language}</i>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default AllMovieList;
