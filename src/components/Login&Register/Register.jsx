import React from 'react';

// Conmponents --------------------------------------
import Input from '../Input';
import Button from '../Buttom';


const Register = ( { handleGetValueInput } ) => {
    return (
        <form id='RegisterForm' action="">
            <Input
                placeholder = { 'Nombre' }
                handleGetValueInput = { handleGetValueInput }                 
            />
            <Input
                placeholder = { 'Email' }
                handleGetValueInput = { handleGetValueInput }                 
            />          
            <Input
                type        = { 'password' }
                placeholder = { 'Password' }
                handleGetValueInput = { handleGetValueInput }
            />
            <Button 
                text  = { 'Registrar'}   
                color = { 'accent' }         
            />
        </form>
    );
};

export default Register;