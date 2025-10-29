import { MessagesSquare } from "lucide-react";

const LSide = () => {
  return (
    <div className="flex items-center">
      <div className="border-1 rounded-md p-2">
        <MessagesSquare />
      </div>
      <div className=" flex-col ml-2">
        <div className="text-xl font-bold">Discussion</div>
        <div>
          <span>15</span>
          <span>Comments</span>
        </div>
      </div>
    </div>
  );
};

export default LSide;
