import React from 'react';

const index = props => {
    return (
        <div id="sidedrawer" class="mui--no-user-select"> 
            <div id="sidedrawer-brand" className="mui--appbar-line-height">
                <span className="mui--text-title">Brand.io</span>
            </div>
            <div className="mui-divider"></div>
            <ul>
                <li>
                    <strong>Category 1</strong>
                    <ul>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                    </ul>
                </li>
                <li>
                    <strong>Category 2</strong>
                    <ul>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                    </ul>
                </li>
                <li>
                    <strong>Category 3</strong>
                    <ul>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default index;