import { FaCommentAlt } from "react-icons/fa";

function Commant({ comments, setIsOpen }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <button className="text-white hover:text-slate-300 pb-3" onClick={() => setIsOpen((prev) => !prev)}>
        <FaCommentAlt size={25} />
      </button>
      <div className="text-white">{comments.length}</div>
    </div>
  );
}

export default Commant;
