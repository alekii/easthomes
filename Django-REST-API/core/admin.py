from django.contrib import admin
from django.db.models import Count
from django.utils.html import format_html
from rest_framework import request

from . import models

# Register your models here.
admin.site.register(models.PropertyImage)
admin.site.register(models.AgentImage)


@admin.register(models.Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ['location_name', 'property_count']
    list_per_page = 20

    @staticmethod
    def property_count(location):
        return location.property_count

    def get_queryset(self, location):
        return super().get_queryset(request).annotate(
            property_count=Count('location_name')
        )


class PropertyImageInline(admin.TabularInline):
    model = models.PropertyImage
    readonly_fields = ['thumbnail']

    @staticmethod
    def thumbnail(instance):
        if instance.image.name != '':
            return format_html(f'<img src="{instance.image.url}" class="thumbnail"/>')


class AgentImageInline(admin.TabularInline):
    model = models.AgentImage
    readonly_fields = ['thumbnail']

    @staticmethod
    def thumbnail(instance):
        if instance.image.name != '':
            return format_html(f'<img src="{instance.image.url}" class="thumbnail"/>')


class LocationInline(admin.TabularInline):
    model = models.Location


@admin.register(models.Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'agent', 'location']
    list_per_page = 20
    list_select_related = ['agent', 'location']
    inlines = [LocationInline, PropertyImageInline]

    class Media:
        css = {
            'all': ['core/styles.css']
        }


@admin.register(models.Agent)
class AgentAdmin(admin.ModelAdmin):
    list_display = ['first_name']
    list_per_page = 10
    inlines = [AgentImageInline]

    class Media:
        css = {
            'all': ['core/styles.css']
        }
