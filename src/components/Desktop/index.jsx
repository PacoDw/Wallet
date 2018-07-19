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
            user          : props.user || '',
            showModal     : false,
            option        : '',
            value         : '',
            movementsData : [],
            showDesktop   : props.showDesktop,
            showTable     : '',
            PanelName     : ''
        }


        this.handleShowSideDrawer       = this.handleShowSideDrawer.bind(this);
        this.handleHideSideDrawer       = this.handleHideSideDrawer.bind(this);
        this.handleShowModal            = this.handleShowModal.bind(this);
        this.handleCloseModal           = this.handleCloseModal.bind(this);
        this.handleGetValueInput        = this.handleGetValueInput.bind(this);
        this.handlecloseSesion          = this.handlecloseSesion.bind(this);
    }
    
    
    handleMovementsData( data ) {
        this.setState( { movementsData : data } );
    }

    handleShowTable( table ) {
        this.setState( { showTable : table } );
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

    handlecloseSesion(e){
        e.preventDefault();
        this.setState( { showDesktop : false } ); 
        window.location.reload(true);  
    }


    render() {

            let info = this.state.movementsData;
            const chartData = info.map(item => ({ label: item.description, value: item.amount }));
        return (
            <div>
                <SideDrawer
                    user = { this.state.user }
                    handleMovementsData = { this.handleMovementsData }
                    handleShowTable = { this.handleShowTable }

                    handleShowModal   = { this.handleShowModal }
                />

                <Header
                    showSidedrawer = { this.handleShowSideDrawer }
                    hideSidedrawer = { this.handleHideSideDrawer }
                    closeSesion    = { this.handlecloseSesion }
                />

                <div id="content-wrapper">
                    <div class="mui--appbar-height"></div>
                    <div class="mui-container-fluid">
                        <div className='mui-panel'>
                            { this.state.showTable }
                        </div>                        
                        <div className='mui-panel'>
                            
                            <Modal
                                user             = { this.state.user }
                                showModal        = { this.state.showModal }
                                handleCloseModal = { this.handleCloseModal }
                                option           = { this.state.option } 
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