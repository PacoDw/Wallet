import React, { Component } from 'react';

import LoginAndRegister from './components/Login&Register';

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
		);
	}
}

export default App;
