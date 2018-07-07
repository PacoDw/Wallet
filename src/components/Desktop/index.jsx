import React, { Component } from 'react';
import Header     from '../Header'
import SideDrawer from '../Sidedrawer'

class index extends Component {
    constructor(props) {
		super(props);

		this.handleShowSideDrawer = this.handleShowSideDrawer.bind(this);
		this.handleHideSideDrawer = this.handleHideSideDrawer.bind(this);
		
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
    render() {
        return (
            <div>
                <SideDrawer/>

				<Header 
					showSidedrawer = { this.handleShowSideDrawer }
					hideSidedrawer = { this.handleHideSideDrawer }
				/>

            </div>
        );
    }
}

export default index;