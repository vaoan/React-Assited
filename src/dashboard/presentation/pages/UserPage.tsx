import useGetUserData from "../hooks/useGetUserData";
import UserGrid from "../components/UserGrid";

const UserPage = () => {

    const { data: users } = useGetUserData();

    return (
        <div>
            <UserGrid users={users?.users || []} />
        </div>
    )
}

export default UserPage;