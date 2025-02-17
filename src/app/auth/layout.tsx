import React from 'react';
import {Metadata} from "next";
import Header from "@/components/headers/Header";

export const metadata: Metadata = {
    title: 'AuthLayout metadata'
}

type Props = { children: React.ReactNode };

const AuthLayout = ({children}: Props) => {
    return (
        <div>
            <Header/>
            <hr/>
            {children}
        </div>
    );
};

export default AuthLayout;