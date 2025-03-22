from django.shortcuts import render
from app.models import Car,CarBook,CustomUser,CarReport,CarType,Company,Agent,Enquiry
from app.serializers import CarSerializer,CarBookSerializer,CustomUserSerializer,CarReportSerializer , CompanySerializer,CarTypeSerializer,AgentSerializer,EnquirySerializer
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.



class CarView(generics.ListCreateAPIView):
    queryset=Car.objects.all()
    serializer_class=CarSerializer
    parser_classes = (MultiPartParser, FormParser)  # Accept file uploads
     
class DetailCarView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Car.objects.all()
    serializer_class=CarSerializer
    lookup_field='pk'

class CarBookView(generics.ListCreateAPIView):
    queryset=CarBook.objects.all()
    serializer_class=CarBookSerializer


class DetailCarBookView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CarBook.objects.all()
    serializer_class=CarBookSerializer
    lookup_field='pk'


class CustomUserView(generics.ListCreateAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=CustomUserSerializer


class DetailCustomUserView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=CustomUserSerializer
    lookup_field='pk'

class CarReportView(generics.ListCreateAPIView):
    queryset=CarReport.objects.all()
    serializer_class=CarReportSerializer


class DetailCarReportView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CarReport.objects.all()
    serializer_class=CarReportSerializer
    lookup_field='pk'

class CompanyView(generics.ListCreateAPIView):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer

class DetailCompanyView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer
    lookup_field='pk'

class CarTypeView(generics.ListCreateAPIView):
    queryset=CarType.objects.all()
    serializer_class=CarTypeSerializer

class DetailCarTypeView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CarType.objects.all()
    serializer_class=CarTypeSerializer
    lookup_field='pk'

class AgentView(generics.ListCreateAPIView):
    queryset=Agent.objects.all()
    serializer_class=AgentSerializer

class DetailAgentView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Agent.objects.all()
    serializer_class=AgentSerializer
    lookup_field='pk'

class EnquiryView(generics.ListCreateAPIView):
    queryset=Enquiry.objects.all()
    serializer_class=EnquirySerializer

class DetailEnquiryView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Enquiry.objects.all()
    serializer_class=EnquirySerializer
    lookup_field='pk'
