import { createSlice } from "@reduxjs/toolkit";
import { PostDetailsSchema } from "../types/PostDetailsSchema";
import { fetchComments, sendComment } from "entities/Comment";
import { fetchPostById } from "../services/fetchPostById";
import { fetchUserById } from "../services/fetchUserById";

const initialState: PostDetailsSchema = {
  isLoading: false,
};

export const PostDetailsSlice = createSlice({
  name: "postDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPostById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.post = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(sendComment.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(sendComment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendComment.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: postDetailsActions } = PostDetailsSlice;
export const { reducer: postDetailsReducer } = PostDetailsSlice;
