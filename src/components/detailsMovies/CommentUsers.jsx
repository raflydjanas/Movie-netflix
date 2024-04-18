/* eslint-disable react/prop-types */

import { GoPerson } from "react-icons/go";
import { useEffect, useState } from "react";

function CommentUsers({ comments, setComments }) {
  const usersData = localStorage.getItem("userslogin");
  const users = usersData ? JSON.parse(usersData) : [];
  const userNames = users.map((user) => user.usersLogin);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getComments = localStorage.getItem("comments");
    setComments(getComments ? JSON.parse(getComments) : []);
  }, [setComments]);

  function handleSubmit(e) {
    e.preventDefault();

    const newComment = {
      comment: inputValue,
    };

    setComments((prevComments) => [...prevComments, newComment]);
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
    setInputValue("");
  }

  return (
    <>
      <h2 className="italic text-white text-balance text-4xl font-bol ml-0 lg:ml-16 mt-10 lg:mt-[5rem] mb-4">Comment</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 lg:gap-10 w-full lg:w-[50rem] ml-0 lg:ml-16 mb-16 mx-3">
          <input type="text" placeholder="Comment" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full bg-slate-800 rounded-lg p-3 text-white" />
          <button className="text-white hover:text-slate-300" type="submit">
            Add
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-16 ml-10 mb-[4rem]">
        {comments.map((comment, index) => (
          <div key={index} className="w-full ml-0 px-4 flex flex-col gap-5 lg:ml-10 lg:w-[50rem] border-b pb-5 border-slate-700">
            <div className="flex items-center gap-3">
              <GoPerson size={40} className="bg-slate-500 rounded-full" />
              <p className="text-slate-100">{userNames[index]}</p>
            </div>
            <p className="text-slate-100">{comment.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CommentUsers;
