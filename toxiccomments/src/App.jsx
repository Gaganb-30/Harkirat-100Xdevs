import "./App.css";
import CommentBox from "./components/CommentBox";
import WriteComment from "./components/WriteComment";

function App() {
  return (
    <>
      <CommentBox />
      <hr></hr>
      <WriteComment className="m-5" />
    </>
  );
}

export default App;
