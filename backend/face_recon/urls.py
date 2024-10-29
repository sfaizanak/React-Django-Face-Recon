from django.urls import path
from .views import *

urlpatterns = [
    path('register/organization_user/', OrganizationUserCreateView.as_view(), name='register_organization_user'),
    path('register/employee_user/', EmployeeUserCreateView.as_view(), name='register_employee_user'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]
