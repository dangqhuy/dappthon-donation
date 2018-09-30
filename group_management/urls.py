from django.urls import path
from . import views


urlpatterns = [
    path('api/v1/groups', views.ListGroupAPIView.as_view(), name='groups'),
    path('api/v1/groups/<int:pk>/events', views.DetailGroupAPIView.as_view(), name='detail_group')
]