import CommentList from "./CommentList";
import Header from "./Header";

const CommentBox = () => {
  return (
    <div className="m-10 border-2 rounded-md p-5">
      <Header />
      <CommentList />
    </div>
  );
};

export default CommentBox;
