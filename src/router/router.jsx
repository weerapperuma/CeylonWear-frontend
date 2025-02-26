import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import {CategoryPage} from "../pages/category/CategoryPage.jsx";
import {Search} from "../pages/search/Search.jsx";
import ShopPage from "../pages/shop/ShopPage.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/>},
        {path: "/categories/:categoryName", element: <CategoryPage/>},
        {path:"/search",element:<Search/>},
        {path:"/shop" ,element:<ShopPage/>},
      ],
    },
  ]);

  export default router;