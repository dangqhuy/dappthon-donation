from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from django.db.models import Count
from . import models


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Group
        field = '__all__'


