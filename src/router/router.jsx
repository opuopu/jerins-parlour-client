import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Home from "../component/Home";
import Login from "../component/login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Alluser from "../pages/Dashboard/admin/Alluser";
import Makeadmin from "../pages/Dashboard/admin/Makeadmin";
import PrivateRoute from "../pages/privateroute/PrivateRoute";
import AdminRoute from "./AdminRoute";

export const router  = createBrowserRouter([
    {path:"/",element:<Main></Main>,children:[
        {path:"/",element:<Home></Home>},
        {path:'/login',element:<Login/>}
    ]},
    {
        path:'/dashboard',element:<DashboardLayout/>,children:[
            {path:"/dashboard",element: <PrivateRoute><Dashboard/></PrivateRoute>},
            {path:'/dashboard/users',element:<AdminRoute><Alluser></Alluser></AdminRoute>},
            {path:'/dashboard/makeadmin',element:<AdminRoute><Makeadmin></Makeadmin></AdminRoute>}
        ]
    }
]
)