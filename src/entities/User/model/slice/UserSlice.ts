import { createSlice } from "@reduxjs/toolkit";
import { UsersSchema } from "../types/User";
import { fetchUsers } from "../services/fetchUsers";

const initialState: UsersSchema = {
  error: undefined,
  isLoading: false,
  users: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
