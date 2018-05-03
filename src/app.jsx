import React from 'react';
import { Link } from 'react-router';
var createReactClass = require('create-react-class');


const App = createReactClass({
    render: function () {
        return (
            <div className="app">
                <div className='menu-bar'>
                    <div className='menu-item'>
                        <Link to ='/profile'>Profile</Link>
                    </div>
                    <div className='menu-item'>
                        <Link to ='/goods'>Goods</Link>
                    </div>
                </div>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});
export default App;