import {baseURL, urls} from "@/constants/urls";
import {ILoginResponseModel} from "@/models/ILoginResponseModel";
import {retriveCookie, setUserCookie} from "@/helpers/api.helpers";
import {IResponseModel} from "@/models/IResponseModel";
import {IUser} from "@/models/IUser";
import {IRecipe} from "@/models/IRecipe";


const login = async (loginData: FormData):Promise<ILoginResponseModel> => {
    const data = await fetch(baseURL + urls.auth, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            username: loginData.get('username'),
            password: loginData.get('password'),
        }),
    })
         .then(value => value.json());
    await setUserCookie('user', data);
    return data
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



export {
    login,
    getUsers,
    getRecipes,
    getSingleUser,
    getSingleRecipe
}
