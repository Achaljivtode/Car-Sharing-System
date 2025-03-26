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




class Feature(models.Model):
    
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name
    


class Car(models.Model):
    PETROL="petrol"
    DIESEL="diesel"
    ELECTRIC="electric"

    FUEL_TYPE_CHOICES=[
        (PETROL,"petrol"),
        (DIESEL,"diesel"),
        (ELECTRIC,"electric"),
    ]

    AVAILABLE="available"
    IN_USE="in_use"

    STATUS_CHOICES=[
        (AVAILABLE,"available"),
        (IN_USE,"in_use")
    ]

    car_owner=models.CharField(max_length=255,default="none")
    car_model=models.CharField(max_length=60,default="none")
    car_number = models.CharField(max_length=15, unique=True,validators=[car_number_validator],null=True,blank=True)
    fuel_type=models.CharField(max_length=10,choices=FUEL_TYPE_CHOICES,default=PETROL)
    car_image=models.ImageField(upload_to='car_images/',default='Kia1.jpg')
    price_per_hour=models.DecimalField(max_digits=10, decimal_places=2)
    status=models.CharField(max_length=10,choices=STATUS_CHOICES,default=AVAILABLE)
    features = models.ManyToManyField(Feature, blank=True)
    

    

    

    def __str__(self):
        return self.car_model 

class CarBook(models.Model):
    

    booking_date=models.DateTimeField(auto_now=True)
    pickup_location=models.TextField(null=True,blank=True)
    drop_location=models.TextField(null=True,blank=True)
    pickup_date=models.DateField()
    drop_date=models.DateField()
    car = models.ForeignKey(Car, on_delete=models.CASCADE, default=1)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=1)
    


    def __str__(self):
        car_model = self.car.car_model if self.car and self.car.car_owner else "Unknown Car"
        return f"Booking for {car_model} from {self.pickup_date} to {self.drop_date}"


# class CarReport(models.Model):

#     car = models.ForeignKey(Car, on_delete=models.CASCADE,default=1)
#     user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=1)
    
#     stock=models.IntegerField(default=0)

class Enquiry(models.Model):
    name=models.CharField(max_length=255)
    email=models.EmailField()
    contact=models.CharField(max_length=15,null=True,blank=True)
    message=models.TextField()





   


