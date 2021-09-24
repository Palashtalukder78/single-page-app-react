import React from 'react';
import Rating from 'react-rating';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const { img, name, seller, stock, price, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}

    ></FontAwesomeIcon>
    return (
        <div>
            <div>
                <div class="card mb-3 product">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={img} class="img-fluid rounded-start p-4" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title product-name">{name}</h5>
                                <p class="card-text m-0">By <b className='text-danger'>{seller}</b></p>
                                <h3>Price: $ {price}</h3>
                                <p class="card-text m-0"><small class="text-muted">Only left <b>{stock}</b> available. Order soon</small></p>
                                <Rating className='my-2'
                                    initialRating={star}
                                    emptySymbol="far fa-star empty-star"
                                    fullSymbol="fas fa-star full-star"
                                    readonly
                                />
                                <br />
                                <button onClick={() => props.handleAddToCart(props.product)} className='order-button'> 
                                <span className='m-1'>{cartIcon}</span>
                                Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;