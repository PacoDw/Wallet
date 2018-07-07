import React from 'react';

const Input = ( { type, placeholder, handleGetValueInput } ) => {
    return (
        <div class="mui-textfield">
            <input 
                type        = { type        || 'text'}
                placeholder = { placeholder || 'Sin nombre' }
                onChange    = { handleGetValueInput }
                value       = ''
            />
        </div>
    );
};


export default Input;