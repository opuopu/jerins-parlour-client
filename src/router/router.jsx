import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home";
import Login from "../component/login/Login";

export const router  = createBrowserRouter([
    {path:"/",element:<Main></Main>,children:[
        {path:"/",element:<Home></Home>},
        {path:'/login',element:<Login/>}
    ]}
]
)