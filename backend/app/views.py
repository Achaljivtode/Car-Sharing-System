from django.shortcuts import render
from app.models import Car,CarBook,CustomUser,Enquiry
from rest_framework.permissions import IsAuthenticated
from app.permissions import IsAdmin,IsCustomer
from app.serializers import (
    CarSerializer,
    CarBookSerializer,
    CustomUserSerializer,
    
    EnquirySerializer,
    CustomUserSerializer)
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.parsers import JSONParser, FormParser # type: ignore
# Create your views here.


# class RegisterView(APIView):
#     def post(self,request):
#         data=request.data
#         serializer=CustomUserSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data,status=status.HTTP_201_CREATED)
#         return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class RegisterView(generics.ListCreateAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=CustomUserSerializer
    

    
User=get_user_model()

class LoginView(APIView):
    parser_classes = [JSONParser, FormParser] 
    def post(self,request):
        email=request.data.get('email')
        password=request.data.get('password')

        try :
            user=User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error":"Invalid Credentials"},status=status.HTTP_401_UNAUTHORIZED)
        
        if not  check_password(password,user.password):
            return Response({"error":"Invalid Credentials"},status=status.HTTP_401_UNAUTHORIZED)
        
        # Generate JWT Token
        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'role': user.role  # Send role in response
        })
    
    
    
class DetailCustomUserView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=CustomUserSerializer
    lookup_field='pk'
    permission_classes=[IsAuthenticated,IsAdmin]
    
# class LogoutView(APIView):
#     def post(self, request):
#         try:
#             refresh_token = request.data.get("refresh")
#             token = RefreshToken(refresh_token)
#             token.blacklist()  # Blacklist the refresh token
#             return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
#         except Exception:
#             return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]  #  Only authenticated users can log out

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh")  # Get refresh token from request
            token = RefreshToken(refresh_token)  # Create a RefreshToken instance
            token.blacklist()  #  Blacklist the refresh token

            return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
        except Exception:
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)

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
    permission_classes=[IsAuthenticated,IsCustomer]


class DetailCarBookView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CarBook.objects.all()
    serializer_class=CarBookSerializer
    lookup_field='pk'


# class CustomUserView(generics.ListCreateAPIView):
#     queryset=CustomUser.objects.all()
#     serializer_class=CustomUserSerializer
#     permission_classes=[IsAuthenticated,IsAdmin]




# class CarReportView(generics.ListCreateAPIView):
#     queryset=CarReport.objects.all()
#     serializer_class=CarReportSerializer


# class DetailCarReportView(generics.RetrieveUpdateDestroyAPIView):
#     queryset=CarReport.objects.all()
#     serializer_class=CarReportSerializer
#     lookup_field='pk'

# class CompanyView(generics.ListCreateAPIView):
#     queryset=Company.objects.all()
#     serializer_class=CompanySerializer

# class DetailCompanyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset=Company.objects.all()
#     serializer_class=CompanySerializer
#     lookup_field='pk'

# class CarTypeView(generics.ListCreateAPIView):
#     queryset=CarType.objects.all()
#     serializer_class=CarTypeSerializer

# class DetailCarTypeView(generics.RetrieveUpdateDestroyAPIView):
#     queryset=CarType.objects.all()
#     serializer_class=CarTypeSerializer
#     lookup_field='pk'

# class AgentView(generics.ListCreateAPIView):
#     queryset=Agent.objects.all()
#     serializer_class=AgentSerializer

# class DetailAgentView(generics.RetrieveUpdateDestroyAPIView):
#     queryset=Agent.objects.all()
#     serializer_class=AgentSerializer
#     lookup_field='pk'

class EnquiryView(generics.ListCreateAPIView):
    queryset=Enquiry.objects.all()
    serializer_class=EnquirySerializer

class DetailEnquiryView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Enquiry.objects.all()
    serializer_class=EnquirySerializer
    lookup_field='pk'
