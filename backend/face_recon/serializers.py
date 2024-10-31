from rest_framework import serializers
from .models import *

class OrganizationUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrganizationUser
        fields = ('id','email', 'password', 'organization')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = OrganizationUser.objects.create_user(**validated_data)
        return user

class EmployeeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeUser
        fields = ('id','email', 'password', 'organization', 'department', 'designation', 'image')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = EmployeeUser.objects.create_user(**validated_data)
        return user
