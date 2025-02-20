import React, {FC} from 'react';
import {IRecipe} from "@/models/IRecipe";
import Link from "next/link";
import {getSingleUser} from "@/services/api.services";

interface IProps{
    recipe: IRecipe;
}

const SingleRecipe:FC<IProps> = async ({recipe}) => {
    const user = await getSingleUser(recipe.userId.toString());
    return (
        <div>
            <div>
                <h4>{recipe.id} {recipe.name}</h4>

                <p>Tags:</p>
                <p>{recipe.tags + ''}</p>
                <p>Cuisine - {recipe.cuisine}</p>
                <p>Owner of recipe: <Link href={`/auth/users/${recipe.userId}`}>{user.firstName} {user.lastName}</Link></p>
            </div>
            <div><img src={recipe.image} alt="image"/></div>
        </div>
    );
};

export default SingleRecipe;