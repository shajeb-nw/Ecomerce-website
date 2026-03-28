import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Signup from "../Pages/Registation/Signup";
import Login from "../Pages/Registation/Login";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {path:"signup",Component:Signup},
      {path:"login",Component:Login},
      {path:"/",Component:Home}
    ]
    
  },
]);