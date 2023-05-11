import React, { useState } from 'react'
import Rating from '@mui/material/Rating';

export function Cart(props) {
    return (
        <>

            <div className="col mb-5">
                <div className="card h-100">
                    {props.data.salcesEnabler ? <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div> : null}

                    {/* <!-- Product image--> */}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/* <!-- Product details--> */}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{props.data.name}</h5>
                            {/* <!-- Product price--> */}
                            {props.data.priceEnabler ? <span className="text-muted text-decoration-line-through">${props.data.mutedText}</span> : null}
                            {props.data.price}<br />

                            <Rating name="half-rating" defaultValue={3} precision={1} />
                        </div>
                    </div>
                    <CartButton count={props.count} setCount={props.setCount} />
                </div>
            </div>


        </>
    )
}



function CartButton({ count, setCount }) {
    let [toggle, setToggle] = useState(true);
    return (
        <div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">

                    {toggle ? <button className="btn btn-outline-dark mt-auto" onClick={() => { setCount(++count); setToggle(!toggle); }}>Add to Cart</button>
                        :
                        <button className="btn btn-outline-dark mt-auto" onClick={() => { setCount(--count); setToggle(!toggle); }}>Remove</button>}
                </div>
            </div>
        </div>
    )
}