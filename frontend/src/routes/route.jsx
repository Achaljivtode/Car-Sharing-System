import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PageNotFound from "../pages/PageNotFound";

import CountactUsPage from "../pages/CountactUsPage";

import ServicePage from "../pages/ServicePage";
import AdminDashboard from "../pages/AdminDashboard";

import BookCarPage from "../pages/BookCarPage";

import Table from "../Components/Table/Table";

import Account from "../pages/Account";
import Helo from "../pages/helo";
import User from "../pages/Users";
import CarsReports2 from "../pages/CarsReport2";
import AddCar2 from "../pages/AddCar2";
import Booking2 from "../pages/Booking2";

import CustomerDashboard2 from "../pages/CustomerDashboard2";
import CustomerHistory from "../pages/History";

import ProfilePage from "../Components/ProfilePage/ProfilePage";
import BookYourRide from "../pages/BookYourRide";
import CarDetails from "../Components/CarDetails/CarDeatils";
import BookCarForm from "../Components/BookCarForm/BookCarForm";

// -----------------------forget ppassword-----------------------

import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
// -------------------------------------------
import ChangePassword from "../pages/ChangePassword";
// -------------------------------------------

const routes = createBrowserRouter([
  //  DEFAULT
  { path: "", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  // { path:'/about' , element:<AbourPage /> },
  { path: "/contact", element: <CountactUsPage /> },
  { path: "/services", element: <ServicePage /> },
  // { path: "/booking", element: <BookCars /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/book-car/:id", element: <BookCarPage /> },

  { path: "/table", element: <Table /> },

  { path: "/admin-dashboard", element: <AdminDashboard /> },

  // CUSTOMER -----

  { path: "my-Account", element: <Account /> },
  { path: "*", element: <PageNotFound /> },

  { path: "/helo", element: <Helo /> },
  { path: "/users", element: <User /> },
  { path: "/cars", element: <CarsReports2 /> },

  { path: "/add-cars", element: <AddCar2 /> },

  { path: "/book-now", element: <BookYourRide /> },

  { path: "/book-now/:carId", element: <BookYourRide /> },
  { path: "/Customer-booking", element: <CustomerHistory /> },
  { path: "/Customer-History", element: <CustomerHistory /> },
  { path: "/Customer-profile", element: <ProfilePage /> },

  { path: "/admin-booking", element: <Booking2 /> },
  { path: "/admin-accounts", element: <ProfilePage /> },

  // passord reset
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password/:uid/:token", element: <ResetPassword /> },

  { path: "/change-password", element: <ChangePassword /> },
]);

export default routes;
