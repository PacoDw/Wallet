import React from 'react';

// Conmponents --------------------------------------
import Input from '../Input';
import Button from '../Buttom';


const Register = ( { registerUser } ) => {
    return (
        <form id='RegisterForm' action="">
            <Input
                placeholder = 'Nombre' 
                name        = 'name'
            />
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
                text  = 'Registrar'   
                color = 'accent'
                someClick = { registerUser }          
            />
        </form>
    );
};

export default Register;