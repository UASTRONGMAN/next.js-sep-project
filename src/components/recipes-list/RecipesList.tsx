import {FC} from "react";
import {IRecipe} from "@/models/IRecipe";
import Recipe from "@/components/recipes-list/recipe/Recipe";

interface IProps {
    recipes: IRecipe[];
}

const RecipesList:FC<IProps> = ({recipes}) => {
    return (
        <div>
            {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
        </div>
    );
};

export default RecipesList;