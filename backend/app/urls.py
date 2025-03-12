from django.urls import path
from app import views
urlpatterns = [
    path('cars/',views.CarView.as_view(),name='cars'),
    path('cars/<int:pk>/',views.DetailCarView.as_view(),name='cars-detail'),
    path('booking-report/',views.CarBookView.as_view(),name='booking-report'),
    path('booking-report/<int:pk>/',views.DetailCarBookView.as_view(),name='booking-report-detail'),
    path('users/',views.CustomUserView.as_view(),name='users'),
    path('users/<int:pk>/',views.DetailCustomUserView.as_view(),name='users-detail'),
    path('car-report/',views.CarReportView.as_view(),name='car-reports'),
    path('car-report/<int:pk>/',views.DetailCarReportView.as_view(),name='detail-car-reports'),
    path('companies/',views.CompanyView.as_view(),name='companies'),
    path('companies/<int:pk>/',views.DetailCompanyView.as_view(),name='company-details'),
    path('car-types/',views.CarTypeView.as_view(),name='car-types'),
    path('car-types/<int:pk>/',views.DetailCarTypeView.as_view(),name='car-types-details'),

   
]
