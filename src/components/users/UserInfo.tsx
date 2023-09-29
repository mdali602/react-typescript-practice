import { User } from "../../types/User.types";

type UserInfoProps = {
  user: User;
};
export default function UserInfo(props: UserInfoProps) {
  const { user } = props;
  return <li key={user.id}>{user.name}</li>;
}
