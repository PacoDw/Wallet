import React from 'react';

// Conmponents --------------------------------------
import Input  from '../Input';
import Button from '../Buttom';


const AddIncome = ( { handleGetValueInput } ) => {
    return (
        <form id='LoginForm' action="">
            <Input
                placeholder = { 'Nombre de Ingreso' }
                handleGetValueInput = { handleGetValueInput }                 
            />            
            <Input
                placeholder = { 'Tipo de Ingreso' }
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

export default AddIncome;