import React, { Component } from 'react';

import LoginAndRegister from './components/Login&Register';
import Desktop from './components/Desktop';

import Api 	     from './utils';
import onGetForm from './utils/onGetForm';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
			user : props.user
		 }
    }

	handleLoginUser(e) {
		e.preventDefault();

		let formulario = document.querySelector('#LoginForm');

		onGetForm(formulario, ( dataForm ) => {
				
			Api.Seller
				.addSeller( dataForm )

				.then( data => {
					document.querySelector('#closeSellerForm').click();

					let id_office_manager = this.state.id_office_manager;

				})

		})
	}

	render() {
		let showSome = ''
		if (this.state.user === '')
			showSome = <Desktop />
		else
			showSome = <div className='container container-Login'>	
				<LoginAndRegister 
					loginUser = { this.handleLoginUser }
				/> 
			</div>
				  
		return (
			<div>
					{showSome}
			</div>
		);
	}
}

export default App;
