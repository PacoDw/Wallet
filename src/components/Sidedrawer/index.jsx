import React from 'react';

const index = ( { handleTittle, handleShowModal } ) => {
    return (
        <div id="sidedrawer" class="mui--no-user-select"> 
            <div id="sidedrawer-brand" className="mui--appbar-line-height">
                <span className="mui--text-title">My Wallet</span>
            </div>
            <div className="mui-divider"></div>
            <ul>
                <li>
                    <strong onClick = { handleTittle }>Gastos</strong>
                    <ul>
                        <li><a href="#">Gastos Fijos</a></li>
                        <li><a href="#">Gastos Imprevisto</a></li>
                        <li><a onClick = { handleShowModal } href="#">Agregar gasto</a></li>
                    </ul>
                </li>
                <li>
                    <strong onClick = { handleTittle }>Ingresos</strong>
                    <ul>
                        <li><a href="#">Ingresos Fijos</a></li>
                        <li><a href="#">Ingresos Extras</a></li>
                        <li><a onClick = { handleShowModal } href="#">Agregar Ingreso</a></li>
                    </ul>
                </li>
                <li>
                <strong onClick = { handleTittle }>Configuración</strong>
                    <ul>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                        <li><a href="#">Mi Perfil</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Cerrar sesión</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default index;
