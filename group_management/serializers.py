from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from django.db.models import Count
from . import models


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Event
        exclude=['created', 'modified', 'is_removed']


class GroupSerializer(serializers.ModelSerializer):
    events = EventSerializer(read_only=True, many=True)
    events_count = serializers.SerializerMethodField()


    class Meta:
        model = models.Group
        exclude=['modified', 'is_removed']

    def get_events_count(self, model):
        return model.events.count()

