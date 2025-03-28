from django.shortcuts import render
from app.models import Car,CarBook,CustomUser,Enquiry,Feature
from rest_framework.permissions import IsAuthenticated
from app.permissions import IsAdmin,IsCustomer
from app.serializers import (
    CarSerializer,
    CarBookSerializer,
    CustomUserSerializer,
    UserSerializer,
    EnquirySerializer,
    FeatureSerializer,
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
    permission_classes=[IsAuthenticated]
    



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
    parser_classes = (MultiPartParser, FormParser, JSONParser)
     
class DetailCarView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Car.objects.all()
    serializer_class=CarSerializer
    lookup_field='pk'

class FeatureListView(generics.ListCreateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class CarBookView(generics.ListCreateAPIView):
    queryset=CarBook.objects.all()
    serializer_class=CarBookSerializer
    permission_classes=[IsAuthenticated,IsCustomer]


class DetailCarBookView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CarBook.objects.all()
    serializer_class=CarBookSerializer
    lookup_field='pk'


class EnquiryView(generics.ListCreateAPIView):
    queryset=Enquiry.objects.all()
    serializer_class=EnquirySerializer

class DetailEnquiryView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Enquiry.objects.all()
    serializer_class=EnquirySerializer
    lookup_field='pk'


class LoggedInUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user  # Returns the currently logged-in user
