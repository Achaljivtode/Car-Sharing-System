import axios from "axios";

// Backend Base URL
const API_BASE_URL = "http://localhost:8000/api"; // Change this if your backend URL is different

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;

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

export const fetchEnquiries = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/enquiry/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};

export const deleteEnquiry = async (enquiryId) => {
  try {
    const token = localStorage.getItem("token");
    await api.delete(`/enquiry/${enquiryId}/`, {
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

export const getBookingById = async (bookingId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get(`/booking-report/${bookingId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetch booking for this id:", error);
    return false; // Failure
  }
};

export const cancelBooking = async (bookingId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.patch(
      `/booking-report/${bookingId}/`,
      { booking_status: "Cancelled" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Success
  } catch (error) {
    console.error(
      "Error canceling booking:",
      error.response?.data || error.message
    );
    return {
      success: false,
      message: error.response?.data?.detail || "Failed to cancel booking",
    };
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

export const fetchCarsById = async (carId) => {
  if (!carId) {
    console.error("fetchCarsById was called with an undefined carId!");
    return null;
  }
  try {
    const response = await api.get(`/cars/${carId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

export const deleteCar = async (carId) => {
  try {
    const token = localStorage.getItem("token"); // Ensure authentication
    const response = await api.delete(`/cars/${carId}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include JWT token if required
      },
    });

    if (response.status === 204 || response.status === 200) {
      return true; // Successfully deleted
    } else {
      console.error(
        "Failed to delete car:",
        response.status,
        response.statusText
      );
      return false; // Failed deletion
    }
  } catch (error) {
    console.error("Error deleting car:", error.response?.data || error.message);
    return false;
  }
};

// ----------------------------------------------------------

export const getLoggedInUser = async () => {
  try {
    const token = localStorage.getItem("token"); // Ensure token exists
    if (!token) {
      console.error("No authentication token found!");
      return null;
    }
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

export const updateUserProfile = async (userId, updatedData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.put(`/users/${userId}/`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    return null;
  }
};

// fetch Features
export const fetchFeatures = async () => {
  try {
    const response = await api.get("/features/"); //  Fetch available features from backend
    return response.data;
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};

// add Car
export const addCar = async (carData) => {
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("user", carData.user);
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
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding car:", error);
    return null;
  }
};

// Book Car
export const bookCar = async (bookCarData) => {
  try {
    console.log(" Sending request to API:", bookCarData);

    const token = localStorage.getItem("token");

    const response = await api.post(`/booking-report/`, bookCarData, {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
    });
    console.log(" API Response:", response.data);

    return response;
  } catch (error) {
    console.error(
      "Error in bookCar API:",
      error.response?.data || error.message
    );
    throw error;
    // return null;
  }
};

// -------------------Reset Password------------------------------

// 🚀 API to request a password reset
export const requestPasswordReset = async (email) => {
  try {
    const response = await api.post("/password-reset-request/", { email });
    return response.data; // Returns { "message": "Password reset link sent to your email." }
  } catch (error) {
    throw error.response?.data || { error: "Something went wrong" };
  }
};

// 🚀 API to confirm the password reset
export const confirmPasswordReset = async (
  uid,
  token,
  newPassword,
  confirmPassword
) => {
  try {
    const response = await api.post("/password-reset-confirm/", {
      uid,
      token,
      new_password: newPassword,
      confirm_password: confirmPassword,
    });
    return response.data; // Returns { "message": "Password reset successfully!" }
  } catch (error) {
    throw error.response?.data || { error: "Something went wrong" };
  }
};

// -------------------------------------------------------------------------
// 🚀 API to Change Password (for Logged-in Users)
export const changePassword = async (
  oldPassword,
  newPassword,
  confirmPassword
) => {
  try {
    const token = localStorage.getItem("token"); // Ensure user is authenticated
    if (!token) {
      throw new Error("User not authenticated");
    }

    const response = await api.put(
      "/change-password/",
      {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // Returns { "message": "Password changed successfully" }
  } catch (error) {
    console.error(
      "Error changing password:",
      error.response?.data || error.message
    );
    return error.response?.data || { error: "Something went wrong" };
  }
};
