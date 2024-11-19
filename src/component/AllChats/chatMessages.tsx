import { Form, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import user from "../../assets/user.webp";
import { TiPin } from "react-icons/ti";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ChatMessages = () => {
  return (
    <div className="w-60 h-full bg-slate-800 p-2 rounded-r-lg pt-8 flex flex-col">
      <Form.Item name={"search"}>
        <Input
          placeholder="Search"
          prefix={<CiSearch size={15} color="slate" />}
        />
      </Form.Item>
      <div className="w-full h-full flex flex-col justify-start items-center">
        <div className="w-full h-16 flex rounded-lg p-2 bg-slate-500 justify-center items-center space-x-1">
          <div className="w-10 h-10 flex justify-center items-center">
            <img
              src={user}
              alt="user image"
              className=" rounded-md"
            />
          </div>
          <div className="w-full h-full flex flex-col space-y-1 justify-center items-start">
            <h1 className="font-medium text-white">username</h1>
            <p className="text-xs text-gray-300 overflow-hidden">{`${("here is the message you are going to read").split("").slice(0, 20).join("")}`}...</p>
          </div>
          <div className="w-10 h-10 flex flex-col gap-1 place-content-center">
            <div className="w-full h-full flex justify-center items-center">
              <IoCheckmarkDoneSharp size={15} className="hidden" />
              <span className="text-xs text-gray-300">5m</span>
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
      </div>
    </div>
  );
};

export default ChatMessages;
