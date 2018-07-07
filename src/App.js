import React, { Component } from 'react';

// Conmponents --------------------------------------
import Input from './components/Input';
import Header from './components/Header';
import Sidedrawer from './components/Sidedrawer';


class App extends Component {
	render() {
		return (
			<div>
				<Input />
				<Header/>
				<Sidedrawer/>
			</div>
		);
	}
}

export default App;
