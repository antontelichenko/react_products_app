import React from 'react';
import products from './products';

var createReactClass = require('create-react-class');

const Product = createReactClass({
    getInitialState() {
        const { id } = this.props.params;

        return {
            product: products.find(product => product.id === id)
        };
    },

    componentWillReceiveProps(nextProps) {
        const{ id: prevId }= this.props.params;
        const{ id: nextId }= nextProps.params;

        if(prevId !== nextId) {
            this.setState({
                product: products.find(product => product.id ===nextId)
            });
        }
    },

    render() {
        const { product } = this.state;

        return (
            <div className='Product'>
                <img src={product.productPhoto} />
                <br />
                <p>{product.productDescription}</p>
            </div>
        );
    }
});

export default Product;