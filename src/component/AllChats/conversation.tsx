import { collection, DocumentData, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

const Conversation = () => {
  const [userOne, setUserOne] = useState<unknown[]>()
  const [userTwo, setUserTwo] = useState<unknown[]>()
  

  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (messages.length > 0) {
        // Assign first user's messages dynamically
        const userOne = messages[0].id || "User One"; // Replace with actual field if available
        const userTwo = messages.find((msg) => msg.id !== userOne)?.id || "User Two";

        // Separate messages dynamically
        const userOneMsgs = messages.filter((msg) => msg.id === userOne);
        const userTwoMsgs = messages.filter((msg) => msg.id === userTwo);

        setUserOne(userOneMsgs);
        setUserTwo(userTwoMsgs);
      }
    })

    return () => unsubscribe();
  },[])

  return (
    <div className="p-2 justify-end items-end bottom-0 space-y-4 flex-reverse">
      <div className="flex flex-col justify-end items-end">
        {userOne?.map((msg, index) => (
        <p className="bg-blue-500 p-4 w-fit rounded-md" key={index}>{msg.text}</p>
        ))}
      </div>
      <div className="flex flex-col justify-end items-start bg-gray">
        {userTwo?.map((msg, index) => (
        <p className="bg-gray-200 p-4 w-fit rounded-md" key={index}>{msg.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Conversation;
