import React from 'react';

const Input = ( { type, placeholder, value, handleGetValueInput } ) => {
    return (
        <div className="mui-textfield mui-textfield--float-label">
            <input 
                type        = { type || 'text'}
                onChange    = { handleGetValueInput }
                value       = { value }
            />
            <label>{ placeholder || 'Sin nombre' }</label>
        </div>
    );
};


export default Input;