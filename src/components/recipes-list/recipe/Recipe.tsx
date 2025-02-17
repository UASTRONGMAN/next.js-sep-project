import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";

interface IProps {
    recipe: IRecipe;
}

const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            {recipe.id}. {recipe.name}
        </div>
    );
};

export default Recipe;