# Generated by Django 5.0.3 on 2024-10-31 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('face_recon', '0002_remove_employeeuser_username_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='employeeuser',
            name='name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]