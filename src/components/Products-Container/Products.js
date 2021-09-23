import './Products.css';

const Products = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div >
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} className="img-fluid rounded-start p-3" alt="" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title product-name">{name}</h5>
                            <p class="card-text ">By <small className='text-info'><b>{seller}</b> </small></p>
                            <h4 class="card-text">Price: $ {price}</h4>
                            <p class="card-text"><small class="text-muted">Only left {stock} available. Order Soon</small></p>
                            <button onClick={() => props.handleCart(props.product)} className='order-btn'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;