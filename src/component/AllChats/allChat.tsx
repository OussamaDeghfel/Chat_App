import ChatConversation from "./chatConversation"
import ChatMessages from "./chatMessages"


const AllChat = () => {
  return (
    <div className="flex w-full h-full">
        <ChatMessages />
        <ChatConversation />
    </div>
  )
}

export default AllChat