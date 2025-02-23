import {getFilteredUsers, getSingleUser} from "@/services/api.services";
import UsersList from "@/components/users-list/UsersList";

const UsersSearchPage = async ({ searchParams }: { searchParams: { q?: string } }) => {
    const query = searchParams.q ?? "";

    let response;

    if (!isNaN(Number(query))) {
        const user = await getSingleUser(query);
        response = { users: user ? [user] : [] };
    } else {
        response = await getFilteredUsers(query);
    }

    return (
        <div>
            <h1>Search results for "{query}"</h1>
            {response.users && response.users.length > 0 ? (
                <UsersList users={response.users} />
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default UsersSearchPage;
