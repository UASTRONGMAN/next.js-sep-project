import {FC} from "react";
import {getSingleUser} from "@/services/api.services";
import SingleUser from "@/components/single-user/SingleUser";

interface IProps {
    params: {id: string};
}

const UserPage:FC<IProps> = async ({params}) => {
    const {id} = await params;
    const user = await getSingleUser(id);

    return (
        <div>
            <SingleUser user={user}/>

        </div>
    );
};

export default UserPage;