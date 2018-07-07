import React, { Component } from 'react';
import Header     from '../Header'
import SideDrawer from '../Sidedrawer'
import Modal      from '../Modal';

class index extends Component {
    constructor(props) {
		super(props);

		this.state = {
			showModal : false,
			option    : '',
			value     : ''
		}

		this.handleShowSideDrawer  = this.handleShowSideDrawer.bind(this);
        this.handleHideSideDrawer  = this.handleHideSideDrawer.bind(this);
        this.handleTittle          = this.handleTittle.bind(this);
		
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);

		this.handleGetValueInput = this.handleGetValueInput.bind(this);
	}

	handleGetValueInput(e) {
        e.preventDefault();
        this.setState( { value : e.target.value } );
    }

	handleShowModal(e) {
		e.preventDefault();
		this.setState( { showModal : true, option : e.target.text } );

	}
	handleCloseModal (e) {
		e.preventDefault();
		this.setState( { showModal : false } );
	}
	

    handleShowSideDrawer(e) {
        e.preventDefault();
        let sidedrawer = document.querySelector('#sidedrawer')
       console.log("entro");
        setTimeout(function () {
            sidedrawer.classList.add('active');
        }, 20);
    }

    handleHideSideDrawer(e){
        e.preventDefault();
        console.log("entro");
        document.querySelector('body').classList.toggle('hide-sidedrawer');
    }

    handleTittle(e) {		
		let ul = e.target.nextSibling;

		ul.classList.toggle('hiden-items');
    } 
    
    render() {
		console.log('Modal : ', this.state.showModal);

        return (
            <div>
                <SideDrawer
					handleTittle    = { this.handleTittle }
					handleShowModal = { this.handleShowModal } 
                />

				<Header 
					showSidedrawer = { this.handleShowSideDrawer }
					hideSidedrawer = { this.handleHideSideDrawer }
				/>
                <div id="content-wrapper">
					<div class="mui--appbar-height"></div>
						<div class="mui-container-fluid">
						<div className='mui-panel'>
							<br/>
							<h1>My Wallet</h1>
							<Modal 
								showModal        = { this.state.showModal  }
								handleCloseModal = { this.handleCloseModal }
								option           = { this.state.option }
							/>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default index;