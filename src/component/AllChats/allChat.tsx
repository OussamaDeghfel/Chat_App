import SideBar from "../sideBar"
import ChatConversation from "./chatConversation"
import ChatMessages from "./chatMessages"


const AllChat = () => {
  return (
    <div className="flex w-full h-full"> 
      <SideBar />
      <ChatMessages />
      <ChatConversation />
    </div>
  )
}

export default AllChat