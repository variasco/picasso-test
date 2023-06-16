import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Post } from "entities/Post";

export const fetchPostById = createAsyncThunk<Post, number, ThunkConfig<string>>(
  "postDetails/fetchPostById",
  async (postId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.get<Post>(`/posts/${postId}`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
    }
  }
);
