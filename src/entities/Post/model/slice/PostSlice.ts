import { createSlice } from "@reduxjs/toolkit";
import { fetchPostsByUser } from "../services/fetchPostsByUser";
import { PostsSchema } from "../types/Post";

const initialState: PostsSchema = {
  isLoading: false,
  error: undefined,
  posts: [],
};

export const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByUser.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchPostsByUser.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPostsByUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: postActions } = PostSlice;
export const { reducer: postReducer } = PostSlice;
