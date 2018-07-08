import React, { Component } from 'react';

// Components
import Header               from '../Header'
import SideDrawer           from '../Sidedrawer'
import Modal                from '../Modal';
import Api                  from '../../utils';
import MyCharts             from '../Charts';

import GastosFijos          from './GastosFijos';
import GastosImprovistos    from './GastosImprovistos';
import IngresosExtras       from './IngresosExtras';
import IngresosFijos        from './IngresosFijos';

class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user        : props.user || '',
            showModal   : false,
            option      : '',
            value       : '',
            data2       : [],
            showDesktop : props.showDesktop,
            showPanel   : '',
            PanelName   : ''
        }


        this.handleShowSideDrawer = this.handleShowSideDrawer.bind(this);
        this.handleHideSideDrawer = this.handleHideSideDrawer.bind(this);
        this.handleTittle        = this.handleTittle.bind(this);

        this.handleShowModal      = this.handleShowModal.bind(this);
        this.handleCloseModal     = this.handleCloseModal.bind(this);

        this.handleGetValueInput  = this.handleGetValueInput.bind(this);


        this.handleGetIncomeFixed = this.handleGetIncomeFixed.bind(this);
        this.handleGetIncomeIncidental = this.handleGetIncomeIncidental.bind(this);

        this.handleGetOutcomeFixed=this.handleGetOutcomeFixed.bind(this);
        this.handleGetOutcomeIncidental=this.handleGetOutcomeIncidental.bind(this);

        this.handlecloseSesion    = this.handlecloseSesion.bind(this);

        this.handleGetPanel       = this.handleGetPanel.bind(this);


        console.log('constructor: ', props);
    }
    
    
    
	handleGetPanel = (e) => {
        e.preventDefault();
        
        let whichPanel = '';
        let name='';
        switch(e.target.name)
        {
            case 'gastos-fijos':
            name='Gastos Fijos';
            this.handleGetOutcomeFixed();
            whichPanel = <GastosFijos/>
            break;

            case 'gastos-imprevistos':
            name='Gastos Imprevistos';
            this.handleGetOutcomeIncidental();
            whichPanel = <GastosImprovistos/>
            break;

            case 'ingresos-fijos':
            name='Ingresos Fijos';
            this.handleGetIncomeFixed();
            whichPanel = <IngresosFijos
            />
            break;

            case 'ingresos-extras':
            name='Ingresos Extras';
            this.handleGetIncomeIncidental();
            whichPanel = <IngresosExtras/>
            break;
        }
        
		this.setState( { showPanel : whichPanel , PanelName : name} )
	}
    
    handleGetIncomeFixed() {
        alert("entro al income fixed");

        Api.Income.getIncomeFixed(this.state.user.id_user)//this.state.user.id
        
        .then(data => {
            this.setState({ data2: data || [] })
            console.log(data);
            // console.log('nexProps: ', nextProps.user)
        })
        
        .catch(err =>  console.log(err) );
    }
    

    handleGetIncomeIncidental(){
        alert("entro al income Incidental");
        Api.Income.getIncomeIncidental(this.state.user.id_user) //this.state.user.id
        
        .then(data => {
            this.setState({ data2: data || [] })
            // console.log('nexProps: ', nextProps.user)
        })
        
        .catch(err =>  console.log(err) );
    }

    handleGetOutcomeFixed(){

        console.log(this);
        alert("entro al outcome fixed");
        Api.Outcome.getOutcomeFixed(this.state.user.id_user) //this.state.user.id
        
        .then(data => {
            console.log(data);
            this.setState({ data2: data || [] })
            // console.log('nexProps: ', nextProps.user)
        })
        
        .catch(err =>  console.log(err) );
    }

    handleGetOutcomeIncidental(){
        alert("entro al income Incidental");
        Api.Outcome.getOutcomeIncidental(this.state.user.id_user) //this.state.user.id
        
        .then(data => {
            this.setState({ data2: data || [] })
            // console.log('nexProps: ', nextProps.user)
        })
        
        .catch(err =>  console.log(err) );
    }

    handleGetValueInput(e) {
        e.preventDefault();
        this.setState({ value: e.target.value });
    }

    handleShowModal(e) {
        e.preventDefault();
        this.setState({ showModal: true, option: e.target.text });

    }
    handleCloseModal(e) {
        e.preventDefault();
        this.setState({ showModal: false });
    }


    handleShowSideDrawer(e) {
        e.preventDefault();
        let sidedrawer = document.querySelector('#sidedrawer')
        setTimeout(function () {
            sidedrawer.classList.add('active');
        }, 20);
    }

    handleHideSideDrawer(e) {
        e.preventDefault();
        document.querySelector('body').classList.toggle('hide-sidedrawer');
    }

    handleTittle(e) {
        let ul = e.target.nextSibling;

        ul.classList.toggle('hiden-items');
    }

    handlecloseSesion(e){
        e.preventDefault();
        this.setState( { showDesktop : false } ); 
        window.location.reload(true);  
    }


    render() {
        //console.log('Modal : ', this.state.showModal);

            //console.log('State: ' + this.state.data2);
            let info = this.state.data2;
            console.log(info);
            const chartData = info.map(item => ({ label: item.description, value: item.amount }));
            console.log(this.state.showPanel);

        return (
            <div>
                <SideDrawer
                    handleTittle    = { this.handleTittle    }
                    handleShowModal = { this.handleShowModal }
                    handleGetPanel  = { this.handleGetPanel   }

                />

                <Header
                    showSidedrawer = { this.handleShowSideDrawer }
                    hideSidedrawer = { this.handleHideSideDrawer }
                    closeSesion    = { this.handlecloseSesion     }
                />

                <div id="content-wrapper">
                    <div class="mui--appbar-height"></div>
                    <div class="mui-container-fluid">
                        <div className='mui-panel'>
                            { this.state.showPanel }
                        </div>                        
                        <div className='mui-panel'>
                            
                            <Modal
                                user             = { this.state.user       }
                                showModal        = { this.state.showModal  }
                                handleCloseModal = { this.handleCloseModal }
                                option           = { this.state.option     } 
                            />

                            <MyCharts 
                                Data = {   chartData   }
                                Name = { this.state.PanelName}
                            />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;