import { configureStore } from "@reduxjs/toolkit";

import UserAuthSlice from "./Slice/UserAuthSlice";
import UsersSlice  from "./Slice/UsersSlice";
import CtyPostSlice from "./Slice/CtyPostSlice";
import JobInfoSlice from "./Slice/JobInfoSlice";
import CtyPostSettingSlice from "./Slice/CtyPostSettingSlice";

const store = configureStore({
    reducer: {
        users: UsersSlice.reducer,
        ctyPosts: CtyPostSlice.reducer,
        ctyPostSetting: CtyPostSettingSlice.reducer,
        jobInfo: JobInfoSlice.reducer,
        userAuth: UserAuthSlice.reducer,
    }
})

export default store