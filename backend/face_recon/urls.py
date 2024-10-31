from django.urls import path
from .views import *

urlpatterns = [
    path('organization_user/', OrganizationUserCreateView.as_view()),
    path('organization_user/<id>', OrganizationUserRetrieveUpdateDestroy.as_view(), name='organization_user'),
    path('employee_user/', EmployeeUserCreateView.as_view()),
    path('employee_user/<id>', EmployeeUserCreateView.as_view(), name='employee_user'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]
