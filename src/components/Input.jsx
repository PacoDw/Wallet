import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            type        : props.type,
            value       : '',
            name        : props.name,
            placeholder : props.placeholder 
        }

        this.handleGetValueInput = this.handleGetValueInput.bind(this);
    }

    handleGetValueInput(e) {
        e.preventDefault();
        this.setState( { value : e.target.value } );        
    }


    render() {

        return (
            <div className="mui-textfield mui-textfield--float-label">
                <input
                    type     = { this.state.type || 'text' }
                    onChange = { this.handleGetValueInput }
                    value    = { this.state.value }
                    name     = { this.state.name }
                />
                <label>{ this.state.placeholder || 'Sin nombre' }</label>
            </div>
        );
    };
}

export default Input;