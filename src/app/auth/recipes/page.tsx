
import {getRecipes} from "@/services/api.services";
import RecipesList from "@/components/recipes-list/RecipesList";
import Pagination from "@/components/pagination/Pagination";

const RecipesPage = async ({searchParams }: {searchParams: { skip?: string } }) => {
    const skip = searchParams.skip ?? "0";
    const response = await getRecipes(skip);


    return (
        <div>
            {response.recipes && <RecipesList recipes={response.recipes} />}
            <Pagination props={response}/>
        </div>
    );
};

export default RecipesPage;