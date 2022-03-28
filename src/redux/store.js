import { configureStore } from "@reduxjs/toolkit";
import UsersSlice  from "./Slice/UsersSlice";

const store = configureStore({
    reducer: {
        users: UsersSlice.reducer,
    }
})

export default store