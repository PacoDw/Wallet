import React from 'react';

// Conmponents --------------------------------------
import Input  from '../Input';
import Button from '../Buttom';

import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';


const AddOutcome = ( { AddOutcome } ) => {
    return (
        <form id='AddOutcome' action="">
            <Select name="movement_type" id="" defaultValue="0">
                <Option id='0' value="0" label='Tipo de movimiento' disabled         />
                <Option id='1' value="1" label='Ingreso Fijo'       />
                <Option id='2' value="2" label='Ingreso Imprevisto' />
            </Select>
      
            <Select name="id_frequency" id="" defaultValue="0">
                <Option id="0" value="0" label='Frecuencia de gasto' disabled />
                <Option id="1" value="1" label='Diario'   />
                <Option id="2" value="2" label='Semanal'  />
                <Option id="3" value="3" label='Quincenal'/>
                <Option id="4" value="4" label='Mensual'  />
                <Option id="5" value="5" label='Anual'    />
                <Option id="6" value="6" label='Unico'    />
            </Select>

            <Input
                type        = 'number'
                placeholder = 'Monto $'
                name        = 'amount'
            />
            <Input
                type        = 'text'
                placeholder = 'Descripción'
                name        = 'description'
            />
            <Button 
                text        = 'Agregar'  
                someClick   = { AddOutcome }
            />
        </form>
    );
};

export default AddOutcome;