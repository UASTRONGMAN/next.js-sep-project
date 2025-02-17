import Link from "next/link";


const UnauthorizedHeader = () => {
    return (
        <div>
            If you want to have access to information - <Link href={'/login'}>log in</Link>.
        </div>
    );
};

export default UnauthorizedHeader;