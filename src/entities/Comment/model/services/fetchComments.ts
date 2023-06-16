import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "../types/Comment";

export const fetchComments = createAsyncThunk<Comment[], number, ThunkConfig<string>>(
  "comments/fetchComments",
  async (postId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.get<Comment[]>(`/posts/${postId}/comments`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
    }
  }
);
