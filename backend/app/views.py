from django.shortcuts import render
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import smart_str
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from rest_framework.permissions import IsAuthenticated
from app.permissions import IsAdmin,IsCustomer
from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth import get_user_model

from django.core.mail import send_mail
from django.conf import settings
from app.models import (
    Car,
    CarBook,
    CustomUser,
    Enquiry,
    Feature)
from app.serializers import (
    CarSerializer,
    CarBookSerializer,
    CustomUserSerializer,
    UserSerializer,
    EnquirySerializer,
    FeatureSerializer,
    CustomUserSerializer,
    PasswordResetRequestSerializer,
    PasswordResetSerializer,
    ChangePasswordSerializer
    )
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.parsers import JSONParser, FormParser # type: ignore
from django.urls import reverse

#--------------- register View ----------------------
class RegisterView(generics.ListCreateAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=CustomUserSerializer

    
User=get_user_model()

# ----------------- Login ------------------------------
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
    
# ----------------- Custom User---------------------------   
    
class DetailCustomUserView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=CustomUserSerializer
    lookup_field='pk'
    permission_classes=[IsAuthenticated]
    
# --------------------Logout ---------------------------------
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

# ------------------- cars---------------------------------
class CarView(generics.ListCreateAPIView):
    queryset=Car.objects.all()
    serializer_class=CarSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    def perform_create(self, serializer):
        # Attach the logged-in user while creating the booking
        serializer.save(user=self.request.user)

# ------------------ cars/id--------------------------------
class DetailCarView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Car.objects.all()
    serializer_class=CarSerializer
    lookup_field='pk'

# -------------------features -----------------------------
class FeatureListView(generics.ListCreateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

# --------------------- car book ---------------------------
class CarBookView(generics.ListCreateAPIView):
    queryset=CarBook.objects.all()
    serializer_class=CarBookSerializer
    permission_classes=[IsAuthenticated,IsCustomer]

    def perform_create(self, serializer):
        # Attach the logged-in user while creating the booking
        serializer.save(user=self.request.user)

# -----------------------  booking id ---------------------
class DetailCarBookView(generics.RetrieveUpdateDestroyAPIView):
    queryset=CarBook.objects.all()
    serializer_class=CarBookSerializer
    lookup_field='pk'

    def get_object(self):
        """Fetches the object and ensures its status is updated."""
        obj = super().get_object()
        obj.save()  # This will trigger the `save()` method to update the status if needed.
        return obj

# ----------------------- Enquiry ---------------------------
class EnquiryView(generics.ListCreateAPIView):
    queryset=Enquiry.objects.all()
    serializer_class=EnquirySerializer

# ---------------------- Enquiry Id --------------------------
class DetailEnquiryView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Enquiry.objects.all()
    serializer_class=EnquirySerializer
    lookup_field='pk'

# --------------------- Logged In User -----------------------
class LoggedInUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user  # Returns the currently logged-in user


# ------------------ password reset  request view--------------

class PasswordResetRequestView(generics.GenericAPIView):
    serializer_class = PasswordResetRequestSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            user = User.objects.get(email=email)

            # Generate password reset token
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)

            reset_link = f"{settings.FRONTEND_URL}/reset-password/{uid}/{token}/"

            # Send reset email
            send_mail(
                "Password Reset Request",
                f"Click the link to reset your password: {reset_link}",
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )

            return Response({"message": "Password reset link sent to your email."}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# --------------- password reset confirm view---------------

class PasswordResetConfirmView(generics.GenericAPIView):
    serializer_class = PasswordResetSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            uid = serializer.validated_data["uid"]
            token = serializer.validated_data["token"]
            new_password = serializer.validated_data["new_password"]

            try:
                user_id = smart_str(urlsafe_base64_decode(uid))
                user = User.objects.get(pk=user_id)
            except (TypeError, ValueError, OverflowError, User.DoesNotExist):
                return Response({"error": "Invalid token or user ID."}, status=status.HTTP_400_BAD_REQUEST)

            if not default_token_generator.check_token(user, token):
                return Response({"error": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)

            user.set_password(new_password)
            user.save()

            return Response({"message": "Password reset successfully!"}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ---------------- change password------------------------------
# API View for changing password
class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        user = request.user  # Get the logged-in user (CustomUser)
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            old_password = serializer.validated_data["old_password"]
            new_password = serializer.validated_data["new_password"]

            # Check if old password is correct
            if not user.check_password(old_password):
                return Response({"error": "Old password is incorrect"}, status=400)

            # Update password securely
            user.set_password(new_password)
            user.save()
            return Response({"message": "Password changed successfully"}, status=200)

        return Response(serializer.errors, status=400)