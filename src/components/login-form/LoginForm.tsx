import React from 'react';
import {auth} from "@/server-actions/serverActions";
import Form from "next/form";

const LoginForm = () => {

    
    return (
        <div>
            <Form action={auth} >
                <input type="text" placeholder='username' name='username'/>
                <input type="text" placeholder='password' name='password'/>
                <input type="text" placeholder='expiresInMins' name='expiresInMins'/>
                <button>Log in</button>
            </Form>

        </div>
    );
};

export default LoginForm;