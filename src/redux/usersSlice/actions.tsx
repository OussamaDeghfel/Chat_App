/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, DocumentData, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { appDispatch } from "../store";
import { setConversation, setIsLoading, setUsers } from "./reducers";
// import { message } from "antd";


interface LastMessage {
    userId: string
    message: DocumentData
}

export const getUsers = () => async(dispatch: appDispatch) => {
    dispatch(setIsLoading(true))
    try {
        const usersRef = collection(db, "messages")
        const messagesSnapshot = await getDocs(usersRef)
        
        const lastMessages = await Promise.all(
            messagesSnapshot.docs.map(async (messageDoc) => {
                const userId = messageDoc.id
                const conversationRef = collection(db, "messages", userId, "conversation")
                const lastMessageQuery = query(
                    conversationRef,
                    orderBy("timestamp", "desc"),
                    limit(1)
                )
                
                const snapshot = await getDocs(lastMessageQuery)
                const lastMessage = snapshot.docs[0]?.data()
                
                return lastMessage ? { userId, message: lastMessage } : null
            })
        )

        dispatch(setUsers(lastMessages.filter((msg): msg is LastMessage => msg !== null)))
    } catch (error) {
        console.error("Failed to fetch users:", error)
    } finally {
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
        console.log("error in selected messages conversation ",error)
        dispatch(setIsLoading(false))
    }
}