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
		})
	}

	render() {
		let showSome = '';

		if (this.state.showDesktop)
			showSome = <Desktop />
		else
			showSome = <div className='container container-Login'>	
				<LoginAndRegister 
					loginUser = { this.handleLoginUser }
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
