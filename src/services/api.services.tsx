import {baseURL, urls} from "@/constants/urls";
import {ILoginDataModel} from "@/models/ILoginDataModel";
import {ILoginResponseModel} from "@/models/ILoginResponseModel";

const login = async (loginData: ILoginDataModel):Promise<ILoginResponseModel> => {
     return await fetch(baseURL + urls.auth, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(loginData)
         })
         .then(value => value.json());

}

export {
    login,
}