import React from 'react';

const Buttom = ( { text, type, color } ) => {
    return (
        <button className = { `mui-btn mui-btn--${type || 'raised'} mui-btn--${color || 'primary'}` }>
            { text || 'Sin texto' }
        </button>
    );
}

export default Buttom;