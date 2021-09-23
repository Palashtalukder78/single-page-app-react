import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    /* const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0); */
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const serviceCharge = total > 0 ? 25 : 0;
    const tax = (10 / 100) * total;
    const grandTotal = tax + total + serviceCharge;

    return (
        <div>
            <div className="card">
                <div className="card-header text-center bg-primary text-light"><h3>Your Cart</h3></div>
                <div className="cart-body p-2">
                    <table class="table table-bordered border-primary">
                        <tbody>
                            <tr>
                                <td>Ordered</td>
                                <td>{totalQuantity}</td>
                            </tr>
                            <tr>
                                <td>Sub-Total</td>
                                <td>$ {total.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$ {tax.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Service Charge</td>
                                <td>$ {serviceCharge.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$ {grandTotal.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='d-grid'>
                        <button className='btn checkout-btn'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;