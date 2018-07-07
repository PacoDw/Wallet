import React, { Component } from 'react';

import LoginAndRegister from './components/Login&Register';
import Login from './components/Login&Register';
import Desktop from './components/Desktop';
import Sidedrawer from './components/Sidedrawer';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
			user : '' 
		 }
    }


	render() {
		return (
			<div className='container container-Login'>
				<LoginAndRegister />
			</div>
			<div className='container'>
				<Desktop />
				
			</div>
		);
	}
}

export default App;
