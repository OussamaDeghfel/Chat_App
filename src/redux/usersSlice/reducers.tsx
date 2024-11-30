import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";

export interface UserStateType {
    id:string ;
  sender: string;
  text: string;
  timestamp: Date;
}

export interface usersList {
  usersList: UserStateType[];
  isLoading: boolean;
  error: string | null;
}

const initialState: usersList = {
  usersList: [],
  isLoading: false,
  error: null,
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const usersRef = collection(db, "messages");
      const q = query(usersRef);
      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        sender: doc.data().sender,
        text: doc.data().text,
        timestamp: doc.data().timestamp,
      }));

      return users;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<UserStateType[]>) => {
          state.isLoading = false;
          state.usersList = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
