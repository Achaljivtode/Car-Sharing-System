import axios from "axios";

// Backend Base URL
const API_BASE_URL = "http://localhost:8000/api"; // Change this if your backend URL is different

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to Fetch Cars
export const fetchCars = async () => {
  try {
    const response = await api.get("/cars/");
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return null;
  }
};

export const fetchCarById = async (carId) => {
  try {
    const response = await api.get(`/cars/${carId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car details:", error);
    return null;
  }
};

// Book a car
export const bookCar = async (bookingData) => {
  try {
    const token = localStorage.getItem("token"); //  Ensure user is logged in
    const response = await api.post("/booking-report/", bookingData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include auth token
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error booking car:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

export const getAllBookingReports = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/booking-report/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bookinReports:", error);
    return [];
  }
};

export const getBookingById = async (bookId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get(`/booking-report/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching car details:", error);
    return [];
  }
};

export const fetchAgents = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get(`/agents`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching agents : ", error);
    return [];
  }
};

export const addCar = async (carData) => {
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();

    // Append all fields to FormData (for file uploads)
    Object.keys(carData).forEach((key) => {
      formData.append(key, carData[key]);
    });
    const response = await api.post(`/cars/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error adding car:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

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

// ______________________________________________________________________

export const getAllCarReports = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get(`/car-report/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return null;
  }
};

export const addcarType = async (carType) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(`/car-types/`, carType, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding car Type :", error);
    return null;
  }
};

export const getCarTypeReport = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get(`/car-types/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return null;
  }
};

export const getCompanyReport = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get(`/companies/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return null;
  }
};

// ______________________________________________________

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
