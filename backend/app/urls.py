from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView,TokenObtainPairView
from app import views
urlpatterns = [
    path('users/',views.RegisterView.as_view(),name='register'),
    path('users/<int:pk>/',views.DetailCustomUserView.as_view(),name='users-detail'),
    
    path('user/', views.LoggedInUserView.as_view(), name='get_logged_in_user'),
    path('login/',views.LoginView.as_view(),name='login'),
    path('logout/',views.LogoutView.as_view(),name='logout'),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # JWT Token Refresh (Required for Refreshing Access Tokens)
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('cars/',views.CarView.as_view(),name='cars'),
    path('cars/<int:pk>/',views.DetailCarView.as_view(),name='cars-detail'),
    path('booking-report/',views.CarBookView.as_view(),name='booking-report'),
    path('booking-report/<int:pk>/',views.DetailCarBookView.as_view(),name='booking-report-detail'),
    
    path('enquiry/',views.EnquiryView.as_view(),name='enquiry'),
    path('enquiry/<int:pk>/',views.DetailEnquiryView.as_view(),name='enquiry-detail'),
    path('features/',views.FeatureListView.as_view(),name='features'),

    # ----------password reset --------------------
    path('password-reset-request/', views.PasswordResetRequestView.as_view(), name='password-reset-request'),

    path('password-reset-confirm/', views.PasswordResetConfirmView.as_view(), name='password-reset-confirm'),


    path("change-password/", views.ChangePasswordView.as_view(), name="change-password"),



   
]
