
import { BsSendFill, BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiMiniLink } from "react-icons/hi2";
import { IoIosCall } from "react-icons/io";
import { MdInsertPhoto } from "react-icons/md";

const ChatConversation = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="flex w-full h-20 bg-slate-800 border-b-2 border-slate-400 justify-center items-center px-2">
        <div className="flex flex-col w-full h-fit">
          <h1 className="font-bold text-2xl text-gray-300">User Name</h1>
          <span className="text-xs text-blue-300">online 2h ago</span>
        </div>
        <div className="flex space-x-8">
          <CiSearch size={25} color="white" className="cursor-pointer" />
          <IoIosCall size={25} color="white" className="cursor-pointer" />
          <BsThreeDotsVertical
            size={25}
            color="white"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex w-full h-fit p-4 bg-slate-800 justify-center items-center space-x-5 py-2">
        <div className="flex w-fit h-fit space-x-2">
          <HiMiniLink size={25} color="white" className="cursor-pointer" />
          <MdInsertPhoto size={25} color="white" className="cursor-pointer"/>
        </div>
        
          <div className=" w-full flex justify-center items-center space-x-2">
            <input type="text" placeholder="Your message ..." className="w-full h-10 bg-slate-800 border-2 border-slate-500 rounded-md px-2 outline-none text-white"/>
            <BsSendFill size={25} color="white" className="cursor-pointer"/>
          </div>
        
      </div>
    </div>
  );
};

export default ChatConversation;
