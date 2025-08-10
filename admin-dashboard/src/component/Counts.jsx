import React from "react";
import { useContext } from "react";
import { CommentContextAPI } from "../context/ContextApi";
const Counts = () => {
  const { comments, hires } = useContext(CommentContextAPI);
  return (
    <div className="flex flex-col space-y-8 items-center justify-center w-full px-20 py-10 md:px-40 md:py-10 ">
      <h1 className="text-center text-white font-bold text-3xl">
        Hello Harold{" "}
      </h1>
      <div className="flex flex-col space-y-8 bg-[#64748b] sm:flex-row sm:space-x-8 md:space-y-0 items-stretch justify-center px-10 sm:px-20 py-10 rounded shadow-white">
        <div className="h-full bg-green-500 flex flex-col items-center justify-center rounded text-white font-bold p-8 flex-1">
          <p className="tet-center text-[#e5e7eb]">
            Comments:{" "}
            <span className="text-white block text-center text-xl">
              {comments.length}
            </span>{" "}
            comments
          </p>
        </div>

        <div className="h-full bg-orange-500 p-8 flex flex-col sm:flex-row items-center justify-center shadow-sm rounded text-white font-bold flex-1">
          <p className="text-center text-[#e5e7eb]">
            Hires:{" "}
            <span className="text-white block text-center text-xl">
              {hires.length}
            </span>{" "}
            request
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counts;
