from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

car_number_validator = RegexValidator(
    regex=r'^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$',
    message="Car number must be in the format 'MH12AB1234'."
)


class CustomUser(AbstractUser):
    CUSTOMER='customer'
    ADMIN='admin'

    ROLE_CHOICES=[
        (CUSTOMER,'customer'),
        (ADMIN,'admin')
    ]

    email = models.EmailField(unique=True)

    full_name=models.CharField(max_length=255)
    user_image=models.ImageField(upload_to='user_images/',null=True,blank=True)
    dob=models.DateField(null=True,blank=True)
    phone_number=models.CharField(max_length=15,unique=True,null=True,blank=True)
    address=models.TextField(null=True,blank=True)
    role=models.CharField(max_length=10,choices=ROLE_CHOICES,default=CUSTOMER)


    def __str__(self):
        return f'{self.username} ({self.role})'


class Company(models.Model):
    company_name=models.CharField(max_length=60)
    description=models.TextField()

    def __str__(self):
        return self.company_name

class CarType(models.Model):
    car_type=models.CharField(max_length=100)
    description=models.TextField()

    def __str__(self):
        return self.car_type
    
class Agent(models.Model):
    owner_name=models.CharField(max_length=255)
    owner_email=models.EmailField(unique=True)
    owner_contact=models.CharField(max_length=15,unique=True,null=True,blank=True)
    owner_adress=models.TextField()

    car_model=models.CharField(max_length=60)
    car_number = models.CharField(max_length=15, unique=True,validators=[car_number_validator])
    carType=models.ForeignKey(CarType,on_delete=models.CASCADE,default=1) # carType stores id 
    company=models.ForeignKey(Company,on_delete=models.CASCADE,default=1)
    car_image=models.ImageField(upload_to='car_images/',default=1)

    def __str__(self):
        return self.owner_name

class Car(models.Model):
    agent=models.ForeignKey(Agent,on_delete=models.CASCADE,default=1)
    from_location=models.CharField(max_length=255)
    to_location=models.CharField(max_length=255)
    price_per_day=models.DecimalField(max_digits=10, decimal_places=2)
    description=models.TextField()

    def __str__(self):
        return self.agent.car_model if self.agent else "Unknown Car"

class CarBook(models.Model):
    booking_date=models.DateTimeField(auto_now=True)
    pickup_date=models.DateField()
    drop_date=models.DateField()
    car = models.ForeignKey(Car, on_delete=models.CASCADE, default=1)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=1)
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE, default=1)


    def __str__(self):
        car_model = self.car.agent.car_model if self.car and self.car.agent else "Unknown Car"
        return f"Booking for {car_model} from {self.pickup_date} to {self.drop_date}"


class CarReport(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE,default=1)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=1)
    agent=models.ForeignKey(Agent,on_delete=models.CASCADE,default=1)
    stock=models.IntegerField(default=0)

class Enquiry(models.Model):
    name=models.CharField(max_length=255)
    email=models.EmailField()
    contact=models.CharField(max_length=15,null=True,blank=True)
    message=models.TextField()





   


