import { BiLogOutCircle } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";

const SideBar = () => {
  return (
    <div className="w-16 h-full bg-slate-600 justify-around items-center flex flex-col">
      <button className="border-2 border-slate-400 rounded-lg p-2">
        <LuMessagesSquare size={20} color="white" />
      </button>

      <button className=" border-2 border-slate-400 rounded-lg p-2">
        <BiLogOutCircle size={20} color="white" />
      </button>
    </div>
  );
};

export default SideBar;
