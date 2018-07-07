
import React from 'react';

const Header = ({ showSidedrawer, hideSidedrawer }) => {
    return (
        <header id="header">
            <div className="mui-appbar mui--appbar-line-height">
                <div className="mui-container-fluid">
                    <a onClick={showSidedrawer} className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
                    <a onClick={hideSidedrawer} className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
                    <h1 style={{display: 'inline', textAlign: 'center'}}>My Wallet</h1>
                    <span className="mui--text-title mui--visible-xs-inline-block">My Wallet</span>
                </div>
            </div>
        </header>
    );
};

export default Header;