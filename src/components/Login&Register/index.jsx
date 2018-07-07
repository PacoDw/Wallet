import React from 'react';


class index extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            value : ''
        }

        // this.handleGetValueInput = this.handleGetValueInput.bind(this);
    }

    // handleGetValueInput(e) {
    //     e.preventDefault();
        
    //     this.setState( { value : event.target.value } );
    // }

    render() {
        return (
            <div className = 'container'>
                <ul class="mui-tabs__bar">
                    <li class="mui--is-active"><a data-mui-toggle="tab" data-mui-controls="pane-default-1">Login</a></li>
                    <li><a data-mui-toggle="tab" data-mui-controls="pane-default-2">Register</a></li>
                </ul>
                    <div class="mui-tabs__pane mui--is-active" id="pane-default-1">Pane-1</div>
                    <div class="mui-tabs__pane" id="pane-default-2">Pane-2</div>
            </div>
        );        
    }
};

export default index;