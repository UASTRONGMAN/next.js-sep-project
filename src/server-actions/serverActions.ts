'use server'

import {login} from "@/services/api.services";

const save = async (loginData) => {
    await login(loginData);
}