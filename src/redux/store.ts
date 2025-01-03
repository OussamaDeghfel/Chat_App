import {configureStore} from "@reduxjs/toolkit"
import { usersSlice } from "./usersSlice/reducers"

export const store = configureStore({
    reducer:{
        user: usersSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type appDispatch = typeof store.dispatch