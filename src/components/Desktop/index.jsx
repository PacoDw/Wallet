import React, { Component } from 'react';
import Header     from '../Header'
import SideDrawer from '../Sidedrawer'

class index extends Component {
    constructor(props) {
		super(props);

		this.handleShowSideDrawer = this.handleShowSideDrawer.bind(this);
        this.handleHideSideDrawer = this.handleHideSideDrawer.bind(this);
        this.handleTittle          = this.handleTittle.bind(this);
		
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

    handleTittle(e) {		
		let ul = e.target.nextSibling;

		ul.classList.toggle('hiden-items');
    } 
    
    render() {
        return (
            <div>
                <SideDrawer
                handleTittle = { this.handleTittle }
                />

				<Header 
					showSidedrawer = { this.handleShowSideDrawer }
					hideSidedrawer = { this.handleHideSideDrawer }
				/>
                <div id="content-wrapper">
					<div class="mui--appbar-height"></div>
						<div class="mui-container-fluid">
						<div className='mui-panel'>
							<br/>
							<h1>My Wallet</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
								sollicitudin volutpat molestie. Nullam id tempor nulla. Aenean sit amet
								urna et elit pharetra consequat. Aliquam fringilla tortor vitae lectus
								tempor, tempor bibendum nunc elementum. Etiam ultrices tristique diam,
								vitae sodales metus bibendum id. Suspendisse blandit ligula eu fringilla
								pretium. Mauris dictum gravida tortor eu lacinia. Donec purus purus,
								ornare sit amet consectetur sed, dictum sitamet ex. Vivamus sit amet
								imperdiet tellus. Quisque ultrices risus a massa laoreet, vitae tempus sem
								congue. Maecenas nec eros ut lectus vehicula rutrum. Donec consequat
								tincidunt arcu non faucibus. Duis elementum, ante venenatis lacinia
								cursus, turpis massa congue magna, sed dapibus felis nibh sed tellus. Nam
								consectetur non nibh vitae sodales. Pellentesque malesuada dolor nec mi
								volutpat, eget vehicula eros ultrices.
							</p>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default index;