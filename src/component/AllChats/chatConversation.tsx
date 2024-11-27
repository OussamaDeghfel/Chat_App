
import { BsSendFill, BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
// import { HiMiniLink } from "react-icons/hi2";
import { IoIosCall } from "react-icons/io";
// import { MdInsertPhoto } from "react-icons/md";
import Conversation from "./conversation";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

const ChatConversation = () => {

  const [textByUser, setTextByUser] = useState<string>("")

  const handleSendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: textByUser,
      sender: "user",
      timestamp: new Date(),
    })
    console.log("text msg: ", textByUser)

    setTextByUser('')
  }


  return (
    <div className="w-full max-h-screen flex flex-col">
  {/* Navbar (Top Section) */}
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

  {/* Conversation Area (Middle Section) */}
  <div className="flex-1 overflow-y-scroll ">
    <Conversation />
  </div>

  {/* Message Input (Bottom Section) */}
  <div className="flex w-full h-fit p-4 bg-slate-800 justify-center items-center space-x-5 py-2">
    {/* <div className="flex w-fit h-fit space-x-2">
      <HiMiniLink size={25} color="white" className="cursor-pointer" />
      <MdInsertPhoto size={25} color="white" className="cursor-pointer" />
    </div> */}

    <div className="w-full flex justify-center items-center space-x-2">
      <input
        type="text"
        placeholder="Your message ..."
        className="w-full h-10 bg-slate-800 border-2 border-slate-500 rounded-md px-2 outline-none text-white" 
        onChange={(e) => setTextByUser(e.target.value)}
      />
      <BsSendFill size={25} color="white" className="cursor-pointer" onClick={handleSendMessage} />
    </div>
  </div>
</div>

  );
};

export default ChatConversation;
