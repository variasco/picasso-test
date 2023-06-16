import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Post } from "../types/Post";

export const fetchPostsByUser = createAsyncThunk<Post[], number, ThunkConfig<string>>(
  "posts/fetchPostsByUser",
  async (userId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.get<Post[]>(`/posts${userId ? "?userId=" + userId : ""}`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
    }
  }
);
