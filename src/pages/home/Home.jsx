import React from 'react'
import Banner from './Banner.jsx'
import Categories from "./Categories.jsx";
import HeroSection from "./HeroSection.jsx";
import DealsSection from "./DealsSection.jsx";
import TrendingProducts from "../shop/TrendingProducts.jsx";
import PromoBanner from "./PromoBanner.jsx";
import Blogs from "../../blogs/Blogs.jsx";
import {Footer} from "../../components/Footer.jsx";

const Home = () => {
  return (
    <>
        <Banner/>
        <Categories/>
        <HeroSection/>
        <TrendingProducts/>
        <DealsSection/>
        <PromoBanner/>
        <Blogs/>
    </>
  )
}

export default Home