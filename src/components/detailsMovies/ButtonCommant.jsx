import { FaCommentAlt } from "react-icons/fa";

function Commant({ comments }) {
  return (
    <div className="flex flex-col">
      <button className="text-white hover:text-slate-300 pb-3">
        <FaCommentAlt size={25} /> {comments.length}
      </button>
      {/* <div className="text-white text-lg font-bold  text-center absolute bottom-[36.6rem] left-[12rem] lg:bottom-[22.4rem] lg:left-[10.3rem]"></div> */}
    </div>
  );
}

export default Commant;
