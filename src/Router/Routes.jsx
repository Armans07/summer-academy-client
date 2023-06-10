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
import MyClass from "../Layout/Dashboard/StudentBoard/SelectedClass";
import Payment from "../Layout/Dashboard/StudentBoard/Pyment/Payment";
import AddClss from "../Layout/Dashboard/InstructorBoard/AddClass";
import EnrolledClasses from "../Layout/Dashboard/StudentBoard/EnrolledClasses";
import SelectedClass from "../Layout/Dashboard/StudentBoard/SelectedClass";
import AddClass from "../Layout/Dashboard/InstructorBoard/AddClass";
import InstructorAdded from "../Layout/Dashboard/InstructorBoard/InstructorAdded";
import ManageClasses from "../Layout/Dashboard/AdminBoard/ManageClasses";
import ManageUser from "../Layout/Dashboard/AdminBoard/ManageUser";

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
            element: <SelectedClass></SelectedClass>
          }, {
            path: 'enrolledclass',
            element: <EnrolledClasses></EnrolledClasses>
          },
          {
            path: 'payment',
            element: <Payment></Payment>
          },
          {
            path: 'addclass',
            element: <AddClass></AddClass>
          },{
            path:'instructoradded',
            element:<InstructorAdded></InstructorAdded>
          },
          {
            path:'manegeclass',
            element:<ManageClasses></ManageClasses>
          },
          {
            path:'manegeuser',
            element:<ManageUser></ManageUser>
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