import LSide from "./LSide";
import RSide from "./RSide";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <LSide></LSide>
      <RSide></RSide>
    </div>
  );
};

export default Header;
