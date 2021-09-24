import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            })
    }, []);
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const searchProduct = event =>{
        const searchText =  event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProduct);
    }
    return (
        <>
            <div className='container my-3'>
                <div class="input-group w-100">
                    <input onChange={searchProduct} type="text" class="form-control search-btn" aria-label="Username" aria-describedby="basic-addon1" placeholder='Search product by Name' />
                </div>

                <div className="row my-4">
                    <div className="col-md-8">
                        {
                            displayProduct.map(product => <Products
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Products>)
                        }
                    </div>
                    <div className='col-md-4'>
                        <Cart cart={cart} ></Cart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;