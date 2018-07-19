import React from 'react';

// Modules
import Api from '../../utils';

// Components
import Table from '../Desktop/Table';
import TableActions from '../Desktop/TableActions'


class Sidedrawer extends React.Component {
    constructor(...props){
        super(...props);

        this.state = {
            user : props.user,
            handleMovementsData : props.handleMovementsData,
            handleShowTable : props.handleShowTable,
            handleShowModal : props.handleShowModal
        }

        this.handleTitle = this.handleTitle.bind(this);

        this.handleEmptyWallet     = this.handleEmptyWallet.bind(this);
        this.handleGetIncomeFixed  = this.handleGetIncomeFixed.bind(this);
        this.handleGetOutcomeFixed = this.handleGetOutcomeFixed.bind(this);
        this.handleGetOutcomeIncidental = this.handleGetOutcomeIncidental.bind(this);
        this.handleGetIncomeIncidental  = this.handleGetIncomeIncidental.bind(this);
        this.handleGetEditOutcome       = this.handleGetEditOutcome.bind(this);
        this.handleGetEditIncome        = this.handleGetEditIncome.bind(this);
        this.handleDeleteItem           = this.handleDeleteItem.bind(this);

    }


    handleTitle(e) {
        let ul = e.target.nextSibling;
        ul.classList.toggle('hiden-items');
    }

    handleEmptyWallet(e) {
        e.preventDefault();
        Api.Setting
            .emptyWallet(this.state.user.id_user)
            .then( _ => {
                alert('Se ha limpiado tu cartera');
                this.state.handleMovementsData([]);
            } )
            .catch( err =>  console.log(err) );
    }

// Sacar de aqui-----------------------------------------------------
    handleDeleteItem(e) { 
        e.preventDefault();

        let id_movement = e.target.attributes['id_movement'].value;

        Api.Income
            .deleteItem(id_movement)
            .then( _ => {
                let newData = this.state.movementsData.filter( item => {
                    return item.id_movement !== id_movement;
                })                
                this.setState( { movementsData : newData } );

            }  )
            .catch( error => console.log(error) ); 
    }
// ---------------------------------------------------------------------
    

    handleGetIncomeFixed(e) {
        e.preventDefault();
        Api.Income
            .getIncomeFixed(this.state.user.id_user)
            .then(data => { 
                this.state.handleMovementsData(data || []);
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.state.handleShowTable(
                    <Table
                        data = { data }
                        title = 'Ingresos Fijos' 
                    /> )
            } )            
            .catch(err =>  console.log(err) );
    }

    handleGetOutcomeFixed(e){
        e.preventDefault();
        Api.Outcome
            .getOutcomeFixed(this.state.user.id_user) 
            .then(data => {
                this.state.handleMovementsData(data || []);
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.state.handleShowTable(
                    <Table
                        data = { data }
                        title = 'Gastos Fijos' 
                    />)
                } )
            .catch(err =>  console.log(err) )
    }

    handleGetOutcomeIncidental(e){
        e.preventDefault();
        Api.Outcome
            .getOutcomeIncidental(this.state.user.id_user) 
            .then(data => { 
                this.state.handleMovementsData(data || []);
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.state.handleShowTable(
                    <Table
                        data = { data }
                        title = 'Gastos Imprevistos' 
                    />)
            } )
            .catch(err =>  console.log(err) );
    }

    handleGetIncomeIncidental(e){
        e.preventDefault();
        Api.Income
            .getIncomeIncidental(this.state.user.id_user) 
            .then(data => { 
                this.state.handleMovementsData(data || []);
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.state.handleShowTable(
                    <Table
                        data = { data }
                        title = 'Ingresos Imprevistos' 
                    />)
                } )
            .catch(err =>  console.log(err) );
    }

    handleGetEditOutcome(e){
        e.preventDefault();
        Api.Outcome
            .getEditOutcome(this.state.user.id_user) 
            .then(data => { 
                this.state.handleMovementsData(data || []);
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.state.handleShowTable(
                    <TableActions
                        data  = { data }
                        title = 'Gastos'
                        deleteItem = { this.handleDeleteItem } 
                    />)
            } )
            .catch(err =>  console.log(err) );
    }

    handleGetEditIncome(e){
        e.preventDefault();
        Api.Income
            .getEditIncome(this.state.user.id_user) 
            .then(data => { 
                this.state.handleMovementsData(data || []);
                return Promise.resolve(data); 
            } )
            .then( data => {
                this.state.handleShowTable(
                    <TableActions
                        data  = { data }
                        title = 'Ingresos'
                        deleteItem = { this.handleDeleteItem } 
                    />)
            } )   
            .catch(err =>  console.log(err) );
    }

    render(){
        return (
            <div id="sidedrawer" class="mui--no-user-select"> 
                <div id="sidedrawer-brand" className="mui--appbar-line-height">
                    <span className="mui--text-title">My Wallet</span>
                </div>
                <div className="mui-divider"></div>
                <ul>
                    <li>
                        <strong onClick = { this.handleTitle }>Gastos</strong>
                        <ul>
                            <li><a name='gastos-fijos'       onClick = { this.handleGetOutcomeFixed } href="#">Gastos Fijos</a></li>
                            <li><a name='gastos-imprevistos' onClick = { this.handleGetOutcomeIncidental } href="#">Gastos Imprevisto</a></li>
                            <li><a name='editar-gastos'      onClick = { this.handleGetEditOutcome } href="#">Todos mis Gastos </a></li>
                            <li><a  onClick = { this.state.handleShowModal } href="#">Agregar Gasto</a></li>
                        </ul>
                    </li>
                    <li>
                        <strong onClick = { this.handleTitle }>Ingresos</strong>
                        <ul>
                            <li><a name='ingresos-fijos'  onClick = { this.handleGetIncomeFixed } href="#">Ingresos Fijos</a></li>
                            <li><a name='ingresos-extras' onClick = { this.handleGetIncomeIncidental } href="#">Ingresos Imprevisto</a></li>
                            <li><a name='editar-ingresos' onClick = { this.handleGetEditIncome } href="#">Todos mis Ingresos</a></li>
                            <li><a onClick = { this.state.handleShowModal } href="#">Agregar Ingreso</a></li>
                        </ul>
                    </li>
                    <li>
                    <strong onClick = { this.handleTitle }>Configuración</strong>
                        <ul>
                            <li><a href="#">Editar perfil</a></li>
                            <li><a onClick = { this.handleEmptyWallet } href="#">Vaciar cartera</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidedrawer;