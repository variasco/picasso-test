import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

type SendCommentResponse = {
  body: string;
  id: number;
  postId: number;
};

export const sendComment = createAsyncThunk<
  SendCommentResponse,
  { value: string; postId: number },
  ThunkConfig<string>
>("comments/sendComment", async ({ value, postId }, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;
  try {
    const response = await extra.api.post<SendCommentResponse>("/comments", {
      body: value,
      postId,
    });

    if (!response.data) throw new Error();

    return response.data;
  } catch (e: any) {
    console.log(e);
    return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
  }
});
