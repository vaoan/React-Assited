import { User } from "../../application/types/User";

const UserCard = ({ user }: { user: User }) => {
    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.address}</p>
            <p>{user.address.city}</p>
            <p>{user.address.state}</p>
            <p>{user.address.postalCode}</p>
            <p>{user.address.country}</p>
        </div>
    );
};

export default UserCard;