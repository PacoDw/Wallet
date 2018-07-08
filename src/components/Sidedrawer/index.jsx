import React from 'react';

const index = ( { handleTittle, handleShowModal, handleGetPanel } ) => {
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
                        <li><a name='gastos-fijos'       onClick = { handleGetPanel } href="#">Gastos Fijos</a></li>
                        <li><a name='gastos-imprevistos' onClick = { handleGetPanel } href="#">Gastos Imprevisto</a></li>
                        <li><a name='editar-gastos'      onClick = { handleGetPanel } href="#">Editar Gastos </a></li>
                        <li><a  onClick = { handleShowModal } href="#">Agregar Gasto</a></li>
                    </ul>
                </li>
                <li>
                    <strong onClick = { handleTittle }>Ingresos</strong>
                    <ul>
                        <li><a name='ingresos-fijos'  onClick = { handleGetPanel } href="#">Ingresos Fijos</a></li>
                        <li><a name='ingresos-extras' onClick = { handleGetPanel } href="#">Ingresos Extras</a></li>
                        <li><a name='editar-ingresos' onClick = { handleGetPanel } href="#">Editar Ingresos</a></li>
                        <li><a onClick = { handleShowModal } href="#">Agregar Ingreso</a></li>
                    </ul>
                </li>
                <li>
                <strong onClick = { handleTittle }>Configuración</strong>
                    <ul>
                        <li><a href="#">Editar perfil</a></li>
                        <li><a href="#">Vaciar cartera</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default index;
