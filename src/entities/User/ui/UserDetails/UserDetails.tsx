import { Card, CardContent, Typography } from "@mui/material";
import cn from "classnames";
import { User } from "../../model/types/User";

export interface UserDetailsProps {
  className?: string;
  user: User;
}

export const UserDetails = (props: UserDetailsProps) => {
  const { className, user } = props;

  return (
    <Card className={cn(className)}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Author: {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Username: {user.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: {user.address.city + ", " + user.address.street + ", " + user.address.suite}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Сompany: {user.company.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {user.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Website: {user.website}
        </Typography>
      </CardContent>
    </Card>
  );
};
