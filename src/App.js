import React, { Component } from 'react';

import LoginAndRegister from './components/Login&Register';
import Desktop from './components/Desktop';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
			user : '' 
		 }
    }


	render() {
		let showSome = ''
		if (this.state.user !== '')
			showSome = <Desktop />
		else
			showSome = <div className='container container-Login'>	
				<LoginAndRegister /> 
			</div>
				  
		return (
			<div>
					{ showSome }
			</div>
		);
	}
}

export default App;
