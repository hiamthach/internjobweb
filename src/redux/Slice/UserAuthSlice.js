import { createSlice } from "@reduxjs/toolkit";

const UserAuthSlice = createSlice({
    name: "user-auth",
    initialState: true,
    reducers: {
        updateUserAuth: (state, action) => {
            return state = action.payload
        }
    }
})


export default UserAuthSlice