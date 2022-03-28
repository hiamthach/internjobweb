import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
    name: "users",
    initialState: '',
    reducers: {
        updateUsers: (state, action) => {
            return state = action.payload
        }
    }
})


export default UsersSlice

