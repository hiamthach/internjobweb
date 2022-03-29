import { createSlice } from "@reduxjs/toolkit";

const CtyPostSlice = createSlice({
    name: "cty-post",
    initialState: [],
    reducers: {
        updatePosts: (state, action) => {
            return state = action.payload
        }
    }
})


export default CtyPostSlice