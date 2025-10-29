import { Pencil } from "lucide-react";

const Top = () => {
  return (
    <div className="flex items-center">
      <div className="border-1 rounded-md p-2">
        <Pencil />
      </div>
      <div className="w-full flex border-b border-gray-300">
        <div className=" flex-col ml-2">
          <div className="text-xl font-bold">Join the discussion</div>
          <div className="mb-2">Share your thoughts</div>
        </div>
      </div>
    </div>
  );
};

export default Top;
