import {FC} from "react";
import {IUser} from "@/models/IUser";
import User from "@/components/users-list/user/User";

interface IProps{
    users:IUser[]
}

const UsersList:FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersList;