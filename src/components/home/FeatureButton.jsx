import { Link } from "react-router-dom";
import { MdOutlineAccessTime } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { FaHouse } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function FeatureButton() {
  const movie = useSelector((state) => state.movie.data);
  const [totalMoives, setTotalMovies] = useState([]);

  useEffect(() => {
    const num = movie.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    setTotalMovies(num);
  }, [movie]);

  return (
    <div className="xl:hidden 2xl:hidden fixed right-0 py-2 left-0 mx-3 mb-3 rounded-full flex items-center justify-evenly bottom-0 bg-slate-800 h-16 z-50">
      <Link to="/watchlater" className="text-white">
        <p className="absolute ">{totalMoives}</p>
        <MdOutlineAccessTime size={37} />
      </Link>
      <span className="text-white">
        <GoSearch size={37} />
      </span>
      <Link to="/home" className="absolute bottom-0  left-[42%] h-16 w-16 rounded-full bg-slate-700 z-[9999] flex items-center justify-center">
        <FaHouse size={30} className="text-slate-300" />
      </Link>
    </div>
  );
}

export default FeatureButton;
