import {
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { RoutePath } from "app/providers/router";
import cn from "classnames";
import { fetchPostsByUser, getPosts, getPostsLoading } from "entities/Post";
import { fetchUsers, getUsers, getUsersLoading } from "entities/User";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";
import styles from "./PostsPage.module.scss";

export interface PostsPageProps {
  className?: string;
}

export const PostsPage = (props: PostsPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState<number>(0);
  const posts = useSelector(getPosts);
  const users = useSelector(getUsers);
  const loadingPosts = useSelector(getPostsLoading);
  const loadingUsers = useSelector(getUsersLoading);

  const onOpenPost = useCallback(
    (id: number) => {
      navigate(RoutePath.post_details + id);
    },
    [navigate]
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPostsByUser(selectedUser));
  }, [dispatch, selectedUser]);

  return loadingPosts || loadingUsers ? (
    <div className={cn(styles.root, className)}>
      <CircularProgress disableShrink />
    </div>
  ) : (
    <div className={cn(styles.root, className)}>
      <FormControl>
        <InputLabel id="user-select-label">User</InputLabel>
        <Select
          sx={{ width: 250 }}
          labelId="user-select-label"
          id="user-select"
          value={selectedUser}
          label="Label"
          onChange={(e: SelectChangeEvent<number>) => setSelectedUser(Number(e.target.value))}
        >
          <MenuItem value={0}>None</MenuItem>
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container>
        <Grid item xs={12} md={8} display={"flex"} flexDirection={"column"} gap={"16px"}>
          {posts.map((post) => (
            <Card key={post.id} sx={{ maxWidth: "100%" }} onClick={() => onOpenPost(post.id)}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
