import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [ dispalyProducts, setDisplayProducts] = useState([]);

    useEffect( () =>{
        fetch('./bus.JSON')
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            setDisplayProducts(data);
        });
    }, []);


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <div className="product-container">
            {
                dispalyProducts.map(product => <Product 
                key={product.model}
                product={product}
                handleAddToCart= {handleAddToCart}>
                </Product>)
            }
            </div>
        </div>
    );
};

export default Shop;