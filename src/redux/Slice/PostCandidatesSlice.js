import { createSlice } from "@reduxjs/toolkit";

const PostCandidatesSlice = createSlice({
    name: "post-candidates",
    initialState: [],
    reducers: {
        updateCandidates: (state, action) => {
            return state = action.payload
        }
    }
})

export default PostCandidatesSlice