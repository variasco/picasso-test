import { StateSchema } from "app/providers/StoreProvider";

export const getComments = (state: StateSchema) => state.postDetails.comments || [];
