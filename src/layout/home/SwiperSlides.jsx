/* eslint-disable react/prop-types */
function SwiperSlides({ movie }) {
  function removeHTMLTags(str) {
    return str.replace(/<[^>]*>/g, "");
  }

  return (
    <div className="relative w-full h-[15rem] lg:h-[40rem]  2xl:h-[50rem] mx-auto lg:mx-0 2xl:mx-0 mt-3 lg:mt-0 2xl:mt-0 rounded-sm overflow-hidden">
      <img src={movie.image.original} alt={movie.name} className="w-full rounded-sm object-cover " />
      <div className="absolute top-0 left-0 w-full h-full  bg-black bg-opacity-50 opacity-100 transition duration-300 ease-in-out text-white flex flex-col items-start justify-center p-3">
        <div className=" flex-col hidden lg:block 2xl-block xl:block ml-1 lg:ml-[3rem] justify-center">
          <h1 className="2xl:text-[6rem] 2xl:mb-3 lg:text-[4rem] lg:mb-7 font-bold text-slate-200">{movie.name}</h1>
          <p className="2xl:w-[60rem] 2xl:text-[1.5rem] lg:w-[50rem] lg:text-md lg:mb-4 mb-3 text-slate-400">{removeHTMLTags(movie.summary)}</p>
          <div className="border-t-2 border-b-2 border-slate-400 2xl:py-4 2xl:mt-10 lg:py-3 lg:mt-8 flex justify-evenly">
            <h2 className="lg:text-[1rem] text-slate-300">Rating : {movie.rating.average}</h2>
            <h2 className="lg:text-[1rem] flex flex-wrap text-slate-300">Genres : {movie.genres.join(" , ")}</h2>
            <h3 className="lg:text-[1rem] text-slate-300">Language : {movie.language}</h3>
            <h3 className="lg:text-[1rem] text-slate-300">Released : {movie.ended}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiperSlides;
