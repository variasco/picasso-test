import { AxiosInstance } from "axios";
import { PostsSchema } from "entities/Post";
import { UsersSchema } from "entities/User";
import { PostDetailsSchema } from "pages/PostDetailsPage";

export interface StateSchema {
  post: PostsSchema;
  user: UsersSchema;
  postDetails: PostDetailsSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
