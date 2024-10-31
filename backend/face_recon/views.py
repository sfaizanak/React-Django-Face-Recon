from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.core.mail import send_mail,EmailMultiAlternatives
from django.conf import settings
from .models import *
from .serializers import *

class OrganizationUserCreateView(generics.ListCreateAPIView):
    queryset = OrganizationUser.objects.all()
    serializer_class = OrganizationUserSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        _password = serializer.validated_data['password']
        # Send confirmation email
        mail=EmailMultiAlternatives(
            'Organization Registration Successful',
            f'''
            <div style="padding:20px;margin:10px; border:1px solid gray">
                <div>
                    <h2>{user.organization}</h2>
                    <p>Thank you For Registeration</p>
                    <p>Username: {user.email}</p>
                    <p>Password: {_password}</p>
                </div>
            </div>
            
            ''',
            settings.EMAIL_HOST_USER,
            [user.email]
        )
        mail.content_subtype = 'HTML'
        mail.send()

class OrganizationUserRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrganizationUser.objects.all()
    serializer_class = OrganizationUserSerializer
    lookup_field = 'id'
    
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def perform_update(self, serializer):
        user = serializer.save()
        _password = serializer.validated_data['password']
        mail=EmailMultiAlternatives(
            'Organization User data is Updated',
            f'''
            <div style="padding:20px;margin:10px; border:1px solid gray">
                <div>
                    <h2>Hello {user.organization},</h2>
                    <p>Your Data has been updated successfully</p>
                    <p>Username: {user.email}</p>
                    <p>Password: {_password}</p>
                </div>
            </div>
            
            ''',
            settings.EMAIL_HOST_USER,
            [user.email]
        )
        mail.content_subtype = 'HTML'
        mail.send()
          

class EmployeeUserCreateView(generics.ListCreateAPIView):
    queryset = EmployeeUser.objects.all()
    serializer_class = EmployeeUserSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        _password = serializer.validated_data['password']
        # Send confirmation email
        mail=EmailMultiAlternatives(
            'Employee Registration Successful',
            f'''
            <div style="padding:20px;margin:10px; border:1px solid gray">
                <div>
                    <h2>Hello {user.name},</h2>
                    <p>Thank you Registeration</p>
                    <p>Username: {user.email}</p>
                    <p>Password: {_password}</p>
                    <p>Organization: {user.organization}</p>
                </div>
            </div>
            
            ''',
            settings.EMAIL_HOST_USER,
            [user.email]
        )
        mail.content_subtype = 'HTML'
        mail.send()
        
class EmployeeUserRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = EmployeeUser.objects.all()
    serializer_class = EmployeeUserSerializer
    lookup_field = 'id'
    
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def perform_update(self, serializer):
        user = serializer.save()
        _password = serializer.validated_data['password']
        mail=EmailMultiAlternatives(
            'Employee data is Updated',
            f'''
            <div style="padding:20px;margin:10px; border:1px solid gray">
                <div>
                    <h2>Hello {user.name},</h2>
                    <p>Your Data has been updated successfully</p>
                    <p>Username: {user.email}</p>
                    <p>Password: {_password}</p>
                </div>
            </div>
            
            ''',
            settings.EMAIL_HOST_USER,
            [user.email]
        )
        mail.content_subtype = 'HTML'
        mail.send()
 

class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = ()
    
class CustomTokenRefreshView(TokenRefreshView):
    permission_classes = ()
