import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory} from 'react-router';

import App from './app'
import ProfilePage from './profile';
import GoodsPage from './goods';
import Product from './product';
import Cart from './cart';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/profile' component={ProfilePage}>
                <Route path='/profile/cart' component={Cart} />
            </Route>
            <Route path='/goods' component={GoodsPage}>
                <Route path='/goods/products/:id' component={Product} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('App_place')
);