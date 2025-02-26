import React, {useState} from 'react'
import ProductCards from "./ProductCards.jsx";
import product from '../../data/products.json';
const TrendingProducts = () => {
    const [visibleProducts,setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(pevCount => pevCount + 4);
    }

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>Discover the hottest picks: Elevate your style with our curated of trending women's fashion products</p>

        {/*  product card  */}
            <div className='mt-12'>
                <ProductCards products={product.slice(0,visibleProducts)}/>
            </div>

            {/*load more products button*/}
            <div className='product__btn'>
                {
                    visibleProducts < product.length && (
                        <button onClick={loadMoreProducts} className='btn'>Load More</button>
                    )
                }
            </div>
        </section>
    )
}
export default TrendingProducts
