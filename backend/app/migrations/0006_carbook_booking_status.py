# Generated by Django 5.1.7 on 2025-03-30 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_car_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='carbook',
            name='booking_status',
            field=models.CharField(choices=[('Booked', 'Booked'), ('Cancelled', 'Cancelled'), ('Completed', 'Completed')], default='Booked', max_length=10),
        ),
    ]
