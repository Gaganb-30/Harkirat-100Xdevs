import Comment from "./Comment";

const CommentList = () => {
  return (
    <>
      <Comment
        authorName={"Gagan"}
        publishDate={"4 days ago"}
        content={"xyz"}
        likes={4}
        dislikes={2}
      />
      <div>Comment 1</div>
      <div>Comment 1</div>
      <div>Comment 1</div>
    </>
  );
};

export default CommentList;
