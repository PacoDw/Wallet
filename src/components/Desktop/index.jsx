import React, { Component } from 'react';
import Header from '../Header'
import SideDrawer from '../Sidedrawer'
import Modal from '../Modal';
import Api from '../../utils';
import MyCharts from '../Charts';


class index extends Component {

    constructor(props) {
        super(props);


        this.state = {
            showModal: false,
            option: '',
            value: '',
            data2: []
        }
        this.handleShowSideDrawer = this.handleShowSideDrawer.bind(this);
        this.handleHideSideDrawer = this.handleHideSideDrawer.bind(this);
        this.handleTittle = this.handleTittle.bind(this);

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        this.handleGetValueInput = this.handleGetValueInput.bind(this);
    }

    componentWillMount() {
        Api.Income.getIncomeFixed(6)
            .then(data => {
                this.setState({ data2: data || [] })
                console.log(this.state.data2);
            }
            ).catch(err => { console.log(err) });
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
        console.log("entro");
        setTimeout(function () {
            sidedrawer.classList.add('active');
        }, 20);
    }

    handleHideSideDrawer(e) {
        e.preventDefault();
        console.log("entro");
        document.querySelector('body').classList.toggle('hide-sidedrawer');
    }

    handleTittle(e) {
        let ul = e.target.nextSibling;

        ul.classList.toggle('hiden-items');
    }



    render() {
        //console.log('Modal : ', this.state.showModal);
        //console.log('State: ' + this.state.data2);
        let info = this.state.data2;
        const chartData = info.map(item => ({ label: item.description, value: item.amount }));
        //console.log(chartData);
        return (
            <div>
                <SideDrawer
                    handleTittle={this.handleTittle}
                    handleShowModal={this.handleShowModal}
                />

                <Header
                    showSidedrawer={this.handleShowSideDrawer}
                    hideSidedrawer={this.handleHideSideDrawer}
                />
                <div id="content-wrapper">
                    <div class="mui--appbar-height"></div>
                    <div class="mui-container-fluid">
                        <div className='mui-panel'>
                            <Modal
                                showModal={this.state.showModal}
                                handleCloseModal={this.handleCloseModal}
                                option={this.state.option}
                            />
                            <MyCharts 
                            Data={chartData}
                            Name={'Ingreso Fijo'}
                            />  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;