import React from 'react';

// Conmponents --------------------------------------
import Input from '../Input';

const Login = ( { handleGetValueInput } ) => {
    return (
        <div>
            <Input
                placeholder = { 'Nombre' }
                 
            />            
            <Input
                type        = { 'password' }
                placeholder = { 'Password' }
                handleGetValueInput = { handleGetValueInput }

            />            

        </div>
    );
};

export default Login;