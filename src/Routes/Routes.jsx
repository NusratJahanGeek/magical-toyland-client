import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import SignUp from "../pages/Login/SignUp/Signup";
import NotFound from "../pages/Login/NotFound/NotFound";
import Blog from "../pages/Blog/Blog";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";

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
            path: "blogs",
            element: <Blog></Blog>
        },
        {
            path: "toys",
            element: <AllToys></AllToys>
        },
        {
            path: "add-toy",
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: "my-toys",
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        }
      ]
    },
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: "toy",
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: 
                    <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://magical-toyland-server.vercel.app/toys/${params.id}`)
            }
        ]
    }
  ]);

  export default router;