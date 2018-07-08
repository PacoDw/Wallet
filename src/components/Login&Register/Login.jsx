import React from 'react';

// Conmponents --------------------------------------
import Input  from '../Input';
import Button from '../Buttom';


const Login = ( { loginUser } ) => {
    return (
        <form id='LoginForm' action="">
            <Input
                placeholder = 'Email' 
                name        = 'email'                     
            />            
            <Input
                type        = 'password' 
                placeholder = 'Password' 
                name        = 'password'                     
            />
            <Button 
                text      = { 'Entrar' }
                someClick = { loginUser }
            />
        </form>
    );
};

export default Login;