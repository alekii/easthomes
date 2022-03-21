from rest_framework import serializers
from .models import Location


class LocationSerializer(serializers.Serializer):

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    location_name = serializers.CharField()
    longitude = serializers.FloatField()
    latitude = serializers.FloatField()


class PropertySerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    price = serializers.DecimalField(max_digits=8, decimal_places=0)
    description = serializers.CharField(max_length=255)
    location = LocationSerializer()
