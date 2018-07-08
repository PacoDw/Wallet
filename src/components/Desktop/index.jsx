import React, { Component } from 'react';

// Components
import Header       from '../Header'
import SideDrawer   from '../Sidedrawer'
import Modal        from '../Modal';
import Api          from '../../utils';
import MyCharts     from '../Charts';

import Table        from './Table';
import TableActions from './TableActions'

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


        this.handleShowSideDrawer       = this.handleShowSideDrawer.bind(this);
        this.handleHideSideDrawer       = this.handleHideSideDrawer.bind(this);
        this.handleTittle               = this.handleTittle.bind(this);
        this.handleShowModal            = this.handleShowModal.bind(this);
        this.handleCloseModal           = this.handleCloseModal.bind(this);
        this.handleGetValueInput        = this.handleGetValueInput.bind(this);
        this.handleGetIncomeFixed       = this.handleGetIncomeFixed.bind(this);
        this.handleGetIncomeIncidental  = this.handleGetIncomeIncidental.bind(this);
        this.handleGetEditIncome        = this.handleGetEditIncome.bind(this);
        this.handleGetOutcomeFixed      = this.handleGetOutcomeFixed.bind(this);
        this.handleGetOutcomeIncidental = this.handleGetOutcomeIncidental.bind(this);
        this.handleGetEditOutcome       = this.handleGetEditOutcome.bind(this);
        this.handlecloseSesion          = this.handlecloseSesion.bind(this);
    }
    
    
    handleGetIncomeFixed() {
        Api.Income
            .getIncomeFixed(this.state.user.id_user)
            .then(data => { 
                this.setState( { data2: data || [] } )
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.setState( {
                     showPanel: <Table
                                    data = { data }
                                    title = 'Ingresos Fijos' 
                                />
                } )
            } )            
            .catch(err =>  console.log(err) );
    }

    handleGetIncomeIncidental(){
        Api.Income
            .getIncomeIncidental(this.state.user.id_user) //this.state.user.id
            .then(data => { 
                this.setState( { data2: data || [] } )
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.setState( {
                     showPanel: <Table
                                    data = { data }
                                    title = 'Ingresos Imprevistos' 
                                />
                } )
            } )
            .catch(err =>  console.log(err) );
    }

    handleGetEditIncome(){
        Api.Income
            .getEditIncome(this.state.user.id_user) //this.state.user.id
            .then(data => { 
                this.setState( { data2: data || [] } )
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.setState( {
                     showPanel: <TableActions
                                    data = { data }
                                    title = 'Ingresos' 
                                />
                } )
            } )   
            .catch(err =>  console.log(err) );
    }

    handleGetOutcomeFixed = function (){
        Api.Outcome
            .getOutcomeFixed(this.state.user.id_user) //this.state.user.id
            .then(data => {
                this.setState({ data2: data || [] })
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.setState( {
                     showPanel: <Table
                                    data = { data }
                                    title = 'Gastos Fijos' 
                                />
                } )
            } )
            .catch(err =>  console.log(err) )
    }

    handleGetOutcomeIncidental(){
        Api.Outcome
            .getOutcomeIncidental(this.state.user.id_user) //this.state.user.id
            .then(data => { 
                this.setState( { data2: data || [] } )
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.setState( {
                     showPanel: <Table
                                    data = { data }
                                    title = 'Gastos Imprevistos' 
                                />
                } )
            } )
            .catch(err =>  console.log(err) );
    }

    handleGetEditOutcome(){
        Api.Outcome
            .getEditOutcome(this.state.user.id_user) //this.state.user.id
            .then(data => { 
                this.setState( { data2: data || [] } )
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.setState( {
                     showPanel: <TableActions
                                    data = { data }
                                    title = 'Gastos' 
                                />
                } )
            } )
            .catch(err =>  console.log(err) );
    }


    handleGetValueInput(e) {
        e.preventDefault();
        this.setState( { value: e.target.value } );
    }

    handleShowModal(e) {
        e.preventDefault();
        this.setState( { showModal: true, option: e.target.text } );

    }
    handleCloseModal(e) {
        e.preventDefault();
        this.setState( { showModal: false } );
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

            let info = this.state.data2;
            const chartData = info.map(item => ({ label: item.description, value: item.amount }));
            console.log(this.state.showPanel);

        return (
            <div>
                <SideDrawer
                    handleTittle    = { this.handleTittle    }
                    handleShowModal = { this.handleShowModal }
                    incomeFixed     = { this.handleGetIncomeFixed }
                    outcomeFixed    = { this.handleGetOutcomeFixed }
                    outcomeIncidental = { this.handleGetOutcomeIncidental }
                    incomeIncidental  = { this.handleGetIncomeIncidental }
                    editIncome = { this.handleGetEditIncome }
                    editOutcome = { this.handleGetEditOutcome }
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