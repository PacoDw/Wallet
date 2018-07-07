import React from 'react';

// Components-------------------------------
import ReactModal from 'react-modal';
import AddIncome  from './AddIncome';
import AddOutcome from './AddOutcome'

const customStyles = {
    content : {
    
      top          : '50%',
      left         : '50%',
      right        : 'auto',
      bottom       : 'auto',
      marginRight  : '-50%',
      transform    : 'translate(-50%, -50%)'
    }
  };

export default class Modal extends React.Component {
    render() {
        const { showModal, handleCloseModal, option } = this.props;

        let typeModal = '';
        let title     = '';

        if ( option === 'Agregar gasto')
        {
            typeModal = <AddOutcome/>
            title     = 'Agregar Gasto'
        }
        else
        {
            typeModal = <AddIncome/>
            title     = 'Agregar Ingreso'
        }

        return (
            <ReactModal 
               isOpen = { showModal }
               style  = {customStyles}
               overlayClassName = "Overlay"
               >
               <div className='header-modal'>
                    { title || 'Sin titulo' }
                    <a id='close-modal' onClick = { handleCloseModal }>x</a>
               </div>
            <hr/>
            { typeModal }
            </ReactModal>
        );
    }

}