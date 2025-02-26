import InstaImg1 from '../assets/instagram-1.jpg';
import InstaImg2 from '../assets/instagram-2.jpg';
import InstaImg3 from '../assets/instagram-3.jpg';
import InstaImg4 from '../assets/instagram-4.jpg';
import InstaImg5 from '../assets/instagram-5.jpg';
import InstaImg6 from '../assets/instagram-6.jpg';

export const Footer = () => {
    return (
        <>
            <footer className='section__container footer__container'>
                <div className='footer__col'>
                    <h4>CONTACT INFO</h4>
                    <p>
                        <span><i className="ri-map-pin-2-fill"></i></span>
                        123,london bridge street, London, SE1 0QL
                    </p>
                    <p>
                        <span><i className="ri-mail-fill"></i></span>
                        support@fashionflow.com
                    </p>
                    <p>
                        <span><i className="ri-phone-fill"></i></span>
                        (+012) 345 6789
                    </p>
                </div>
                <div className='footer__col'>
                    <h4>COMPANY</h4>
                    <a href="/">About Us</a>
                    <a href="/">Work With Us Us</a>
                    <a href="/">Our Blogs</a>
                    <a href="/">Terms & Conditions</a>
                </div>
                <div className='footer__col'>
                    <h4>USEFUL LINKS</h4>
                    <a href="/">Help</a>
                    <a href="/">Track My Order</a>
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">Dress</a>
                </div>
                <div className='footer__col'>
                    <h4>INSTAGRAM</h4>
                    <div className='instagram__grid'>
                        <img src={InstaImg1} alt=""/>
                        <img src={InstaImg2} alt=""/>
                        <img src={InstaImg3} alt=""/>
                        <img src={InstaImg4} alt=""/>
                        <img src={InstaImg5} alt=""/>
                        <img src={InstaImg6} alt=""/>
                    </div>
                </div>
            </footer>
            <div className='footer__bar'>
                Copyright &copy; 2025 algominds. All Rights Reserved.
            </div>
        </>
    )
}