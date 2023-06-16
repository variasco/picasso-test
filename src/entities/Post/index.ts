export { getPosts, getPostsError, getPostsLoading } from "./model/selectors/getPosts";
export { fetchPostsByUser } from "./model/services/fetchPostsByUser";
export { postActions, postReducer } from "./model/slice/PostSlice";
export type { Post, PostsSchema } from "./model/types/Post";
export { PostDetails } from "./ui/PostDetails/PostDetails";
