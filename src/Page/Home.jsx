import { useState, useEffect } from "react";
import Movie from "../layout/home/MovieLayout";
import NavBar from "../layout/NavBar";
import Hero from "../layout/home/Hero";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [isAll, setAll] = useState("all");

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [isMobile]);

  return (
    <>
      <div className="bg-black h-auto w-full">
        {isMobile ? <NavBar type="mobile" /> : <NavBar type="dekstop" />}
        <Hero />
        <div className="flex gap-6">
          <button className="bg-red-600 mt-10 active:bg-red-700 hover:bg-red-700 px-10 rounded-md text-white">All</button>
          <button className="bg-red-600 mt-10 hover:bg-red-700 px-10 rounded-md text-white">PoPuler</button>
          <button className="bg-red-600 mt-10 hover:bg-red-700 px-10 rounded-md text-white">Trending</button>
        </div>
        <Movie />
      </div>
    </>
  );
};

export default Home;
