from django.contrib import admin
from app.models import  Car,CarBook,CustomUser,Enquiry
from django.contrib.auth.admin import UserAdmin
# Register your models here.

# admin.site.register(Company)
# admin.site.register(CarType)
admin.site.register(Car)
admin.site.register(CarBook)
# admin.site.register(CarReport)
# admin.site.register(Agent)
admin.site.register(Enquiry)

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email','full_name','user_image','dob', 'phone_number', 'address','role','date_joined')
    search_fields = ('username', 'email', 'phone_number','full_name','role')

    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {'fields': ('full_name', 'user_image', 'dob', 'phone_number', 'address','role')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)

