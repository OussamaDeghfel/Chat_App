/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, DocumentData, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { appDispatch } from "../store";
import { setConversation, setIsLoading, setUsers } from "./reducers";
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
    } catch (error:any) {
        message.error(error)
        dispatch(setIsLoading(false))
    }
   
}


export const getSelectedConversation = (userId: string) => async (dispatch: appDispatch) => {
    dispatch(setIsLoading(true))
    try {
        const conversationRef = collection(db, "messages", userId, "conversation")
        const q = query(conversationRef)

        const convDetails = await getDocs(q)

        const messagesDetails = convDetails.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))

        console.log("converstaion from the action :", messagesDetails)

        dispatch(setConversation(messagesDetails))
        dispatch(setIsLoading(false))


    } catch (error:any) {
        message.error(error)
        dispatch(setIsLoading(false))
    }
}