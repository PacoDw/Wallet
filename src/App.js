import React, { Component } from 'react';

import LoginAndRegister from './components/Login&Register';
import Desktop from './components/Desktop';

import Api 	     from './utils';
import onGetForm from './utils/onGetForm';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
			user        : '',
			showDesktop : false

		 }

		 this.handleLoginUser    = this.handleLoginUser.bind(this);
		 this.handleRegisterUser = this.handleRegisterUser.bind(this);
    }

	handleRegisterUser(e){
		e.preventDefault();

		let formulario = document.querySelector('#RegisterForm');

		onGetForm(formulario, ( dataForm ) => {
				
			Api.User
				.addUser( dataForm )

				.then( data => {
					this.setState( { user : data.user,  showDesktop : true } )
				})
		})
	}

	handleLoginUser(e) {
		e.preventDefault();

		let formulario = document.querySelector('#LoginForm');

		onGetForm(formulario, ( dataForm ) => {
				
			Api.User
				.loginUser( dataForm )

				.then( data => {
					this.setState( { user : data.user,  showDesktop : true } )

				})

				.catch(err => console.log('ERROR: ', err));
		})
	}

	render() {
		let showSome = '';

		if (this.state.showDesktop)
			showSome = <Desktop />
		else
			showSome = <div className='container container-Login'>	
				<LoginAndRegister 
					loginUser    = { this.handleLoginUser    }
					registerUser = { this.handleRegisterUser }
				/> 
			</div>
				  
		return (
			<div>
					{ showSome }
			</div>
		);
	}
}

export default App;
