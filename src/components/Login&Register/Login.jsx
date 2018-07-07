import React from 'react';

// Conmponents --------------------------------------
import Input  from '../Input';
import Button from '../Buttom';


const Login = ( { handleGetValueInput } ) => {
    return (
        <form id='LoginForm' action="">
            <Input
                placeholder = { 'Nombre' }
                handleGetValueInput = { handleGetValueInput }                 
            />            
            <Input
                type        = { 'password' }
                placeholder = { 'Password' }
                handleGetValueInput = { handleGetValueInput }
            />
            <Button 
                text = { 'Entrar' }

            />
        </form>
    );
};

export default Login;