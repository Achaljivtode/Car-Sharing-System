# Generated by Django 5.1.7 on 2025-03-30 18:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_customuser_is_verified'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='is_verified',
        ),
    ]
