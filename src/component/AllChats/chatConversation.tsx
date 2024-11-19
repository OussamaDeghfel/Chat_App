import { BsThreeDotsVertical } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { IoIosCall } from "react-icons/io"


const ChatConversation = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full h-20 bg-slate-800 border-b-2 border-slate-400 justify-center items-center px-2">
        <div className="flex flex-col w-full h-fit">
        <h1 className="font-bold text-2xl text-gray-300">User Name</h1>
        <span className="text-xs text-blue-300">online 2h ago</span>
        </div>
        <div className="flex space-x-8">
        <CiSearch size={25} color="white" className="cursor-pointer"/>
        <IoIosCall size={25} color="white" className="cursor-pointer"/>
        <BsThreeDotsVertical size={25} color="white" className="cursor-pointer"/>
      </div>
      </div>
      
    </div>
  )
}

export default ChatConversation