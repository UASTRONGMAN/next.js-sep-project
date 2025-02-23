import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";
import Link from "next/link";

interface IProps {
    recipe: IRecipe;
}

const Recipe:FC<IProps> = ({recipe}) => {
    return (
        <div>
            <Link href={`/auth/recipes/${recipe.id}`}>{recipe.id}. {recipe.name}.</Link> <br/>
            {recipe.tags.map((tag) => (
                <Link href={`/auth/recipes/tag/${tag}`} key={tag}>{tag + ' '}</Link>
            ))}
        </div>
    );
};

export default Recipe;