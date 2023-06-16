import { TextField, Typography, Button, Box, Snackbar, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import cn from "classnames";
import { useCallback, useState } from "react";
import { useAppDispatch } from "shared/hooks";
import { sendComment } from "entities/Comment";

export interface AddCommentFormProps {
  className?: string;
  postId: number;
}

export const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, postId } = props;
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const onSendClicked = useCallback(() => {
    if (value.length > 0) {
      dispatch(sendComment({ value, postId }))
        .then(() => onSuccess())
        .catch(() => onError());
      setValue("");
    }
  }, [dispatch, postId, value]);

  const onSuccess = () => {
    setOpenSuccess(true);
  };

  const onError = () => {
    setOpenError(true);
  };

  const handleCloseSucces = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setOpenSuccess(false);
  };

  const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setOpenError(false);
  };

  return (
    <div className={cn(className)}>
      <Typography>Add comment</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          sx={{ width: 400 }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Comment text..."
          multiline
          variant="filled"
        />
        <Button variant="text" onClick={onSendClicked}>
          <SendIcon />
        </Button>
        <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSucces}>
          <Alert severity="success" sx={{ width: "100%" }} onClose={handleCloseSucces}>
            Comment has been sent
          </Alert>
        </Snackbar>
        <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
          <Alert severity="error" sx={{ width: "100%" }} onClose={handleCloseError}>
            Error!
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};
