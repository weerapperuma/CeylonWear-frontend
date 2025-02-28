import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";
import CartModal from "../pages/shop/CartModal.jsx";

const NavBar = () => {
    const products = useSelector((state) => state.cart.products);
    const [isCartOpen,setisCartOpen] = useState(false);
    const handleCartToggle = () => {
        setisCartOpen(!isCartOpen);
    }

    return (
    <header className="fixed-nav-bar w-nav">
        <nav className='max-w-screen-2xl mx-auto px-4 py-6 flex justify-between items-center'>
            <ul className='nav__links'>
                <li className='link'><Link to="/">Home</Link></li>
                <li className='link'><Link to="/shop">Shop</Link></li>
                <li className='link'><Link to="/">Pages</Link></li>
                <li className='link'><Link to="/">Contact</Link></li>
            </ul>

            {/* logo */}
            <div className='nav__logo'>
                <Link to="/">Fashion Flaw<span>.</span></Link>
            </div>
            
            {/* nav icons */}
            <div className="nav__icons relative">
                <span>
                    <Link to="/search"><i className="ri-search-line"></i></Link>
                </span>
                <span>
                    <button onClick={handleCartToggle} className='hover:text-primary'>
                        <i className="ri-shopping-bag-line"></i>
                        <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>{products.length}</sup>
                    </button>
                </span>
                <span>
                    <Link to="login">
                     <i className="ri-user-line"></i>
                    </Link>
                </span>
            </div>
        </nav>

        {
            isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle}/>
        }
    </header>
  )
}

export default NavBar