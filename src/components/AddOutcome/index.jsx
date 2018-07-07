import React from 'react';

// Conmponents --------------------------------------
import Input  from '../Input';
import Button from '../Buttom';


const AddOutcome = ( { handleGetValueInput } ) => {
    return (
        <form id='LoginForm' action="">
            <Input
                placeholder = { 'Nombre de Gasto' }
                handleGetValueInput = { handleGetValueInput }                 
            />            
            <Input
                placeholder = { 'Tipo de Gasto' }
                handleGetValueInput = { handleGetValueInput }
            />
            <Input
                type = {'number'}
                placeholder = { 'Monto $' }
                handleGetValueInput = { handleGetValueInput }
            />
            <Button 
                text = { 'Agregar' }

            />
        </form>
    );
};

export default AddOutcome;