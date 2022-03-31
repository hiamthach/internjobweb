import { createSlice } from "@reduxjs/toolkit";

const CtyPostSettingSlice = createSlice({
    name: "cty-post-setting",
    initialState: {},
    reducers: {
        updatePostSetting: (state, action) => {
            return state = action.payload
        }
    }
})


export default CtyPostSettingSlice