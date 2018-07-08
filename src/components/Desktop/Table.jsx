import React from 'react';

const Table = ( { data, title } ) => {

    console.log('DATAAAA: ', data);

    let total = 0;
    let datos = data.map( item => {
        total += item.amount;
        return(
            <tr>
                <td>{ item.description }</td>
                <td>{ item.amount }</td>
            </tr>
        )
    } )
    
    return (
        <div className="container">
            <h2> { title } </h2>
            <table className="table tabGF">
                <th>Amount</th>
                <th>Description</th>
                <tbody>
                { datos }
                <tr className="dark"><td></td><td></td></tr>
                <tr><td><strong>Total</strong></td><td>{total}</td></tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;