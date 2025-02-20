const baseURL = 'https://dummyjson.com/auth'

const urls = {
    auth: '/login',
    refresh: '/refresh',
    users: (skip: string) => baseURL + '/users?skip=' + skip,
    user: (id:string) => baseURL + '/users/' + id,
    filterUsers: (query:string) => baseURL + '/users/search?q=' + query,
    recipes: (skip: string) => baseURL + '/recipes?skip=' + skip,
    recipe: (id: string) => baseURL + '/recipes/' + id,
    recipeByTag: (recipeTag:string) => baseURL + '/recipes/tag/' + recipeTag,
    filterRecipes: (query:string) => baseURL + '/recipes/search?q=' + query,
}

export {baseURL, urls}

