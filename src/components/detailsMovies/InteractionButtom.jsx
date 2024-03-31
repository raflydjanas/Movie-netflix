import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

function InteractionButtom() {
  return (
    <div className=" mt-5 ml-[5rem] lg:ml-[3rem] lg:mt-[4.5rem] w-[15rem] flex items-center justify-center gap-8 border-b p-5 border-t">
      <button className="text-white hover:text-slate-300">
        <AiFillLike size={30} />
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
