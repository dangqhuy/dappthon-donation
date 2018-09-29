from django.db import models
from django.contrib.auth.models import User
from donation.models import BaseModel


class Profile(BaseModel):
    address = models.CharField(max_length=250)
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Group(BaseModel):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    user = models.OneToOneField(Profile, on_delete=models.CASCADE)


class Event(BaseModel):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    status = models.CharField('Status', max_length=250)
    title = models.CharField(max_length=250)
    begin = models.DateTimeField()
    end = models.DateTimeField()
    description = models.CharField(max_length=250)


class Activity(BaseModel):
    title = models.CharField('Title', max_length=250)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    description = models.CharField(max_length=250)
    status = models.CharField('Status', max_length=250)
