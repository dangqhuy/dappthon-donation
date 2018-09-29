from django.urls import path
from . import views


urlpatterns = [
    path('api/v1/groups', views.ListGroupAPIView.as_view(), name='groups')
]