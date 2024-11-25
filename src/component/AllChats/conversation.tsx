import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {db} from '../../firebase'
import { useState } from "react";

const Conversation = () => {

  const [text, setText] = useState<string[]>()

  const messagesRef = collection(db, 'messages')
  const q = query(messagesRef, orderBy('text', 'asc'))
  onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => doc.data().text)
    setText(messages)
  })

  return (
    <div className="p-2 justify-end items-end bottom-0 space-y-4 flex-reverse">
      <div className="flex flex-col justify-end items-end">
        <p className="bg-blue-500 p-4 w-fit rounded-md">{text}</p>
      </div>
    </div>
  );
};

export default Conversation;
