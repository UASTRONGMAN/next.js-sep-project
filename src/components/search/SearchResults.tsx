import { getSingleUser, getFilteredUsers, getSingleRecipe, getFilteredRecipes } from "@/services/api.services";
import { IUser } from "@/models/IUser";
import { IRecipe } from "@/models/IRecipe";

interface SearchResultsProps {
    query: string;
    request_type: "users" | "recipes";
}

const SearchResults = async ({ query, request_type }: SearchResultsProps) => {
    if (!query) return <p>Введіть запит для пошуку...</p>;

    let results: (IUser | IRecipe)[] = [];

    if (request_type === "users") {
        if (!isNaN(Number(query))) {
            // Якщо введене значення - число, шукаємо користувача за ID
            const user = await getSingleUser(query);
            results = user ? [user] : [];
        } else {
            // Інакше шукаємо за іменем або іншим параметром
            const {users} = await getFilteredUsers(query);
            results = users ?? [];
        }
    } else {
        if (!isNaN(Number(query))) {
            // Якщо введене значення - число, шукаємо рецепт за ID
            const recipe = await getSingleRecipe(query);
            results = recipe ? [recipe] : [];
        } else {
            // Інакше шукаємо за назвою
            const {recipes} = await getFilteredRecipes(query);
            results = recipes ?? [];
        }
    }

    return (
        <ul>
            {results.length > 0 ? (
                results.map((item) => (
                    <li key={item.id}>
                        {request_type === "users"
                            ? (item as IUser).username
                            : (item as IRecipe).name}
                    </li>
                ))
            ) : (
                <p>Нічого не знайдено</p>
            )}
        </ul>
    );
};

export default SearchResults;
