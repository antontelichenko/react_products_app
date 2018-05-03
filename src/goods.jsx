import React from 'react';

import ProductsPreview from './goodsPreview';
import products from './products';
import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');

const GoodsPage = createReactClass({
    contextTypes: {
        router: PropTypes.object.isRequired
    },

    getInitialState() {
        return{
            products
        };
    },

    handlePreviewClick(id) {
        this.context.router.push(`/goods/products/${id}`);
    },

    render() {
        const { products } = this.state;

        return(
            <div className='GoodsPage'>
                <div className='products'>
                    {
                        products.map(product =>
                            <ProductsPreview
                                key={product.id}
                                onClick={this.handlePreviewClick.bind(null, product.id)}
                                name={product.productName}
                                count={product.productCount}
                            />
                        )
                    }
                </div>
                <div className='products-container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default GoodsPage;