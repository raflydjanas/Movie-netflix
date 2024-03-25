import { useState, useEffect } from "react";
import DekstopLayout from "../../layout/gettingStarted/DekstopLayout";
import MobileLayout from "../../layout/gettingStarted/MobileLayout";

function Content({ type }) {
  const [isMobile, setIsMobile] = useState(false);
  const getUsers = JSON.parse(localStorage.getItem("user") || []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <MobileLayout type={type} getUsers={getUsers} /> : <DekstopLayout type={type} getUsers={getUsers} />}</>;
}

export default Content;
