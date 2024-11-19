import { Form, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import user from "../../assets/user.webp";
import { TiPin } from "react-icons/ti";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ChatMessages = () => {

    const messages = [
        {id: 1, image: user, username: "Ammar", messageDescription: "Hello", time: "10:00"},
        {id: 2, image: user, username: "Ahmed", messageDescription: "How are you", time: "12:00"},
        {id: 3, image: user, username: "Mohammed", messageDescription: "I'm fine thank you", time: "1:00"},
        {id: 4, image: user, username: "Ali", messageDescription: "What about you", time: "2:00"},
        {id: 5, image: user, username: "Omar", messageDescription: "I'm good", time: "3:00"},
        {id: 6, image: user, username: "Ammar", messageDescription: "I'm happy", time: "4:00"},
        {id: 7, image: user, username: "Ahmed", messageDescription: "I'm sad", time: "5:00"},
        {id: 8, image: user, username: "Mohammed", messageDescription: "I'm angry", time: "6:00"},
        {id: 9, image: user, username: "Ali", messageDescription: "I'm tired", time: "7:00"},
    ]
  return (
    <div className="w-60 h-full bg-slate-800 p-2 rounded-r-lg pt-8 flex flex-col">
      <Form.Item name={"search"}>
        <Input
          placeholder="Search"
          prefix={<CiSearch size={15} color="slate" />}
        />
      </Form.Item>
      <div className="w-full h-full flex flex-col justify-start items-center overflow-y-scroll space-y-2">

        {messages.map((message) => {
          return (
            <div className="w-full h-16 flex rounded-lg p-2 bg-slate-500 justify-center items-center space-x-1" key={message.id}>
          <div className="w-10 h-10 flex justify-center items-center">
            <img
              src={message.image}
              alt="user image"
              className=" rounded-md"
            />
          </div>
          <div className="w-full h-full flex flex-col space-y-1 justify-center items-start">
            <h1 className="font-medium text-white">{message.username}</h1>
            <p className="text-xs text-gray-300 overflow-hidden">{`${(message.messageDescription).split("").slice(0, 20).join("")}`}...</p>
          </div>
          <div className="w-10 h-10 flex flex-col gap-1 place-content-center">
            <div className="w-full h-full flex justify-center items-center">
              <IoCheckmarkDoneSharp size={15} className="hidden" />
              <span className="text-xs text-gray-300">{message.time}</span>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <span className="bg-blue-500 rounded-full text-sm text-center w-full h-full hidden">
                4
              </span>
              <button >
                <TiPin size={15} className="text-gray-300"/>
              </button>
            </div>
          </div>
        </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default ChatMessages;
