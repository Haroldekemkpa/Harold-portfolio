import React from "react";
import { useContext } from "react";
import { CommentContextAPI } from "../context/ContextApi";
import { assets } from "../assets/assets";

const Comments = () => {
  const { comments, setComments } = useContext(CommentContextAPI);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/comments/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setComments((prev) => prev.filter((comments) => comments.id !== id));
      } else {
        console.error("failed to delete comments");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="px-8">
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Comment</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {comments &&
              comments.map((cur, i) => (
                <tr
                  key={i}
                  className="odd:bg-gray-50 even:bg-white hover:bg-orange-50 transition"
                >
                  <td className="px-4 py-2">
                    <img
                      src={
                        !cur.profile_img
                          ? assets.img
                          : `http://localhost:3000/uploads/${cur.profile_img}`
                      }
                      alt={cur.name}
                      className="w-16 h-16 object-cover border border-orange-500 rounded"
                    />
                  </td>
                  <td className="px-4 py-2 font-medium">{cur.name}</td>
                  <td className="px-4 py-2">{cur.title}</td>
                  <td className="px-4 py-2">{cur.comment}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(cur.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
