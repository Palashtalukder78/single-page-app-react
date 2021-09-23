import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart-container/Cart';
import Products from '../Products-Container/Products';

const Main = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const handleCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className="row my-3">
                <div className='col-md-9'>
                {
                    products.map(product=> <Products
                        key = {product.key} 
                        product = {product}
                        handleCart ={handleCart}
                    ></Products>
                    )
                }
                </div>
                <div className='col-md-3'>

                <Cart cart={cart}></Cart>
                </div>
            
            </div>
        </div>
    );
};

export default Main;