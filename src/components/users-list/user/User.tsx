import {FC} from "react";
import {IUser} from "@/models/IUser";
import Link from "next/link";

interface IProps {
    user:IUser;
}

const User:FC<IProps> = ({user}) => {
    return (
        <div>
            <Link href={`/auth/users/${user.id}`}>{user.id}. {user.firstName} {user.lastName}.</Link>
        </div>
    );
};

export default User;