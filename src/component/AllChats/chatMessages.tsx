import { Form, Input } from "antd";
import { CiSearch } from "react-icons/ci";
// import user from "../../assets/user.webp";
import { TiPin } from "react-icons/ti";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../../redux/store";
import { useCallback, useEffect } from "react";
import { getSelectedConversation, getUsers } from "../../redux/usersSlice";

const ChatMessages = () => {
  const usersList = useSelector((state: RootState) => state.user.usersList);
  const dispatch = useDispatch<appDispatch>()

  useEffect(() => {
    getUsers()(dispatch)
  },[dispatch])

  const handleSelectedConv = useCallback((userId: string) => {
    dispatch(getSelectedConversation(userId))
  },[dispatch])

  const currentDate = new Date();

  const calculedTime = (seconds: number, nanoseconds: number) => {
    const convertedDate = new Date(seconds * 1000 + nanoseconds / 1e6);

    const timeDiff = currentDate.getTime() - convertedDate.getTime();
    const minutes = Math.floor(timeDiff / 60000);
    if (minutes < 1) {
      return "now";
    }
    if (minutes < 60) {
      return minutes + "m ago";
    }
    if (minutes >= 60 && minutes < 1440) {
      const hours = Math.floor(minutes / 60);
      return hours + "h ago";
    }
    if (minutes >= 1440) {
      const days = Math.floor(minutes / 1440);
      return days + "d ago";
    }
  };

  
  return (
    <div className="w-60 h-full bg-slate-800 p-2 border-r-2 border-slate-400 pt-8 flex flex-col">
      <Form>
        <Form.Item name={"search"}>
          <Input
            placeholder="Search"
            prefix={<CiSearch size={15} color="slate" />}
          />
        </Form.Item>
      </Form>
      <div className="w-full h-full flex flex-col justify-start items-center space-y-2">
        {usersList.length == 0 && <div className="text-white">No User Found</div>}
        {usersList.map((user) => {
          return (
            <div
              className={`w-full h-16 flex rounded-lg p-2 bg-slate-600 justify-center items-center space-x-1 cursor-pointer `}
              key={user.userId}
              onClick={() => handleSelectedConv(user.userId)}
            >
              <div className="w-10 h-10 flex justify-center items-center">
                {/* <img
                  src={user.image}
                  alt="user image"
                  className=" rounded-md"
                /> */}
              </div>
              <div className="w-full h-full flex flex-col space-y-1 justify-center items-start">
                <h1 className="font-medium text-xl text-white">{user.message.sender}</h1>
                <p className="text-xs text-gray-300 overflow-hidden">
                  {`${user.message.text
                    .split("")
                    .slice(0, 20)
                    .join("")}`}
                  ...
                </p>
              </div>
              <div className="w-10 h-10 flex flex-col gap-1 place-content-center">
                <div className="w-full h-full flex justify-center items-center">
                  <IoCheckmarkDoneSharp size={15} className="hidden" />
                  <span className="text-xs text-gray-300">
                    {calculedTime(user.message.timestamp.seconds, user.message.timestamp.nanoseconds )}
                  </span>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <span className="bg-blue-500 rounded-full text-sm text-center w-full h-full hidden">
                    4
                  </span>
                  <button>
                    <TiPin size={15} className="text-gray-300" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatMessages;
