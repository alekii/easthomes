from rest_framework import serializers
from .models import Location, Property


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['location_name,longitude,latitude']

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['id', 'name', 'price', 'description']

    location = LocationSerializer()

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass
