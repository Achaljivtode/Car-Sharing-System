import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PageNotFound from "../pages/PageNotFound";
import AbourPage from "../pages/AboutPage";
import CountactUsPage from "../pages/CountactUsPage";
import BookCar from "../pages/BookCar";
import ServicePage from "../pages/ServicePage";
import AdminDashboard from "../pages/AdminDashboard";
import CarAddPage from "../pages/CarAddPage";
import AllBookingReport from "../pages/AllBookingReport";
import Bookingdetails from "../pages/Bookingdetails";
import BookCarPage from "../pages/BookCarPage";


const routes = createBrowserRouter([
    { path:'' , element:<HomePage /> },
    { path:'/home' , element:<HomePage /> },
    { path:'/about' , element:<AbourPage /> },
    { path:'/contact' , element:<CountactUsPage /> },
    { path:'/services' , element:<ServicePage /> },
    { path:'/booking' , element:<BookCar /> },
    { path:'/register' , element:<RegisterPage /> },
    { path:'/login' , element:<LoginPage /> },
    { path:'/book-car/:id', element:<BookCarPage /> },

    // add
    { path: '/add-car' , element: <CarAddPage /> },

    // reports
    { path: '/booking-reports' , element: <AllBookingReport /> },
    { path: '/booking-details/:id' , element: <Bookingdetails /> },

    
    { path:'/admin-dashboard' , element:<AdminDashboard /> },



    
    { path:'*' , element:<PageNotFound /> },
])

export default routes;