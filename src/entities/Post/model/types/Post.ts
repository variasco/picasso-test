export interface PostsSchema {
  isLoading: boolean;
  posts: Post[];
  error?: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
