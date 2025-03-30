from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from app.models import (
    Car,
    CarBook,
    CustomUser,
    Feature,
    Enquiry,
    CustomUser
)


# class CustomUserSerializer(serializers.ModelSerializer):
#     user_image_url=serializers.SerializerMethodField()
#     password=serializers.CharField(write_only=True)
#     confirm_password=serializers.CharField(write_only=True)

#     class Meta:
#         model=CustomUser
#         fields=['id','username','email','password','confirm_password','full_name','user_image','user_image_url','dob','phone_number','address','role']


#     def validate(self,data):
#         if data['password'] != data['confirm_password']:
#             raise serializers.ValidationError({"Confirm Password":"password does not match ..."})
#         return data
    
#     def create(self,validated_data):
#         validated_data.pop('confirm_password')
#         validated_data['password'] = make_password(validated_data['password'])  # Hash Passowrd
#         user=CustomUser.objects.create_user(**validated_data)
#         return user

#     def get_user_image_url(self,obj):
#         request=self.context.get('request')
#         if obj.user_image and request:
#             return request.build_absolute_uri(obj.user_image.url)
#         return None


class FeatureSerializer(serializers.ModelSerializer):
    """Serializer for Features"""
    class Meta:
        model = Feature
        fields = ["id", "name"]

# Car Seraializer

class CarSerializer(serializers.ModelSerializer):
    user_image_url=serializers.SerializerMethodField()
    user_full_name=serializers.CharField(source='user.full_name',read_only=True)
    user_email=serializers.CharField(source='user.email',read_only=True)
    user_contact=serializers.CharField(source='user.phone_number',read_only=True)
    car_image_url=serializers.SerializerMethodField() # Generate full URL
    features = FeatureSerializer(many=True, read_only=True)  # Nested serializer for read
    feature_ids = serializers.PrimaryKeyRelatedField(
        queryset=Feature.objects.all(), source="features", many=True, write_only=True
    )  # Used for posting selected features
    
    
    class Meta:
        model=Car
        fields=['id','car_owner','car_image','car_image_url','car_model','car_number','fuel_type','price_per_hour','status','features','feature_ids','user','user_full_name','user_image_url','user_email','user_contact',]
    
    def get_car_image_url(self, obj):
        """
        Fetches the car image URL from the related Car model.
        """
        request = self.context.get('request')  # Get request object for absolute URL
        if obj.car_image and request:
            return request.build_absolute_uri(obj.car_image.url)
        return None
    
    def get_user_image_url(self, obj):
        """
        Fetch the car image URL from the related Car model.
        """
        request = self.context.get('request')
        if obj.user.user_image and request:
            return request.build_absolute_uri(obj.user.user_image.url)
        return None

    
    

# CarBookSerializer

class CarBookSerializer(serializers.ModelSerializer):
    car_image_url = serializers.SerializerMethodField()
    car_owner=serializers.CharField(source='car.car_owner',read_only=True)
    fuel_type=serializers.CharField(source='car.fuel_type',read_only=True)
    car_model=serializers.CharField(source='car.car_model',read_only=True)
    car_number=serializers.CharField(source='car.car_number',read_only=True)
    price=serializers.CharField(source='car.price_per_hour',read_only=True)
    
    user_image_url=serializers.SerializerMethodField()
    user_name=serializers.CharField(source='user.full_name',read_only=True)
    user_email=serializers.CharField(source='user.email',read_only=True)
    user_contact=serializers.CharField(source='user.phone_number',read_only=True)
    car_status=serializers.CharField(source='car.status',read_only=True)
    
    class Meta:
        model=CarBook
        fields=['id','user','user_image_url','user_name','user_email','user_contact','booking_date','pickup_date','drop_date','car','pickup_location','drop_location','car_owner','car_image_url','fuel_type','car_model','car_number','car_status','price']

    def get_car_image_url(self, obj):
        """
        Fetch the car image URL from the related Car model.
        """
        request = self.context.get('request')
        if obj.car.car_image and request:
            return request.build_absolute_uri(obj.car.car_image.url)
        return None
    
    def get_user_image_url(self, obj):
        """
        Fetch the car image URL from the related Car model.
        """
        request = self.context.get('request')
        if obj.user.user_image and request:
            return request.build_absolute_uri(obj.user.user_image.url)
        return None


class CustomUserSerializer(serializers.ModelSerializer):
    user_image_url=serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True,required=False)
    class Meta:
        model=CustomUser
        fields=['id','username','role','email','password', 'confirm_password','full_name','phone_number','dob','address','user_image','user_image_url','date_joined']
        extra_kwargs={
            'password':{'write_only':True} # ensures password will not show in api responses
        }

    def validate(self, data):
        password = data.get('password')
        confirm_password=data.pop('confirm_password',None)

        if password and confirm_password and password != confirm_password:
            raise serializers.ValidationError({"confirm_password": "Passwords do not match."})
        return data
        
    def create(self, validated_data):
         validated_data['password'] = make_password(validated_data['password'])  # Hash password
         return CustomUser.objects.create(**validated_data)


    def get_user_image_url(self,obj):
        request=self.context.get('request')
        if obj.user_image and request:
            return request.build_absolute_uri(obj.user_image.url)
        return None
    

class UserSerializer(serializers.ModelSerializer):
        profile_image_url = serializers.SerializerMethodField()
        dob = serializers.CharField(default="Not Provided")  # Avoid None
        phone_number = serializers.CharField(default="Not Provided")
        date_joined = serializers.SerializerMethodField()

        id = serializers.IntegerField(read_only=True)

        class Meta:
            model = CustomUser  # Replace with your actual user model
            fields = ['id', 'username','full_name', 'email', 'profile_image_url','address','dob','phone_number','password','date_joined']

        def get_profile_image_url(self, obj):
            request = self.context.get('request')
            if obj.user_image and request:
                return request.build_absolute_uri(obj.user_image.url)
            return None
        
        def get_date_joined(self, obj):
            return obj.date_joined.date()

    


# class CarReportSerializer(serializers.ModelSerializer):
#     car_image_url=serializers.SerializerMethodField()
#     user_name = serializers.CharField(source='user.full_name', read_only=True)
#     user_contact = serializers.CharField(source='user.phone_number', read_only=True)
#     car_owner=serializers.CharField(source='car.agent.owner_name', read_only=True)
#     car_name = serializers.CharField(source='car.agent.car_model', read_only=True)
#     car_type = serializers.CharField(source='car.agent.carType.car_type', read_only=True)
#     car_company = serializers.CharField(source='car.agent.company.company_name', read_only=True)
#     price = serializers.DecimalField(source='car.price_per_day', max_digits=10, decimal_places=2, read_only=True)
#     class Meta:
#         model=CarReport
#         fields = ['id', 'car_image_url','user', 'user_name', 'user_contact','car','car_owner','car_name', 'car_type', 'car_company', 'stock', 'price']

#     def get_car_image_url(self, obj):
#         """
#         Fetches the car image URL from the related Car model.
#         """
#         request = self.context.get('request')  # Get request object for absolute URL
#         if obj.car.agent.car_image and request:
#             return request.build_absolute_uri(obj.car.agent.car_image.url)
#         return None
    

# class CompanySerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Company
#         fields="__all__"


# class CarTypeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=CarType
#         fields="__all__"

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model=Enquiry
        fields="__all__"
    