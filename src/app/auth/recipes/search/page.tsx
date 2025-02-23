import {getFilteredRecipes, getSingleRecipe} from "@/services/api.services";
import RecipesList from "@/components/recipes-list/RecipesList";

const RecipesSearchPage = async ({ searchParams }: { searchParams: { q?: string } }) => {
    const query = searchParams.q ?? "";

    let response;

    if (!isNaN(Number(query))) {
        const recipe = await getSingleRecipe(query);
        response = { recipes: recipe ? [recipe] : [] };
    } else {
        response = await getFilteredRecipes(query);
    }

    return (
        <div>
            <h1>Search results for "{query}"</h1>
            {response.recipes && response.recipes.length > 0 ? (
                <RecipesList recipes={response.recipes} />
            ) : (
                <p>No recipes found</p>
            )}
        </div>
    );
};

export default RecipesSearchPage;
