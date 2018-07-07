import React from 'react';

// Components ------------------------------------------
import Login     from './Login';
import Register  from './Register';


class index extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            user : ''
        }
    }

    render() {
        return (
            <div className = 'mui-panel'>
                <ul className="mui-tabs__bar">
                    <li className="mui--is-active"><a data-mui-toggle="tab" data-mui-controls="pane-default-1">Login</a></li>
                    <li><a data-mui-toggle="tab" data-mui-controls="pane-default-2">Register</a></li>
                </ul>
                    <div className="mui-tabs__pane mui--is-active panel-login" id="pane-default-1">
                        <Login 
                            handleGetValueInput = { this.handleGetValueInput }
                            loginUser = { this.props.loginUser }
                        />
                    </div>
                    <div className="mui-tabs__pane panel-register" id="pane-default-2">
                        <Register 
                            handleGetValueInput = { this.handleGetValueInput }
                        />
                    </div>
            </div>
        );        
    }
};

export default index;