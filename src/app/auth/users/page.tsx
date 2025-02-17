import {getUsers} from "@/services/api.services";
import UsersList from "@/components/users-list/UsersList";
import Pagination from "@/components/pagination/Pagination";


const UsersPage = async ({searchParams }: {searchParams: { skip?: string } }) => {
    const skip = searchParams.skip ?? "0";
    const response = await getUsers(skip);

    return (
        <div>
            {response.users &&  <UsersList users={response.users} />}
            <Pagination props={response}/>
        </div>
    );
};

export default UsersPage;