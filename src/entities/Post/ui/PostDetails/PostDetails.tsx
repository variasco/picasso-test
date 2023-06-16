import { Card, CardContent, Typography } from "@mui/material";
import cn from "classnames";
import { FC } from "react";
import { Post } from "../../model/types/Post";
export interface PostDetailsProps {
  className?: string;
  post: Post;
}

export const PostDetails: FC<PostDetailsProps> = (props: PostDetailsProps) => {
  const { className, post } = props;

  return (
    <Card className={cn( className)}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};
