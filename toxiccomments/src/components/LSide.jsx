const LSide = () => {
  return (
    <div className="flex items-center">
      <img
        src="https://img.icons8.com/ios-filled/50/000000/comments--v1.png"
        alt="Logo"
      />
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
