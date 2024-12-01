// export const fetchUsers = createAsyncThunk(
//   "user/fetchUsers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const usersRef = collection(db, "messages");
//       const q = query(usersRef);
//       const querySnapshot = await getDocs(q);
//       const users = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import { appDispatch } from "../store";
import { setIsLoading, setUsers } from "./reducers";
import { message } from "antd";

//       console.log("usersss: ", users)

//       return users;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const getUsers = () => async(dispatch: appDispatch) => {
    dispatch(setIsLoading(true))
    try {
        const usersRef = collection(db, "messages");
        const q = query(usersRef);
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    
        console.log("usersss: ", users)
        dispatch(setUsers(users))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        message.error(error)
        dispatch(setIsLoading(false))
    }
   
}