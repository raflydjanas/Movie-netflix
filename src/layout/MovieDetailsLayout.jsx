import { useEffect, useState } from "react";
import { getMovieDetails } from "../Services/authservices";
import { useParams, Link } from "react-router-dom";
import DetailsInformation from "../components/detailsMovies/DetailsInformation";
import InteractionButtom from "../components/detailsMovies/InteractionButtom";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import CommentUsers from "../components/detailsMovies/CommentUsers";
import PlatformFilm from "../components/detailsMovies/PlatformFilm";

function MovieDetailsLayout() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getMovieDetails(id).then((data) => {
      setMovieDetails(data);
    });
  }, [id]);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(time);
  }, []);

  function removeHTMLTags(str) {
    return str.replace(/<[^>]*>/g, "");
  }

  return (
    <>
      {Object.keys(movieDetails).length > 0 && (
        <>
          <div
            className="h-[20rem] lg:h-[26rem] 2xl:h-[30rem] w-full"
            style={{ backgroundImage: `url(${movieDetails.image.original})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
          ></div>
          <DetailsInformation movieDetails={movieDetails} isLoading={isLoading} />
          <div className="absolute top-[12rem] left-3 h-[15rem] w-[10rem] lg:top-[17rem] lg:left-10 lg:w-[16rem]  lg:h-[23rem]">
            {isLoading ? <Skeleton className="h-[15rem] lg:h-[25rem] rounded-xl" /> : <img src={movieDetails.image.original} className="w-full h-full rounded-lg" alt="" />}
          </div>
          <div className="mt-[14rem] p-2 lg:ml-[19rem] lg:mt-3">
            {isLoading ? <Skeleton width={150} height={30} className="mb-3" /> : <h1 className="text-white italic text-balance text-4xl font-bold mb-2">Synopsis</h1>}
            {isLoading ? <Skeleton count={4} width={600} /> : <p className="text-white text-balance text-base font-sans">{removeHTMLTags(movieDetails.summary)}</p>}
          </div>
          <InteractionButtom comments={comments} setComments={setComments} setIsOpen={setIsOpen} />
          <div className="w-full bg-black h-auto ">
            <PlatformFilm />
          </div>
          {isOpen && <CommentUsers comments={comments} setComments={setComments} />}
          <Link to="/home">
            <button className="lg:hidden mt-4 bg-red-700 hover:bg-red-800 mb-10  py-1 px-3 ml-[9rem] rounded-md ">back to home</button>
          </Link>
        </>
      )}
    </>
  );
}

export default MovieDetailsLayout;
