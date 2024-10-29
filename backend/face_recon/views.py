from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.core.mail import send_mail
from django.conf import settings
from .models import *
from .serializers import *

class OrganizationUserCreateView(generics.ListCreateAPIView,generics.RetrieveUpdateDestroyAPIView):
    queryset = OrganizationUser.objects.all()
    serializer_class = OrganizationUserSerializer
    lookup_field = 'username'

    def perform_create(self, serializer):
        user = serializer.save()
        # Send confirmation email
        send_mail(
            'Admin Registration Successful',
            f'Welcome {user.username} to the organization. Your password is {user.password}',
            settings.EMAIL_HOST_USER,
            [user.email],
            fail_silently=False,
        )

class EmployeeUserCreateView(generics.ListCreateAPIView,generics.RetrieveUpdateDestroyAPIView):
    queryset = EmployeeUser.objects.all()
    serializer_class = EmployeeUserSerializer
    lookup_field = 'username'

    def perform_create(self, serializer):
        user = serializer.save()
        # Send confirmation email
        send_mail(
            'Employee Registration Successful',
            f'Welcome {user.username} to the organization.Your password is {user.password}',
            settings.EMAIL_HOST_USER,
            [user.email],
            fail_silently=False,
        )

class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = ()
    
class CustomTokenRefreshView(TokenRefreshView):
    permission_classes = ()
