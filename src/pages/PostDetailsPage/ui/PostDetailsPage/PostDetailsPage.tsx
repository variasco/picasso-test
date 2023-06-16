import { CircularProgress } from "@mui/material";
import cn from "classnames";
import { fetchComments } from "entities/Comment";
import { CommentsList } from "entities/Comment/ui/CommentsList/CommentsList";
import { PostDetails } from "entities/Post";
import { UserDetails } from "entities/User";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";
import { getComments } from "../../model/selectors/getComments";
import { getPostDetails } from "../../model/selectors/getPostDetails";
import { getUserDetails } from "../../model/selectors/getUserDetails";
import { fetchPostById } from "../../model/services/fetchPostById";
import { fetchUserById } from "../../model/services/fetchUserById";
import styles from "./PostDetailsPage.module.scss";
import { AddCommentForm } from "features/AddCommentForm";

export interface PostDetailsPageProps {
  className?: string;
}

export const PostDetailsPage = (props: PostDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useSelector(getComments);
  const user = useSelector(getUserDetails);
  const post = useSelector(getPostDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchComments(Number(id)));
      dispatch(fetchPostById(Number(id)));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      dispatch(fetchUserById(post.userId));
    }
  }, [dispatch, post]);

  if (!post || !user || !comments) {
    return (
      <div className={cn(className)}>
        <CircularProgress disableShrink />
      </div>
    );
  }

  return (
    <div className={cn(styles.root, className)}>
      <PostDetails className={styles.postCard} post={post} />
      <UserDetails className={styles.userCard} user={user} />
      <AddCommentForm postId={post.id} />
      <CommentsList comments={comments} />
    </div>
  );
};
