import {FC} from "react";
import {IUser} from "@/models/IUser";

interface IProps {
    user: IUser;
}



const SingleUser:FC<IProps> = ({user}) => {
    return (
        <div>
            <h4>{user.id}. {user.firstName} {user.lastName}</h4>
            <p>Age - {user.age}.</p>
            <p>Email - {user.email}.</p>
            <p>Date of birth - {user.birthDate}.</p>
            <p>Phone number - {user.phone}.</p>
            <p>User recipes:</p>
        </div>
    );
};

export default SingleUser;