import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import SignUp from "../pages/Login/SignUp/Signup";
import NotFound from "../pages/Login/NotFound/NotFound";
import Blog from "../pages/Blog/Blog";

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
        }
      ]
    },
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
  ]);

  export default router;