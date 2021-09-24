import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
        console.log(total);
    }
    const tax = total * 0.10;
    const shippingCost = total > 0 ? 25 : 0;
    const grandTotal = total + tax + shippingCost;

    return (
        <div>
            <div className="card">
                <div className="card-header bg-primary text-center text-light">
                    <h3>My Cart</h3>
                </div>
                <div className="card-body">
                    <table class="table table-bordered border-primary">
                        <tbody>
                            <tr>
                                <td>Total Ordered Product</td>
                                <td>{cart.length}</td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td>$ {total.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$ {tax.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Shipping Cost</td>
                                <td>$ {shippingCost.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td><b>Total</b></td>
                                <td><b>$ {grandTotal.toFixed(2)}</b></td>
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