from rest_framework import serializers
from .models import Location, Property, Agent


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['location_name', 'longitude', 'latitude']


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['id',  'name', 'price', 'description', 'location']

    location = serializers.StringRelatedField()


class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'properties_count']

    properties_count = serializers.IntegerField()




