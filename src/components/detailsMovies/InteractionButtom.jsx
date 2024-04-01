import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { useState } from "react";

function InteractionButtom() {
  const [count, setCount] = useState(0);
  const getUsersJson = localStorage.getItem("userslogin");
  const usersLike = getUsersJson ? JSON.parse(getUsersJson) : [];

  function handleLike() {
    const userName = localStorage.getItem("userslogin");
    const checkUserLike = usersLike.find((user) => user.username === userName.usersLogin);

    if (checkUserLike) {
      setCount(count >= 1 ? count - 1 : count + 1);
    } else {
      console.log("not found");
    }
  }

  return (
    <div className=" mt-5 ml-[5rem] lg:ml-[3rem] lg:mt-[3.7rem] w-[15rem] flex items-center justify-center gap-8 border-b p-5 border-t">
      <button className="text-white hover:text-slate-300" onClick={handleLike}>
        <AiFillLike size={30} /> {count}
      </button>
      <button className="text-white hover:text-slate-300">
        <FaCommentAlt size={25} />
      </button>
      <button className="text-white hover:text-slate-300">
        <IoMdShare size={30} />
      </button>
    </div>
  );
}

export default InteractionButtom;
