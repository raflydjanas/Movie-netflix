import { useState, useEffect } from "react";
import Movie from "../layout/home/MovieLayout";
import NavBar from "../layout/NavBar";

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
    <div className="bg-slate-900 h-auto w-full">
      {isMobile ? <NavBar type="mobile" /> : <NavBar type="dekstop" />}
      <Movie />
    </div>
  );
};

export default Home;
