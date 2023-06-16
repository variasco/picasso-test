import { StateSchema } from "app/providers/StoreProvider";

export const getUsers = (state: StateSchema) => state.user.users || [];
export const getUsersLoading = (state: StateSchema) => state.user.isLoading || false;
export const getUsersError = (state: StateSchema) => state.user.error;
