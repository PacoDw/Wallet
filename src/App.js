import React, { Component } from 'react';

import Login from './components/Login&Register';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
			user : '' 
		 }
    }


	render() {
		return (
			<div className='container'>
				<Login />
			</div>
		);
	}
}

export default App;
