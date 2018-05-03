import React from 'react';

var createReactClass = require('create-react-class');

const GoodsPreview = createReactClass({
    render() {
        const { name, count, onClick } = this.props;

        return (
            <div className='GoodsPreview' onClick={onClick}>
                <div className='productName'>
                    {name}
                </div>

                <div className='productCount'>
                    {`count: ${count}`}
                </div>
            </div>
        );
    }
});

export default GoodsPreview;