import { Comment } from "entities/Comment";
import { Post } from "entities/Post";
import { User } from "entities/User";

export interface PostDetailsSchema {
  isLoading: boolean;
  error?: string;
  comments?: Comment[];
  post?: Post;
  user?: User;
}
