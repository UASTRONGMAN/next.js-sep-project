import Link from "next/link";


const Header = () => {

    return (
        <div>
            <Link href={'/login'}>Login page</Link> <br/>
            <Link href={'/auth/recipes'}>Recipes</Link> <br/>
            <Link href={'/auth/users'}>Users</Link> <br/>
                {/*{authResponse && <img src={authResponse.image} alt="logo of user"/>}*/}

        </div>
    );
};

export default Header;