import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalQuantity = 0;
    let total = 0;
    let modelName = ' ';
    for(const product of cart){
        total = total + product.price;
        totalQuantity += 1; 
        modelName = modelName + product.model + <br />;
        
    }

    return (
        <div className='cart'>
                <h3>Order Summary</h3>
                <h5>Items Ordered: {totalQuantity}</h5>
                <p>Total: {total}</p>
                <div>
                    <p>Model: {modelName} </p>
                </div>
        </div>
    );
};

export default Cart;