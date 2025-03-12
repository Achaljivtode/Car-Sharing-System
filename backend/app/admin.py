from django.contrib import admin
from app.models import Company,CarType , Car,CarBook,CarReport,CustomUser
from django.contrib.auth.admin import UserAdmin
# Register your models here.

admin.site.register(Company)
admin.site.register(CarType)
admin.site.register(Car)
admin.site.register(CarBook)
admin.site.register(CarReport)

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email','full_name','user_image','dob', 'phone_number', 'address')
    search_fields = ('username', 'email', 'phone_number','full_name')

    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {'fields': ('full_name', 'user_image', 'dob', 'phone_number', 'address')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)

