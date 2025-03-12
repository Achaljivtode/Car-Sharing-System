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
    


class Car(models.Model):
    car_number = models.CharField(max_length=15, unique=True,validators=[car_number_validator])
    car_name=models.CharField(max_length=100)
    from_location=models.CharField(max_length=255)
    to_location=models.CharField(max_length=255)
    carType=models.ForeignKey(CarType,on_delete=models.CASCADE,default=1) # carType stores id 
    company=models.ForeignKey(Company,on_delete=models.CASCADE,default=1)
    price_per_day=models.DecimalField(max_digits=10, decimal_places=2)
    car_image=models.ImageField(upload_to='car_images/',null=True,blank=True)
    description=models.TextField()

    def __str__(self):
        return self.car_name


class CarBook(models.Model):
    booking_date=models.DateTimeField(auto_now=True)
    pickup_date=models.DateField()
    drop_date=models.DateField()
    car=models.ForeignKey(Car,on_delete=models.CASCADE,default=1)
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE,default=1)


    def __str__(self):
        return f"Booking for {self.car.car_name} from {self.pickup_date} to {self.drop_date}"


class CarReport(models.Model):
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE,default=1)
    car=models.ForeignKey(Car,on_delete=models.CASCADE,default=1)
    stock=models.IntegerField()

   


