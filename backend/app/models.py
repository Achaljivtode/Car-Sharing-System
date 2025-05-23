from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.utils.timezone import now


car_number_validator = RegexValidator(
    regex=r'^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$',
    message="Car number must be in the format 'MH12AB1234'."
)

# Custom User model

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

# -------------------------------------------------------
# Feature Model

class Feature(models.Model):
    
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

# ------------------------------------------------------------   
# car Model

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
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.car_model 

# ----------------------------------------------------------
# Book Car Model

class CarBook(models.Model):
    STATUS_CHOICES = [
        ('Booked', 'Booked'),
        ('Cancelled', 'Cancelled'),
        ('Completed', 'Completed'),
    ]

    booking_date=models.DateTimeField(auto_now=True)
    pickup_location=models.TextField(null=True,blank=True)
    drop_location=models.TextField(null=True,blank=True)
    pickup_date=models.DateField()
    drop_date=models.DateField()
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    booking_status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Booked')

    def save(self, *args, **kwargs):
        """Automatically update status to 'Completed' if drop_date has passed and booking is not canceled."""
        if self.drop_date < now().date() and self.booking_status != 'Cancelled':
            self.booking_status = 'Completed'
        super().save(*args, **kwargs)
    
    def __str__(self):
        car_model = self.car.car_model if self.car and self.car.car_owner else "Unknown Car"
        return f"Booking for {car_model} from {self.pickup_date} to {self.drop_date}"

# ------------------------------------------------------------
# Enquiry model
class Enquiry(models.Model):
    name=models.CharField(max_length=255)
    email=models.EmailField()
    contact=models.CharField(max_length=15,null=True,blank=True)
    message=models.TextField()





   


