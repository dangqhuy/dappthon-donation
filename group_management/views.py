from django.shortcuts import render
from rest_framework import generics
from . import models, serializers


class ListGroupAPIView(generics.ListAPIView):
    queryset = models.Group.objects.all()
    serializer_class = serializers.GroupSerializer


class DetailGroupAPIView(generics.RetrieveAPIView):
    queryset = models.Group.objects.all()
    serializer_class = serializers.GroupSerializer


class DetailEventAPIView(generics.RetrieveAPIView):
    queryset = models.Event.objects.all()
    serializer_class = serializers.EventSerializer
