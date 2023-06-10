import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/Signup/SignUp";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Error/ErrorPage";
import MusicClasses from "../Pages/Home/MusicClass/MusicClasses";
import InstructorCard from "../Pages/Home/PopularInstructor/InstructorCard";
import AllClasses from "../Pages/Home/MusicClass/AllClasses";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Instructors from "../Pages/Home/PopularInstructor/Instructors";
import AllInstructors from "../Pages/Home/PopularInstructor/AllInstructors";
import MyClass from "../Layout/Dashboard/MyClass/MyClass";
import Payment from "../Layout/Dashboard/Pyment/Payment";
import AddClss from "../Layout/Dashboard/AddClass/AddClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
          {
            path: 'myclass',
            element: <MyClass></MyClass>
          },
          {
            path: 'payment',
            element: <Payment></Payment>
          },
          {
            path:'addclass',
            element:<AddClss></AddClss>
          }
        ]
      }, {
        path: '/classes',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/instructors',
        element: <AllInstructors></AllInstructors>
      },

    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>

  }
]);

export default router;