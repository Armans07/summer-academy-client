import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/Signup/SignUp";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Error/ErrorPage";
import Extra from "../Extra/Extra";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/dashboard',
            element:<PrivetRoute><Extra></Extra></PrivetRoute>
        }
      ]
    },{
        path:'/*',
        element:<ErrorPage></ErrorPage>

    }
  ]);

  export default router;