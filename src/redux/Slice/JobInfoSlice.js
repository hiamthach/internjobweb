import { createSlice } from "@reduxjs/toolkit";

const JobInfoSlice = createSlice({
    name: "job-info",
    initialState: {},
    reducers: {
        updateJobInfo: (state, action) => {
            return state = action.payload
        }
    }
})


export default JobInfoSlice