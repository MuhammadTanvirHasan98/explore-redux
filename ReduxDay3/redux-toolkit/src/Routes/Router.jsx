import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import Cart from "../Components/Cart";
import App from "../App";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/counter',
        element:<App/>
      }
    ]
  },
]);