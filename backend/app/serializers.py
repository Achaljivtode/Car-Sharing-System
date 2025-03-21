from rest_framework import serializers
from app.models import Car,CarBook,CustomUser,CarReport,Company,CarType,Agent,Enquiry


# Car Seraializer

class CarSerializer(serializers.ModelSerializer):
    # carType_name=serializers.CharField(source='carType.car_type',read_only=True)
    # company_name=serializers.CharField(source='company.company_name',read_only=True)
    car_image_url=serializers.SerializerMethodField() # Generate full URL
    car_owner=serializers.CharField(source='agent.owner_name',read_only=True)
    owner_email=serializers.CharField(source='agent.owner_email',read_only=True)
    owner_contact=serializers.CharField(source='agent.owner_contact',read_only=True)
    car_model=serializers.CharField(source='agent.car_model',read_only=True)
    car_number=serializers.CharField(source='agent.car_number',read_only=True)
    carType_name=serializers.CharField(source='agent.carType.car_type',read_only=True)
    Company_name=serializers.CharField(source='agent.company.company_name',read_only=True)
    
    class Meta:
        model=Car
        fields=['id','agent','car_image_url','from_location','to_location','price_per_day','description','car_owner','owner_email','owner_contact','car_model','car_number','carType_name','Company_name']
    
    def get_car_image_url(self, obj):
        """
        Fetches the car image URL from the related Car model.
        """
        request = self.context.get('request')  # Get request object for absolute URL
        if obj.agent.car_image and request:
            return request.build_absolute_uri(obj.agent.car_image.url)
        return None

    
    
class AgentSerializer(serializers.ModelSerializer):
    carType_name=serializers.CharField(source='carType.car_type',read_only=True)
    company_name=serializers.CharField(source='company.company_name',read_only=True)
    car_image_url=serializers.SerializerMethodField()

    class Meta:
        model=Agent
        fields=['id','owner_name','owner_email','owner_contact','owner_adress','car_model','car_number','car_image','car_image_url','carType','carType_name','company','company_name']

    def get_car_image_url(self,obj):
        request=self.context.get('request')  # get('request')-->host->http://127.0.0.1:8000
        if obj.car_image and request: # Check if an image exists and request is valid
            return request.build_absolute_uri(obj.car_image.url) # Convert relative path to full URL
        return None

# CarBookSerializer

class CarBookSerializer(serializers.ModelSerializer):
    car_owner=serializers.CharField(source='car.agent.owner_name',read_only=True)
    car_name=serializers.CharField(source='car.agent.car_model',read_only=True)
    car_type=serializers.CharField(source='car.agent.carType.car_type',read_only=True)
    car_company=serializers.CharField(source='car.agent.company.company_name',read_only=True)
    pickup_addr=serializers.CharField(source='car.from_location',read_only=True)
    drop_addr=serializers.CharField(source='car.to_location',read_only=True)
    price=serializers.CharField(source='car.price_per_day',read_only=True)
    user_name=serializers.CharField(source='user.full_name',read_only=True)
    user_email=serializers.CharField(source='user.email',read_only=True)
    user_contact=serializers.CharField(source='user.phone_number',read_only=True)
    
    class Meta:
        model=CarBook
        fields=['id','user','user_name','user_email','user_contact','booking_date','pickup_date','drop_date','car','pickup_addr','drop_addr','car_owner','car_name','car_type','car_company','price']


class CustomUserSerializer(serializers.ModelSerializer):
    user_image_url=serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model=CustomUser
        fields=['id','username','role','email','password', 'confirm_password','full_name','phone_number','dob','address','user_image','user_image_url']
        extra_kwargs={
            'password':{'write_only':True} # ensures password will not show in api responses
        }

    def validate(self, data):
        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError({"confirm_password": "Passwords do not match."})
        return data
    
    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Remove confirm_password before saving
        user = CustomUser.objects.create_user(**validated_data)  # Use create_user to hash password
        return user


    def get_user_image_url(self,obj):
        request=self.context.get('request')
        if obj.user_image and request:
            return request.build_absolute_uri(obj.user_image.url)
        return None
    
   

class CarReportSerializer(serializers.ModelSerializer):
    car_image_url=serializers.SerializerMethodField()
    user_name = serializers.CharField(source='user.full_name', read_only=True)
    user_contact = serializers.CharField(source='user.phone_number', read_only=True)
    car_owner=serializers.CharField(source='car.agent.owner_name', read_only=True)
    car_name = serializers.CharField(source='car.agent.car_model', read_only=True)
    car_type = serializers.CharField(source='car.agent.carType.car_type', read_only=True)
    car_company = serializers.CharField(source='car.agent.company.company_name', read_only=True)
    price = serializers.DecimalField(source='car.price_per_day', max_digits=10, decimal_places=2, read_only=True)
    class Meta:
        model=CarReport
        fields = ['id', 'car_image_url','user', 'user_name', 'user_contact','car','car_owner','car_name', 'car_type', 'car_company', 'stock', 'price']

    def get_car_image_url(self, obj):
        """
        Fetches the car image URL from the related Car model.
        """
        request = self.context.get('request')  # Get request object for absolute URL
        if obj.car.agent.car_image and request:
            return request.build_absolute_uri(obj.car.agent.car_image.url)
        return None
    

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model=Company
        fields="__all__"


class CarTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model=CarType
        fields="__all__"

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model=Enquiry
        fields="__all__"
    