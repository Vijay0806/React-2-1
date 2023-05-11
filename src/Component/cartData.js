import React from 'react'
import { Cart } from './Cart'


const CartData = ({ count, setCount }) => {
    let productCard = [{

        name: 'Fancy Product',
        price: ' $40.00-$80.00',
        salcesEnabler: false,
        priceEnabler: false,
        
    },
    {
        name: 'Special product',
        price: ' $18.00-$18.00 ',
        salcesEnabler: true,
        priceEnabler: true,
        mutedText:"$20.00",
    },
    {
        name: 'Sale Item',
        price: ' $18.00-$18.00',
        salcesEnabler: true,
        priceEnabler:true,
        mutedText:"$50.00",
    },
    {
        name: 'Popular Item',
        price: ' $40.00',
        salcesEnabler: false,
        priceEnabler:false,
        
    },
    {
        name: 'Special product',
        price: ' $18.00-$18.00',
        salcesEnabler: true,
        priceEnabler:true,
        mutedText:"$50.00",
    },
    {
        name: 'Sale Item',
        price: ' $18.00-$18.00',
        salcesEnabler: false,
        priceEnabler:false,
        
    },
    {
        name: 'Popular Item',
        price: ' $40.00',
        salcesEnabler: true,
        priceEnabler:true,
        mutedText:"$20.00",
    },
    {
        name: 'Popular Item',
        price: '$40.00',
        salcesEnabler: false,
        priceEnabler:false,
    },
    ]

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {productCard.map((cartData, index) => (
                            <Cart data={cartData} count={count} setCount={setCount} key={index} />
                        ))}



                    </div>
                </div>
            </section>
        </>
    )
}

export default CartData