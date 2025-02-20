import {FC} from "react";
import {getRecipes, getSingleUser} from "@/services/api.services";
import SingleUser from "@/components/single-user/SingleUser";

interface IProps {
    params: {id: string};
}

const UserPage:FC<IProps> = async ({params}) => {
    const {id} = await params;
    const user = await getSingleUser(id);
    const response = await getRecipes('0');

    return (
        <div>
            <SingleUser user={user} recipes={id ? response.recipes?.filter(value => value.userId === +id) ?? [] : []}/>

        </div>
    );
};

export default UserPage;