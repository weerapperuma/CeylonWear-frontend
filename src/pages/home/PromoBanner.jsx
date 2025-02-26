import React from 'react'
import dealsSection from "./DealsSection.jsx";

const PromoBanner = () => {
    return (
        <section className='section__container banner__container'>
            <div className="banner__card">
                <span><i className="ri-truck-line"></i></span>
                <h4>Free Delivery</h4>
                <p>Offer Convenience at the ability to shop from anywhere, anytime!</p>
            </div>
            <div className="banner__card">
                <span><i className="ri-money-dollar-circle-line"></i></span>
                <h4>100% Money Back Guarantee!</h4>
                <p>Ecommerce platform have a review system where customer can share and feedback!</p>
            </div>
            <div className="banner__card">
                <span><i className="ri-user-voice-fill"></i></span>
                <h4>Free Delivery</h4>
                <p>Offer Convenience at the ability to shop from anywhere, anytime!</p>
            </div>
        </section>
    )
}
export default PromoBanner
