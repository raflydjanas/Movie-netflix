function PlatformFilm() {
  return (
    <div className="w-full bg-black h-auto ">
      <marquee className="text-white mt-[1rem] lg:mt-[3rem] ">
        <div className="flex items-center justify-evenly ">
          <img src="../../public/image/BrandAssets_Logos_01-Wordmark-removebg-preview.png" alt="" className="w-[25rem]" />
          <img src="../../public/image/apple.png" alt="" className="w-[25rem]" />
          <img src="../../public/image/tvMaze.png" alt="" className="w-[15rem]" />
          <img src="../../public/image/hbo.png" alt="" className="w-[25rem]" />
        </div>
      </marquee>
    </div>
  );
}

export default PlatformFilm;
