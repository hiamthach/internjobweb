import { configureStore } from "@reduxjs/toolkit";
import UsersSlice  from "./Slice/UsersSlice";
import CtyPostSlice from "./Slice/CtyPostSlice";
import JobInfoSlice from "./Slice/JobInfoSlice";

const store = configureStore({
    reducer: {
        users: UsersSlice.reducer,
        ctyPosts: CtyPostSlice.reducer,
        jobInfo: JobInfoSlice.reducer
    }
})

export default store