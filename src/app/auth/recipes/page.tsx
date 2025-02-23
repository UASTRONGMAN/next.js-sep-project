
import {getRecipes} from "@/services/api.services";
import RecipesList from "@/components/recipes-list/RecipesList";
import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";

const RecipesPage = async ({searchParams }: {searchParams: { skip?: string } }) => {
    const skip = searchParams.skip ?? "0";
    const response = await getRecipes(skip);


    return (
        <div>
            <Search request_type="recipes" />
            {response.recipes && <RecipesList recipes={response.recipes} />}
            <Pagination props={response}/>
        </div>
    );
};

export default RecipesPage;