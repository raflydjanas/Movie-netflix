import { useState, useEffect } from "react";
import NavBar from "../layout/NavBar";
import Hero from "../layout/home/Hero";
import DaftarMovies from "../layout/home/DaftarMovies";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        {isMobile ? <NavBar type="mobile" /> : <NavBar type="dekstopHome" />}
        <Hero />
        <DaftarMovies />
      </div>
    </>
  );
};

export default Home;
