import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import {CategoryPage} from "../pages/category/CategoryPage.jsx";
import {Search} from "../pages/search/Search.jsx";
import ShopPage from "../pages/shop/ShopPage.jsx";
import {SingleProduct} from "../pages/shop/product/SingleProduct.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/>},
        {path: "/categories/:categoryName", element: <CategoryPage/>},
        {path:"/search",element:<Search/>},
        {path:"/shop" ,element:<ShopPage/>},
        {path:"/shop/:id",element:<SingleProduct/>}
      ],
    },
  ]);

  export default router;