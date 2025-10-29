import { Reply, Share2, ThumbsDown, ThumbsUp } from "lucide-react";

const Comment = ({ authorName, publishDate, content, likes, dislikes }) => {
  return (
    <div className="flex border-2 p-2">
      <div className="m-2">
        <Avatar name={authorName} />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="pl-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="font-light pl-2 text-slate-500 text-sm flex flex-col justify-center">
            {publishDate}
          </div>
        </div>
        <div className="pl-2">{content}</div>
        <div className="flex flex-row border-2 rounded-md mt-4 m-2">
          <div className="border-1 rounded-full m-1 px-2 pt-1 flex">
            <ThumbsUp className="mr-2" size={18} />
            {likes}
          </div>
          <div className="border-1 rounded-full m-1 px-2 pt-1 flex">
            <ThumbsDown className="mr-2" size={18} />
            {dislikes}
          </div>
          <div className=" px-2 pt-1 flex">
            <Reply className="mr-2" size={18} />
            Reply
          </div>
          <div className=" px-2 pt-1 flex">
            <Share2 className="mr-2" size={18} />
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-400"></div>;
}

export function Avatar({ name, size = "small" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
        size === "small" ? "w-8 h-8" : "w-10 h-10"
      }`}
    >
      <span
        className={`text-gray-600 dark:text-gray-300 font text-${
          size === "small" ? "sm" : "xl"
        }`}
      >
        {name[0]}
      </span>
    </div>
  );
}
