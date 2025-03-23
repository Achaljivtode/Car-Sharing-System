from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from app import views
urlpatterns = [
    path('users/',views.RegisterView.as_view(),name='register'),
    path('users/<int:pk>/',views.DetailCustomUserView.as_view(),name='users-detail'),
    path('login/',views.LoginView.as_view(),name='login'),
    path('logout/',views.LogoutView.as_view(),name='logout'),

    # JWT Token Refresh (Required for Refreshing Access Tokens)
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('cars/',views.CarView.as_view(),name='cars'),
    path('cars/<int:pk>/',views.DetailCarView.as_view(),name='cars-detail'),
    path('booking-report/',views.CarBookView.as_view(),name='booking-report'),
    path('booking-report/<int:pk>/',views.DetailCarBookView.as_view(),name='booking-report-detail'),
    
    
    path('car-report/',views.CarReportView.as_view(),name='car-reports'),
    path('car-report/<int:pk>/',views.DetailCarReportView.as_view(),name='detail-car-reports'),
    path('companies/',views.CompanyView.as_view(),name='companies'),
    path('companies/<int:pk>/',views.DetailCompanyView.as_view(),name='company-details'),
    path('car-types/',views.CarTypeView.as_view(),name='car-types'),
    path('car-types/<int:pk>/',views.DetailCarTypeView.as_view(),name='car-types-details'),
    path('agents/',views.AgentView.as_view(),name='agents'),
    path('agents/<int:pk>/',views.DetailAgentView.as_view(),name='agents-details'),
    path('enquiry/',views.EnquiryView.as_view(),name='enquiry'),
    path('enquiry/<int:pk>/',views.DetailEnquiryView.as_view(),name='enquiry-detail'),

   
]
