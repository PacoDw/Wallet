import React from 'react';

const EditarGastos = (data) => {

    console.log('Editar Gastos: ', data.data);
    
    let total = 0;
    let datos = data.data.map( item => {
        total += item.amount;
        let link = `localhost:3000/outcome/deleteOutcome/${item.id_movement}`;
        return(
            <tr>
                <td hidden>{ item.id_movement }</td>
                <td>{ item.date }</td>
                <td>{ item.description }</td>
                <td>{ item.amount }</td>
                <td>
                    <a href={link}>Eliminar</a>
                    <a href="">Editar</a>
                </td>
            </tr>
        )
    } )
    
    return (
        <table className="table tabGF">
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Opción</th>
            <tbody>
               { datos }
               <tr className="dark"><td></td><td></td><td></td><td></td><td></td></tr>
               <tr><td colSpan="2"><strong>Total $</strong></td><td>{total}</td></tr>
            </tbody>
        </table>
    );
};

export default EditarGastos;