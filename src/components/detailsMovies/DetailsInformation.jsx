/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";

function DetailsInformation({ movieDetails }) {
  return (
    <div className="absolute left-[11rem] p-1.3  lg:top-[17rem] lg:left-[20rem] flex flex-col">
      <h1 className="text-white italic text-balance text-3xl lg:text-4xl font-bold mb-3 lg:mb-2">{movieDetails.name}</h1>
      <p className="italic text-white text-balance">{movieDetails.genres.join(", ")}</p>
      <div className="flex items-center gap-2 ">
        <i className="text-white text-balance ">{movieDetails.rating.average} / 10</i>
        <p className="text-white text-balance">
          <FaStar color="orange" />
        </p>
      </div>
      <i className="text-white text-balance">{movieDetails.averageRuntime} / mnt</i>
      <i className="text-white text-balance">{movieDetails.language}</i>
      <div className="flex items-center gap-2">
        <i className="text-white text-balance">country : {movieDetails.network.country.name}</i>
        <p className="text-white">
          <MdOutlineAccountBalance />
        </p>
      </div>
      <i className="text-white text-balance">reales : {movieDetails.ended}</i>
    </div>
  );
}

export default DetailsInformation;
