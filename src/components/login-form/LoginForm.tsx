'use client'

import React from 'react';
import {useForm} from "react-hook-form";

const LoginForm = () => {
    
    const {register, handleSubmit} = useForm();
    
    return (
        <div>
            <form onSubmit={handleSubmit(auth)}>
                <input type="text" {...register('username')} placeholder={'username'}/>
                <input type="text" {...register('password')} placeholder={'password'}/>
                {/*<input type="text" {...register('expiresInMins')} placeholder={'expiresInMins'}/>*/}
                <button>Log in</button>
            </form>
        </div>
    );
};

export default LoginForm;