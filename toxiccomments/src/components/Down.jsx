import { useState } from "react";
import { useComments } from "../hooks";

const Down = ({ gameId }) => {
  const [content, setContent] = useState("");
  const { comments, loadingComments, postingComment, addComment } =
    useComments(gameId);
  async function handleAddComment(e) {
    e.preventDefault();
    if (!content.trim()) return;

    const newContent = content;
    setContent(""); // optimistic clear

    try {
      await addComment(newContent);
    } catch (err) {
      setContent(newContent); // rollback if failed
      console.error("Failed to add comment:", err);
    }
  }
  return (
    <div className="mt-4">
      <form className="mb-6" onSubmit={handleAddComment}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            onChange={(e) => setContent(e.target.value)}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={postingComment}
          className={`inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white 
                ${
                  postingComment
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-800"
                } 
                rounded-lg focus:ring-4 focus:ring-blue-200`}
        >
          {postingComment ? "Posting..." : "Post comment"}
        </button>
      </form>
    </div>
  );
};

export default Down;
