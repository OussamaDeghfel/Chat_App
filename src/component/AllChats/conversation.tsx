
const Conversation = ({conv}: any ) => {

  return (
    <div className="p-2 justify-end items-end bottom-0 space-y-4 flex-reverse">
      <div className="flex flex-col justify-end items-start bg-gray space-y-2">

        {conv.map((msg) => {
          return (
            <p className="bg-gray-200 px-4 py-2 w-fit rounded-md">{msg.text}</p>
          )
        })}
      
       
      </div>
    </div>
  );
};

export default Conversation;
