import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalQuantity = 0;
    let total = 0;
    let companyName = ' ';
    for(const product of cart){
        total = total + product.price;
        totalQuantity += 1; 
        companyName = companyName + product.company;
        
    }

    return (
        <div className='cart'>
                <h3>Order Summary</h3>
                <h5>Items Ordered: {totalQuantity}</h5>
                <h5>Total: {total}</h5>
                <div className='company'>
                    <h5>Company Name: {companyName} </h5>
                </div>
        </div>
    );
};

export default Cart;