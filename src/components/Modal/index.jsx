import React from 'react';

// Components-------------------------------
import ReactModal from 'react-modal';
import AddIncome  from './AddIncome';
import AddOutcome from './AddOutcome'

import Api        from '../../utils';
import onGetForm  from '../../utils/onGetForm';

const customStyles = {
    content : {
      top          : '50%',
      left         : '50%',
      right        : 'auto',
      bottom       : 'auto',
      marginRight  : '-50%',
      width        : '35%',
      transform    : 'translate(-50%, -50%)'
    }
  };

class Modal extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            user : props.user
        }

        this.handleAddIncome  = this.handleAddIncome.bind(this);
        this.handleAddOutcome = this.handleAddOutcome.bind(this); 
    }

    handleAddOutcome(e){
        e.preventDefault();

        let formulario = document.querySelector('#AddOutcome');

		onGetForm(formulario, ( dataForm ) => {
                
			Api.Outcome
				.addOutcome( dataForm, this.state.user.id )

				.then( data => {
                    console.log('AddOutcome: ', data)                    
					// this.setState( { user : data.user} )
                })
                
                .catch(error => console.log(error) );
		})

    }

    handleAddIncome(e){
        e.preventDefault();

        let formulario = document.querySelector('#AddIncome');

        onGetForm(formulario, ( dataForm ) => {
                
            Api.Income
                .addIncome( dataForm, this.state.user.id )

                .then( data => {
                    console.log('AddIncome: ', data)
                    // this.setState( { user : data.user} )
                })
                
                .catch(error => console.log(error) );
        })
    }
    
    render() {
        const { showModal, handleCloseModal, option } = this.props;

        let typeModal = '';
        let title     = '';

        if ( option === 'Agregar gasto')
        {
            typeModal = <AddOutcome
                            AddOutcome = { this.handleAddOutcome }
                        />
            title     = 'Agregar Gasto'
        }
        else
        {
            typeModal = <AddIncome
                            AddIncome = { this.handleAddIncome }
                        />
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
                    <a 
                        id='close-modal'
                         onClick = { handleCloseModal }
                    >x
                    </a>

               </div>
            <hr/>
            { typeModal }
            </ReactModal>
        );
    }
}
export default Modal;