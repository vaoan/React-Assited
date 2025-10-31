import { User } from "../../application/types/User";
import UserCard from "./UserCard";

const UserGrid = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;