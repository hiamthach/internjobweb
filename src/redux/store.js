import { configureStore } from "@reduxjs/toolkit";
import UsersSlice  from "./Slice/UsersSlice";
import CtyPostSlice from "./Slice/CtyPostSlice";

const store = configureStore({
    reducer: {
        users: UsersSlice.reducer,
        ctyPosts: CtyPostSlice.reducer,
    }
})

export default store