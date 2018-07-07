import React, { Component } from 'react';

import LoginAndRegister from './components/Login&Register';
import Desktop from './components/Desktop';

import Api from './utils';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
			user : props.user
		 }
    }

	componentDidMount(){
		
		Api.User
			
			.getUser(id)
			
			.then( response => {
				console.log('Response: ', response);

				this.setState( {
					user  : response
				} );
				
				alert('paro');
			})

			.catch( error => alert('Error: ', error));
	}

	render() {
		let showSome = ''
		if (this.state.user === '')
			showSome = <Desktop />
		else
			showSome = <div className='container container-Login'>	
				<LoginAndRegister /> 
			</div>
				  
		return (
			<div>
					{showSome}
			</div>
		);
	}
}

export default App;
