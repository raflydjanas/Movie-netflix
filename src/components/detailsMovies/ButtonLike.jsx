import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from "react";

function ButtonLike() {
  const [count, setCount] = useState(() => {
    const getTotalLike = localStorage.getItem("totalLike");
    const count = getTotalLike ? JSON.parse(getTotalLike) : 0;
    return count;
  });

  const getUsersJson = localStorage.getItem("userslogin");
  const usersLike = getUsersJson ? JSON.parse(getUsersJson) : [];

  useEffect(() => {
    localStorage.setItem("totalLike", JSON.stringify(count));
  }, [count]);

  function handleLike() {
    const userName = localStorage.getItem("userslogin");
    const checkUserLike = usersLike.find((user) => user.username === userName.usersLogin);

    if (checkUserLike) {
      if (checkUserLike.liked) {
        setCount((prave) => (prave <= 0 ? prave : prave - 1));
        checkUserLike.liked = false;
      } else {
        setCount((prave) => (prave >= 1 ? prave : prave + 1));
        checkUserLike.liked = true;
      }

      localStorage.setItem("userslogin", JSON.stringify(usersLike));
    } else {
      alert("please login first");
    }
  }

  return (
    <div className="flex ">
      <button className="relative text-white hover:text-slate-300 pb-3" onClick={handleLike}>
        <AiFillLike size={30} /> {count}
      </button>
      {/* <div className="text-white text-lg font-bold  text-center absolute bottom-[36rem] left-[8.3rem] lg:bottom-[22.4rem] lg:left-[6.3rem]"></div> */}
    </div>
  );
}

export default ButtonLike;
