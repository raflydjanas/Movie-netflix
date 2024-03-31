import { useState, useEffect } from "react";
import DekstopLayout from "../../layout/gettingStarted/DekstopLayout";
import MobileLayout from "../../layout/gettingStarted/MobileLayout";

function Content({ type }) {
  const [isMobile, setIsMobile] = useState(false);
  const getUsersJson = localStorage.getItem("users");
  const users = getUsersJson ? JSON.parse(getUsersJson) : [];

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

  return <>{isMobile ? <MobileLayout type={type} usersLogin={users} /> : <DekstopLayout type={type} usersLogin={users} />}</>;
}

export default Content;
