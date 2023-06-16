import { StateSchema } from "app/providers/StoreProvider";

export const getPostDetails = (state: StateSchema) => state.postDetails.post;
