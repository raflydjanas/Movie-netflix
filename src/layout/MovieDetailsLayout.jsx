import { useEffect, useState } from "react";
import { getMovieDetails } from "../Services/authservices";
import { useParams } from "react-router-dom";
import DetailsInformation from "../components/detailsMovies/DetailsInformation";
import InteractionButtom from "../components/detailsMovies/InteractionButtom";

function MovieDetailsLayout() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    getMovieDetails(id).then((data) => {
      setMovieDetails(data);
    });
  }, [id]);

  function removeHTMLTags(str) {
    return str.replace(/<[^>]*>/g, "");
  }

  console.log(movieDetails);
  return (
    <>
      {Object.keys(movieDetails).length > 0 && (
        <>
          <div
            className="h-[20rem] lg:h-[26rem] 2xl:h-[30rem] w-full"
            style={{ backgroundImage: `url(${movieDetails.image.original})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
          ></div>
          <DetailsInformation movieDetails={movieDetails} />
          <div className="absolute top-[12rem] left-3 h-[15rem] w-[10rem] lg:top-[17rem] lg:left-10 lg:w-[16rem]  lg:h-[23rem]">
            <img src={movieDetails.image.original} className="w-full h-full rounded-lg" alt="" />
          </div>
          <div className="mt-[14rem] p-2 lg:ml-[19rem] lg:mt-3">
            <h1 className="text-white italic text-balance text-4xl font-bold mb-2">Synopsis</h1>
            <p className="text-white text-balance text-base font-sans">{removeHTMLTags(movieDetails.summary)}</p>
          </div>
          <InteractionButtom />
        </>
      )}
    </>
  );
}

export default MovieDetailsLayout;
