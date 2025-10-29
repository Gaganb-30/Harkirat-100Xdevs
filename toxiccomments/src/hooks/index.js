import { useEffect, useState } from "react";

export const useComments = (gameId) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [postingComment, setPostingComment] = useState(false);

  const fetchComments = async () => {
    setLoadingComments(true);
    try {
      const res = await axios.get(
        `${BACKEND_URL}/api/v1/comment/blog/${gameId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );
      setComments(res.data.comments || []);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, [gameId]);

  const addComment = async (content) => {
    setPostingComment(true);
    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/comment`,
        { content, gameId },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );
      await fetchComments();
    } catch (err) {
      console.error("Failed to add comment:", err);
    } finally {
      setPostingComment(false);
    }
  };

  return { comments, loadingComments, postingComment, addComment };
};
