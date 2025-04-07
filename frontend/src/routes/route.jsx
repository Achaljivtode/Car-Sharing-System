import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PageNotFound from "../pages/PageNotFound";
import ServicePage from "../pages/ServicePage";
import User from "../pages/Users";
import CarsReports2 from "../pages/CarsReport2";
import AddCar2 from "../pages/AddCar2";
import Booking2 from "../pages/Booking2";
import CustomerHistory from "../pages/History";
import ProfilePage from "../Components/ProfilePage/ProfilePage";

// -----------------------forget ppassword-----------------------

import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
// -------------------------------------------
import ChangePassword from "../pages/ChangePassword";
import HomePage2 from "../pages/HomePage2";
import AboutPage from "../pages/AboutPage";
import AdminDashBoard from "../pages/AdminDashboard";
import BookYourRide from "../pages/BookYourRide";
import BookCarForm from "../Components/BookCarForm/BookCarForm";
// -------------------------------------------

const routes = createBrowserRouter([
  //  DEFAULT
  { path: "", element: <HomePage2 /> },
  { path: "/home", element: <HomePage2 /> },
  { path:'/about' , element:<AboutPage /> },
  { path: "/services", element: <ServicePage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  
  { path: "*", element: <PageNotFound /> },

  
  
  //  admin --------------
  
  { path: "/admin-dashboard", element: <AdminDashBoard /> },
  { path: "/users", element: <User /> },
  { path: "/admin-booking", element: <Booking2 /> },
  { path: "/cars", element: <CarsReports2 /> },
  { path: "/add-cars", element: <AddCar2 /> },
  { path: "/admin-accounts", element: <ProfilePage /> },
  
  
  // CUSTOMER -----
  
  { path: "/Customer-booking", element: <CustomerHistory /> },
  { path:'book-now/:carId',element:<BookYourRide /> },
  { path: "/Customer-History", element: <CustomerHistory /> },
  { path: "/Customer-profile", element: <ProfilePage /> },

    // passord reset
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/reset-password/:uid/:token", element: <ResetPassword /> },
  
    { path: "/change-password", element: <ChangePassword /> },




]);

export default routes;
