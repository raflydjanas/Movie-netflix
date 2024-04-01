/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

function DetailsInformation({ movieDetails, isLoading }) {
  return (
    <div className="absolute left-[12rem] p-1.3  lg:top-[17rem] xl:top-[17rem] lg:left-[20rem] flex flex-col">
      {isLoading ? <Skeleton height={30} width={200} className="mb-2" /> : <h1 className="text-white italic text-balance text-3xl lg:text-4xl font-bold mb-3 lg:mb-2">{movieDetails.name}</h1>}
      {isLoading ? <Skeleton width={120} /> : <p className="italic text-white text-balance">{movieDetails.genres.join(", ")}</p>}

      {isLoading ? (
        <Skeleton width={120} />
      ) : (
        <div className="flex items-center gap-2 ">
          <i className="text-white text-balance ">{movieDetails.rating.average} / 10</i>
          <p className="text-white text-balance">
            <FaStar color="orange" />
          </p>
        </div>
      )}

      {isLoading ? (
        <Skeleton count={2} width={120} />
      ) : (
        <>
          <i className="text-white text-balance">{movieDetails.averageRuntime} / mnt</i>
          <i className="text-white text-balance">{movieDetails.language}</i>
        </>
      )}

      {isLoading ? (
        <Skeleton width={120} />
      ) : (
        <>
          <div className="flex items-center gap-2">
            <i className="text-white text-balance">{movieDetails.network.name && `channel : ${movieDetails.network.name}`}</i>
            <p className="text-white">
              <MdOutlineAccountBalance />
            </p>
          </div>
        </>
      )}
      <i className="text-white text-balance ">reales : {movieDetails.ended}</i>
    </div>
  );
}

export default DetailsInformation;
