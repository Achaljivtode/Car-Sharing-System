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
import AllCarReports from "../pages/AllCarReports";
import AllCarTypeReports from "../pages/AllCarTypeReports";
import Table from "../Components/Table/Table";
import AllCompanyReports from "../pages/AllCompanyReports";
import AllCustomerReports from "../pages/AllCustomerReports";
import EditCarPage from "../pages/EditCarPage";
import AddCompany from "../pages/AddCompany";
import AddCartype from "../pages/AddCartype";
import EditCarType from "../pages/EditCarType";
import EditCompany from "../pages/EditCompany";


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

    { path:'/table', element:<Table /> },

  // add
  { path: "/add-car", element: <CarAddPage /> },
  { path: "/add-car-type", element: <AddCartype /> },
  { path: "/add-company", element: <AddCompany /> },

    // reports
    
    { path: '/car-reports' , element: <AllCarReports /> },
    { path: '/car-details:id' , element: <EditCarPage /> },


    { path: '/car-type-reports' , element: <AllCarTypeReports /> },
    { path:'/car-type/edit/:id', element:<EditCarType /> },

    { path: '/company-reports' , element: <AllCompanyReports /> },
    { path: '/company-report/edit/:id' , element: <EditCompany /> },

    { path: '/customer-reports' , element: <AllCustomerReports /> },

    { path: '/booking-reports' , element: <AllBookingReport /> },
    { path: '/booking-details/:id' , element: <Bookingdetails /> },

    
    { path:'/admin-dashboard' , element:<AdminDashboard /> },



    
    { path:'*' , element:<PageNotFound /> },
])

export default routes;
