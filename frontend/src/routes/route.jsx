import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PageNotFound from "../pages/PageNotFound";
import AbourPage from "../pages/AboutPage";
import CountactUsPage from "../pages/CountactUsPage";
import BookCar from "../pages/BookCar";
import ServicePage from "../pages/ServicePage";
import SideBar from "../Components/SideBar/SideBar";
import AdminDashboard from "../pages/AdminDashboard";


const routes = createBrowserRouter([
    // { path:'' , element:<HomePage /> },
    { path:'/home' , element:<HomePage /> },
    { path:'/about' , element:<AbourPage /> },
    { path:'/contact' , element:<CountactUsPage /> },
    { path:'/services' , element:<ServicePage /> },
    { path:'/booking' , element:<BookCar /> },
    { path:'/register' , element:<RegisterPage /> },
    { path:'/login' , element:<LoginPage /> },
    
    { path:'/admin-dashboard' , element:<AdminDashboard /> },


    
    { path:'*' , element:<PageNotFound /> },
])

export default routes;