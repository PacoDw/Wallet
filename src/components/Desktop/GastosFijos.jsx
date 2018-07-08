import React from 'react';

const GastosFijos = (data) => {
    //console.log('gastos fijos '+JSON.stringify(data.data[0]));

    let total = 0;
    let datos = data.data.map( item => {
        total += item.amount;
        return(
            <tr>
                <td>{ item.description }</td>
                <td>{ item.amount }</td>
            </tr>
        )
    } )
    
    return (
        <table className="table tabGF">
            <th>Amount</th>
            <th>Description</th>
            <tbody>
               { datos }
               <tr className="dark"><td></td><td></td></tr>
               <tr><td><strong>Total</strong></td><td>{total}</td></tr>
            </tbody>
        </table>
    );
};

export default GastosFijos;