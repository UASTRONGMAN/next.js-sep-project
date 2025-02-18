import Link from "next/link";
import {retriveCookie} from "@/helpers/api.helpers";
import {ILoginResponseModel} from "@/models/ILoginResponseModel";


const Header = async () => {
    const user = await retriveCookie<ILoginResponseModel>("user");

    return (
        <div>
            <Link href={'/login'}>Login page</Link> <br/>
            <Link href={'/auth/recipes'}>Recipes</Link> <br/>
            <Link href={'/auth/users'}>Users</Link> <br/>
            <img src={user.image} alt="logo of user"/>

        </div>
    );
};

export default Header;