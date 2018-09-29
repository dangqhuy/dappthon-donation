from django.contrib import admin
from . import models
# Register your models here.

class EventInline(admin.TabularInline):
    model = models.Event


class GroupAdmin(admin.ModelAdmin):
    inlines = [
        EventInline,
    ]

class ActivityInline(admin.TabularInline):
    model = models.Activity

class EventAdmin(admin.ModelAdmin):
    inlines = [
        ActivityInline,
    ]

admin.site.register(models.Profile)
admin.site.register(models.Group, GroupAdmin)
admin.site.register(models.Event, EventAdmin)
admin.site.register(models.Activity)