import { collection, DocumentData, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { appDispatch } from "../store";
import { setIsLoading, setUsers } from "./reducers";
import { message } from "antd";


export const getUsers = () => async(dispatch: appDispatch) => {
    dispatch(setIsLoading(true))
    try {
        const usersRef = collection(db, "messages");
        const messagesSnapshot = await getDocs(usersRef)
        const lastMessages: { userId: string; message: DocumentData; }[] = []

        for(const messagesDoc of messagesSnapshot.docs){
            const userId = messagesDoc.id
            const conversationCollection = collection(db, "messages", userId, "conversation")

            const lastMessageQuery = query(conversationCollection, orderBy("timestamp", "desc"), limit(1))

            const conversationSnapshot = await getDocs(lastMessageQuery)

            conversationSnapshot.forEach((doc) => {
                lastMessages.push({
                    userId,
                    message: doc.data()
                })
            })
        }
    
        dispatch(setUsers(lastMessages))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        message.error(error)
        dispatch(setIsLoading(false))
    }
   
}