import React from 'react';

class index extends React.Component {
    constructor(props){
        super(props);

        this.state ={

        }
        this.handleShowSideDrawer=this.handleShowSideDrawer.bind(this);
    }

    handleShowSideDrawer(e){
        e.preventDefault();
        
        let sidedrawerEl =document.getElementById("sidedrawer");
    }
    render() {
        return (
            <div>
                <header id="header">
                    <div className="mui-appbar mui--appbar-line-height">
                        <div className="mui-container-fluid">
                            <a onClick={this.handleShowSideDrawer} className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
                            <a className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
                            <span className="mui--text-title mui--visible-xs-inline-block">Brand.io</span>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
};

export default index;