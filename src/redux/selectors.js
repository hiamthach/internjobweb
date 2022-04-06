import { createSelector } from "@reduxjs/toolkit";

export const selectUser = state => state.users
export const selectCtyPostList = state => state.ctyPosts
export const selectJobInfo = state => state.jobInfo
export const selectUserAuth = state => state.userAuth
export const selectPostSetting = state => state.ctyPostSetting
export const selectPostCandidates = state => state.postCandidates