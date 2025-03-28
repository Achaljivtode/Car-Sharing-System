import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PageNotFound from "../pages/PageNotFound";
// import AbourPage from "../pages/AboutPage";
import CountactUsPage from "../pages/CountactUsPage";
import BookCar from "../pages/BookCar";
import ServicePage from "../pages/ServicePage";
import AdminDashboard from "../pages/AdminDashboard";
// import CarAddPage from "../pages/CarAddPage";
// import AllBookingReport from "../pages/AllBookingReport";
// import Bookingdetails from "../pages/Bookingdetails";
// import BookCarPage from "../pages/BookCarPage";
// import AllCarReports from "../pages/AllCarReports";
// import AllCarTypeReports from "../pages/AllCarTypeReports";
import Table from "../Components/Table/Table";
// import AllCompanyReports from "../pages/AllCompanyReports";
// import AllCustomerReports from "../pages/AllCustomerReports";
// import EditCarPage from "../pages/EditCarPage";
// import AddCompany from "../pages/AddCompany";
// import AddCartype from "../pages/AddCartype";
// import EditCarType from "../pages/EditCarType";
// import EditCompany from "../pages/EditCompany";
// import CustomerDashboard from "../pages/CustomerDashboard";
// import CustomerBookingPage from "../pages/CustomerBookingPage";
import Account from "../pages/Account";
import Helo from "../pages/helo";
import User from "../pages/Users";
import CarsReports2 from "../pages/CarsReport2";
import AddCar2 from "../pages/AddCar2";
import Booking2 from "../pages/Booking2";
// import CustomerHistory from "../pages/History";
import CustomerDashboard2 from "../pages/CustomerDashboard2";
import CustomerHistory from "../pages/History";
// import CustomerProfilePage from "../pages/CustomerProfilePage";
import ProfilePage from "../Components/ProfilePage/ProfilePage";

const routes = createBrowserRouter([
  //  DEFAULT
  { path: "", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  // { path:'/about' , element:<AbourPage /> },
  { path: "/contact", element: <CountactUsPage /> },
  { path: "/services", element: <ServicePage /> },
  { path: "/booking", element: <BookCar /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  // { path: "/book-car/:id", element: <BookCarPage /> },

  { path: "/table", element: <Table /> },

  // ADMIN -------
  // add
  // { path: "/add-car", element: <CarAddPage /> },
  // { path: "/add-car-type", element: <AddCartype /> },
  // { path: "/add-company", element: <AddCompany /> },

  // reports

  // { path: "/car-reports", element: <AllCarReports /> },
  // { path: "/car-details:id", element: <EditCarPage /> },

  // { path: "/car-type-reports", element: <AllCarTypeReports /> },
  // { path: "/car-type/edit/:id", element: <EditCarType /> },

  // { path: "/company-reports", element: <AllCompanyReports /> },
  // { path: "/company-report/edit/:id", element: <EditCompany /> },

  // { path: "/customer-reports", element: <AllCustomerReports /> },

  // { path: "/booking-reports", element: <AllBookingReport /> },
  // { path: "/booking-details/:id", element: <Bookingdetails /> },

  { path: "/admin-dashboard", element: <AdminDashboard /> },

  // CUSTOMER -----

  // { path: "/my-booking", element: <CustomerBookingPage /> },
  // { path: "/customer-dashboard", element: <CustomerDashboard /> },

  { path: "my-Account", element: <Account /> },
  { path: "*", element: <PageNotFound /> },

  { path: "/helo", element: <Helo /> },
  { path: "/users", element: <User /> },
  { path: "/admin-booking", element: <Booking2 /> },
  { path: "/cars", element: <CarsReports2 /> },
  { path: "/add-cars", element: <AddCar2 /> },
  // { path: "/perticular-book", element: <PerticularBook /> },
  { path: "/Customer-dashboard", element: <CustomerDashboard2 /> },
  { path: "/Customer-booking", element: <CustomerHistory /> },
  { path: "/Customer-History", element: <CustomerHistory /> },
  { path: "/Customer-profile", element: <ProfilePage /> },
]);

export default routes;
