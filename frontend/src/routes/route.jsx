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
<<<<<<< HEAD
  { path: "", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/about", element: <AbourPage /> },
  { path: "/contact", element: <CountactUsPage /> },
  { path: "/services", element: <ServicePage /> },
=======
    { path:'' , element:<HomePage /> },
    { path:'/home' , element:<HomePage /> },
    { path:'/about' , element:<AbourPage /> },
    { path:'/contact' , element:<CountactUsPage /> },
    { path:'/services' , element:<ServicePage /> },
    { path:'/booking' , element:<BookCar /> },
    { path:'/register' , element:<RegisterPage /> },
    { path:'/login' , element:<LoginPage /> },
    { path:'/book-car/:id', element:<BookCarPage /> },
>>>>>>> 370e49c6188ed0dbf0ed5c6558c1b18154757e87

  { path: "/booking", element: <BookCar /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },

<<<<<<< HEAD
  // add
  { path: "/add-car", element: <CarAddPage /> },
=======
    // reports
    { path: '/booking-reports' , element: <AllBookingReport /> },
    { path: '/booking-details/:id' , element: <Bookingdetails /> },

    
    { path:'/admin-dashboard' , element:<AdminDashboard /> },
>>>>>>> 370e49c6188ed0dbf0ed5c6558c1b18154757e87

  // reports
  { path: "/booking-reports", element: <AllBookingReport /> },

  { path: "/admin-dashboard", element: <AdminDashboard /> },

  { path: "*", element: <PageNotFound /> },
]);

export default routes;
