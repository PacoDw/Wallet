import React, { Component } from 'react';
import Header     from '../Header'
import SideDrawer from '../Sidedrawer'
import Modal      from '../Modal';
import AddOutcome     from '../AddOutcome'
import AddIncome     from '../AddIncome'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
//import reactfusioncharts from 'react-fusioncharts';

Charts(FusionCharts);

let myDataSource = {
    chart: {
      caption: 'Harry\'s SuperMart',
      subCaption: 'Top 5 stores in last month by revenue',
      numberPrefix: '$',
    },
    data: [
      {
        label: 'Bakersfield Central',
        value: '880000',
      },
      {
        label: 'Garden Groove harbour',
        value: '730000',
      },
      {
        label: 'Los Angeles Topanga',
        value: '59000',
      },
      {
        label: 'Compton-Rancho Dom',
        value: '520000',
      },
      {
        label: 'Daly City Serramonte',
        value: '330000',
      },
    ],
  };
  
  const chartConfigs = {
    type: 'pie3d',
    width: "80%",
    height: "400",
    dataFormat: 'json',
    dataSource: myDataSource,
  };
  
class index extends Component {


    constructor(props) {
		super(props);

		this.state = {
			showModal : false,
			option    : '',
			value     : ''
		}

		this.handleShowSideDrawer  = this.handleShowSideDrawer.bind(this);
        this.handleHideSideDrawer  = this.handleHideSideDrawer.bind(this);
        this.handleTittle          = this.handleTittle.bind(this);
		
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);

		this.handleGetValueInput = this.handleGetValueInput.bind(this);
	}

	handleGetValueInput(e) {
        e.preventDefault();
        this.setState( { value : e.target.value } );
    }

	handleShowModal(e) {
		e.preventDefault();
		this.setState( { showModal : true, option : e.target.text } );

	}
	handleCloseModal (e) {
		e.preventDefault();
		this.setState( { showModal : false } );
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
		console.log('Modal : ', this.state.showModal);

        return (
            <div>
                <SideDrawer
					handleTittle    = { this.handleTittle }
					handleShowModal = { this.handleShowModal } 
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
							<Modal 
								showModal        = { this.state.showModal  }
								handleCloseModal = { this.handleCloseModal }
								option           = { this.state.option }
							/>
                            <div id='chart-container'>
                            <ReactFC {...chartConfigs}// Provide FusionCharts library
                            />
                            </div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default index;