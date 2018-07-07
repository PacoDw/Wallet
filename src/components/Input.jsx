import React from 'react';

const Input = ( { type, placeholder } ) => {
    return (
        <div class="mui-textfield">
            <input 
                type        = { type        || 'text'}
                placeholder = { placeholder || 'Sin nombre' }
            />
        </div>
    );
};


export default Input;