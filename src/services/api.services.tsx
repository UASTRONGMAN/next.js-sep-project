import {baseURL, urls} from "@/constants/urls";
import {ILoginResponseModel} from "@/models/ILoginResponseModel";
import {retriveCookie, setUserCookie} from "@/helpers/api.helpers";
import {IResponseModel} from "@/models/IResponseModel";
import {IUser} from "@/models/IUser";
import {IRecipe} from "@/models/IRecipe";
import {ITokenPair} from "@/models/ITokenPair";


const login = async (loginData: FormData):Promise<ILoginResponseModel> => {
    const data = await fetch(baseURL + urls.auth, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            username: loginData.get('username'),
            password: loginData.get('password'),
            expiresInMins: loginData.get('expiresInMins'),
        }),
    })
         .then(value => value.json());
    await setUserCookie('user', data);
    return data
}

const refresh = async () => {

    const user = await retriveCookie<ILoginResponseModel>("user");
    const response = await fetch(baseURL + urls.refresh, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            refreshToken: user.refreshToken,
        }),
        credentials: 'include'
    });

    const data:ITokenPair = await response.json()
    user.accessToken = data.accessToken
    user.refreshToken = data.refreshToken
    await setUserCookie('user', user);
}

const getUsers = async (skip:string): Promise<IResponseModel> => {

    const user = await retriveCookie<ILoginResponseModel>("user");
    return await fetch(urls.users(skip), {
        method: 'GET',
        headers: {
            Authorization: user ? `Bearer ${user.accessToken}` : "",
        },
    })
        .then(value => value.json());
}

const getFilteredUsers = async (query:string):Promise<IResponseModel> => {
    const user = await retriveCookie<ILoginResponseModel>("user");
    return await fetch(urls.filterUsers(query), {
        method: 'GET',
        headers: {
            Authorization: user ? `Bearer ${user.accessToken}` : "",
        },
    })
        .then(value => value.json());
}


const getRecipes = async (skip:string): Promise<IResponseModel> => {

    const user = await retriveCookie<ILoginResponseModel>("user");
    return await fetch(urls.recipes(skip), {
        method: 'GET',
        headers: {
            Authorization: user ? `Bearer ${user.accessToken}` : "",
        },
    })
        .then(value => value.json());
}

const getSingleUser = async (id:string): Promise<IUser> => {

    const user = await retriveCookie<ILoginResponseModel>("user");
    return await fetch(urls.user(id), {
        method: 'GET',
        headers: {
            Authorization: user ? `Bearer ${user.accessToken}` : "",
        },
    })
        .then(value => value.json());
}

const getSingleRecipe = async (id:string): Promise<IRecipe> => {

    const user = await retriveCookie<ILoginResponseModel>("user");
    return await fetch(urls.recipe(id), {
        method: 'GET',
        headers: {
            Authorization: user ? `Bearer ${user.accessToken}` : "",
        },
    })
        .then(value => value.json());
}

const getFilteredRecipes = async (query:string):Promise<IResponseModel> => {
    const user = await retriveCookie<ILoginResponseModel>("user");
    return await fetch(urls.filterRecipes(query), {
        method: 'GET',
        headers: {
            Authorization: user ? `Bearer ${user.accessToken}` : "",
        },
    })
        .then(value => value.json());
}

const getRecipesByTag = async (tag:string):Promise<IResponseModel> => {
    const user = await retriveCookie<ILoginResponseModel>("user");
    return await fetch(urls.recipeByTag(tag), {
        method: 'GET',
        headers: {
            Authorization: user ? `Bearer ${user.accessToken}` : "",
        },
    })
        .then(value => value.json());
}



export {
    login,
    refresh,
    getUsers,
    getRecipes,
    getSingleUser,
    getSingleRecipe,
    getFilteredUsers,
    getFilteredRecipes,
    getRecipesByTag,
}
