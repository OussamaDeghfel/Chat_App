import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

const Conversation = () => {
  const [text, setText] = useState<string[]>();
  

  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));
    console.log(q)
    onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      
    });
  }, []);

  return (
    <div className="p-2 justify-end items-end bottom-0 space-y-4 flex-reverse">
      <div className="flex flex-col justify-end items-end">
        <p className="bg-blue-500 p-4 w-fit rounded-md">{text}</p>
      </div>
    </div>
  );
};

export default Conversation;
