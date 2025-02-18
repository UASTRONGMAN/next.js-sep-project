import {FC} from "react";
import {getSingleRecipe} from "@/services/api.services";
import SingleRecipe from "@/components/single-recipe/SingleRecipe";

interface IProps {
    params: {id: string};
}

const RecipePage:FC<IProps> = async ({params}) => {
    const {id} = await params;
    const recipe = await getSingleRecipe(id);

    return (
        <div>
            <SingleRecipe recipe={recipe}/>

        </div>
    );
};

export default RecipePage;