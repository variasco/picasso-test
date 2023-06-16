import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import cn from "classnames";
import { Comment } from "../../model/types/Comment";

export interface CommentsListProps {
  className?: string;
  comments: Comment[];
}

export const CommentsList = (props: CommentsListProps) => {
  const { className, comments } = props;

  if (!comments.length)
    return (
      <Typography variant="h3" color={"Highlight"}>
        Комментарии отсутствуют
      </Typography>
    );

  return (
    <Grid className={cn(className)} container spacing={2} margin={0}>
      <Grid item xs={12} md={6}>
        <Typography variant="h3">Comments</Typography>
        <List>
          {comments.map((comment) => (
            <ListItem key={comment.id}>
              <ListItemAvatar>
                <Avatar>{comment.email.slice(0, 2)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={comment.email} secondary={comment.body} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
