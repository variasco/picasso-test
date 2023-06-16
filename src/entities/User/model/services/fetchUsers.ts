import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User } from "../types/User";

export const fetchUsers = createAsyncThunk<User[], void, ThunkConfig<string>>(
  "users/fetchUsers",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.get<User[]>(`/users`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
    }
  }
);
