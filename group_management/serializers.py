from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from django.db.models import Count
from . import models


class GroupSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = models.Group
        fields = '__all__'


