'use server'

import {login} from "@/services/api.services";
import {redirect} from "next/navigation";

export const auth = async (loginData:FormData) => {
    await login(loginData);
    redirect('/auth')
}