import { createSelector } from "@reduxjs/toolkit";

export const selectUser = state => state.users
export const selectCtyPostList = state => state.ctyPosts
export const selectJobInfo = state => state.jobInfo