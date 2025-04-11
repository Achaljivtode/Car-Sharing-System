---

# 🚗 Car Sharing System – Fullstack (Django + React)

A car sharing system where users can book cars and admins can manage listings, users, and more through both a Django Admin Panel and a custom React dashboard.

> 
> 👥 **Group Project**

---

## 🎯 Features
- User Registration and JWT-based Login
- View available cars and submit enquiries
- Book a car with selected dates
- Admin can manage users, bookings, cars, and features
- Password reset support
- Admin panel via Django and custom React dashboard

---

## 🔧 Technologies
- **Backend:** Django, Django REST Framework
- **Frontend:** React.js
- **Database:** MySQL
- **Auth:** JWT (SimpleJWT)

---

## 📁 Project Structure
car-sharing-system/ ├── backend/ │ ├── carshare/ # Django app │ └── manage.py ├── frontend/ │ ├── src/ │ └── public/

---

## 📸 Screenshots


![Home](frontend/Resources/Screenshots/homepage.png) |
![Register Page](frontend/Resources/Screenshots/register_page.png) |
![Login Page](frontend/Resources/Screenshots/login_page.png) |
|![Contact Page](frontend/Resources/Screenshots/contact_page.png)|
![Customer Dashboard](frontend/Resources/Screenshots/customer_dashboard.png)|
![Admin Dashboard](frontend/Resources/Screenshots/admin_dashboard.png)|
![Profile Page](frontend/Resources/Screenshots/profile_page.png)|

---

## 🧑‍💻 Team Roles

- **Achal Jivtode** – Backend Developer  
  - Created all APIs, models, JWT auth, admin panel

- **Mohit Jodhe** – Frontend Developer  
  - Built UI in React, integrated API

---

## 🚀 Setup Instructions

### Clone & Install
```bash
git clone https://github.com/Achaljivtode/Car-Sharing-System.git
cd Car-Sharing-System
python -m venv env
# Windows: env\Scripts\activate
pip install -r requirements.txt

