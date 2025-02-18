import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";
import Link from "next/link";

interface IProps {
    recipe: IRecipe;
}

const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            <Link href={`recipes/${recipe.id}`}>{recipe.id}. {recipe.name}.</Link> <br/>
        </div>
    );
};

export default Recipe;