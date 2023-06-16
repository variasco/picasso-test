export { getComments } from "./model/selectors/getComments";
export { getPostDetails } from "./model/selectors/getPostDetails";
export { getUserDetails } from "./model/selectors/getUserDetails";
export { fetchPostById } from "./model/services/fetchPostById";
export { fetchUserById } from "./model/services/fetchUserById";
export { postDetailsActions, postDetailsReducer } from "./model/slice/PostDetailsSlice";
export type { PostDetailsSchema } from "./model/types/PostDetailsSchema";
export { PostDetailsPage } from "./ui/PostDetailsPage/PostDetailsPage";
