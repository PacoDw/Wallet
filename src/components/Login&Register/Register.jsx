import React from 'react';

// Conmponents --------------------------------------
import Input from '../Input';
import Button from '../Buttom';


const Register = ( { handleGetValueInput } ) => {
    return (
        <form id='RegisterForm' action="">
            <Input
                placeholder = 'Nombre' 
                name        = 'nombre'
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
            />
        </form>
    );
};

export default Register;