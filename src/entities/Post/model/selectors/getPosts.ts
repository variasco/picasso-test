import { StateSchema } from "app/providers/StoreProvider";

export const getPosts = (state: StateSchema) => state.post.posts || [];
export const getPostsLoading = (state: StateSchema) => state.post.isLoading || false;
export const getPostsError = (state: StateSchema) => state.post.error;
