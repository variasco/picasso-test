import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User } from "entities/User";

export const fetchUserById = createAsyncThunk<User, number, ThunkConfig<string>>(
  "postDetails/fetchUserById",
  async (userId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.get<User>(`/users/${userId}`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
    }
  }
);
