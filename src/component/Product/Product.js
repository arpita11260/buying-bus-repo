import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBus,faThumbsDown,faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {model,company,category,numOfSeat,price,img} = props.product;
    const busIcon = <FontAwesomeIcon icon={faBus} />
    const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp}/>
    const thumbsDownIcon = <FontAwesomeIcon icon={faThumbsDown} />
    return (
        <div className='product rounded-top'>
            <div >
                <img className='rounded-circle' src={img} alt="" />
            </div>
            <div>
                <h4>Company: {company}</h4>
                <p>Model: {model}</p>
                <p>Category: {category}</p>
                <p>Seat: {numOfSeat}</p>
                <p>Price: {price}</p>
                <button onClick={ () =>  props.handleAddToCart(props.product)} className='btn-regular icon'><span className='icon-bus'>{busIcon}</span> Add to Cart</button>
                <h4>{thumbsUpIcon} <span className='icon-thumble'>{thumbsDownIcon}</span></h4>
            </div>
        </div>
    );
};

export default Product;