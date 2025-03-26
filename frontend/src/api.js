import axios from "axios";

// Backend Base URL
const API_BASE_URL = "http://localhost:8000/api"; // Change this if your backend URL is different

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to Register a User (Supports File Upload)
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/users/", userData, {
      headers: {
        "Content-Type": "multipart/form-data", //  Ensure correct format for file uploads
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

// ----------------------------------------------------------------------

export const fetchCustomers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/users/?role=customer", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching customers : ", error);
    return null;
  }
};
// -------------------------------------------------------------------------------
export const deleteCustomer = async (customerId) => {
  try {
    const token = localStorage.getItem("token");
    await api.delete(`/users/${customerId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    console.error("Error deleting customer:", error);
    return false;
  }
};
// ------------------------------------------------------------------------------
// Function to Login User
export const loginUser = async (userData) => {
  try {
    const response = await api.post("/login/", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

export default api;

// Contact Us or Enquiry

export const enquiry = async (formData) => {
  try {
    const response = await api.post(`/enquiry/`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting Enquiry  :", error);
    return null;
  }
};

export const getBookings = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/booking-report/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching customers : ", error);
    return null;
  }
};

export const cancelBooking = async (bookingId) => {
  try {
    const token = localStorage.getItem("token");
    await api.delete(`/booking-report/${bookingId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true; // Success
  } catch (error) {
    console.error("Error canceling booking:", error);
    return false; // Failure
  }
};

export const fetchCars = async () => {
  try {
    const response = await api.get("/cars/");
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

// ----------------------------------------------------------

export const getLoggedInUser = async () => {
  try {
    const token = localStorage.getItem("token"); // Ensure token exists
    const response = await api.get("/user/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching logged-in user:", error);
    return null;
  }
};

// fetch Features
export const fetchFeatures = async () => {
  try {
    const response = await api.get("/features/"); // ✅ Fetch available features from backend
    return response.data;
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};

// add Car
export const addCar = async (carData) => {
  try {
    const formData = new FormData();

    formData.append("car_owner", carData.car_owner);
    formData.append("car_model", carData.car_model);
    formData.append("car_number", carData.car_number);
    formData.append("fuel_type", carData.fuel_type);
    formData.append("price_per_hour", carData.price_per_hour);
    formData.append("status", carData.status);

    // Send feature IDs instead of names
    carData.feature_ids.forEach((id) => formData.append("feature_ids", id));

    if (carData.car_image) {
      formData.append("car_image", carData.car_image);
    }

    const response = await api.post("/cars/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding car:", error);
    return null;
  }
};
