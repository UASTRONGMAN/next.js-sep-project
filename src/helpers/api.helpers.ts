import {cookies} from "next/headers";
import {ILoginResponseModel} from "@/models/ILoginResponseModel";


export const retriveCookie = async <T>(key: string): Promise<T> => {
    const cookieStore = await cookies(); // Додаємо await!
    const cookieValue = cookieStore.get(key)?.value; // Дістаємо значення кукі

    if (!cookieValue) return {} as T;

    try {
        return JSON.parse(cookieValue) as T;
    } catch (error) {
        console.error("Error parsing cookie:", error);
        return {} as T;
    }
};


export const setUserCookie = async (key:string, userData: ILoginResponseModel) => {
    const cookieStore = await cookies();

    cookieStore.set(key, JSON.stringify(userData), {
        httpOnly: true,
        secure: true,
        path: "/",
    });
};