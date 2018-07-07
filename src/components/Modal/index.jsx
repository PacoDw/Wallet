import React from 'react';

// Components-------------------------------
import ReactModal from 'react-modal'

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
        return (
            <ReactModal 
               isOpen = { showModal }
               style  = {customStyles}
               overlayClassName = "Overlay"
            >
            
              <p>Modal text!</p>
              <p>{ option }</p>
              
              <form id='form-modal' action="">
              </form>
              <button onClick   = { handleCloseModal }>Close</button>
            </ReactModal>
        );
    }

}