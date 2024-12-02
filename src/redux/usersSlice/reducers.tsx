import { createSlice } from "@reduxjs/toolkit";

export interface message{
  text: string
  sender: string
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
}
export interface MessageStateType {
  userId:string;
  message: message[]
}

export interface usersList {
  usersList: MessageStateType[];
  conversation: MessageStateType[]
  isLoading: boolean;
  error: string | null;
}

const initialState: usersList = {
  usersList: [],
  conversation: [],
  isLoading: false,
  error: null,
};

// Async thunk to fetch users
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

//       console.log("usersss: ", users)

//       return users;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const usersSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usersList = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setConversation: (state, action) => {
      state.conversation = action.payload
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchUsers.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(
  //       fetchUsers.fulfilled,
  //       (state, action: PayloadAction<UserStateType[]>) => {
  //         state.isLoading = false;
  //         state.usersList = action.payload;
  //       }
  //     )
  //     .addCase(fetchUsers.rejected, (state, action: PayloadAction<any>) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { setUsers, setIsLoading, setConversation } = usersSlice.actions;

export default usersSlice.reducer;
