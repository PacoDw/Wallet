
import React from 'react';

const Header = ({ showSidedrawer, hideSidedrawer, closeSesion }) => {
    return (
        <header id="header">
            <div className="mui-appbar mui--appbar-line-height">
                <div className="mui-container-fluid">
                    <a onClick = { showSidedrawer } className="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
                    <a onClick = { hideSidedrawer } className="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
                    <span className="mui--text-title mui--visible-xs-inline-block">My Wallet</span>
                </div>
            </div>
            <nav id='nav-header'>
                <h3 id='nav-title'>My Wallet</h3>
                <a onClick = { closeSesion } id='nav-sesion'>Cerrar Sesión</a>
            </nav>
        </header>
    );
};

export default Header;