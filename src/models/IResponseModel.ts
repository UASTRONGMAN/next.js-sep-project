import {IUser} from "@/models/IUser";
import {IRecipe} from "@/models/IRecipe";


export interface IResponseModel {
    users?:IUser[],
    recipes?: IRecipe[],
    total:number,
    skip:number,
    limit:number
}