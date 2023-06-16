import { StateSchema } from "app/providers/StoreProvider";

export const getUserDetails = (state: StateSchema) => state.postDetails.user;
