from rest_framework import serializers
from django.utils.duration import _get_duration_components
from django.contrib.auth import models as user_models
from django.db.models import Count
from . import models


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Activity
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    activities = ActivitySerializer(many=True)

    class Meta:
        model = models.Event
        exclude=['modified', 'is_removed']


class GroupSerializer(serializers.ModelSerializer):
    events = EventSerializer(read_only=True, many=True)
    events_count = serializers.SerializerMethodField()

    class Meta:
        model = models.Group
        exclude=['modified', 'is_removed']

    def get_events_count(self, model):
        return model.events.count()

