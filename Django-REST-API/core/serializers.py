from rest_framework import serializers
from .models import Location, Property, Agent, PropertyImage, AgentImage


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['location_name', 'longitude', 'latitude']


class AgentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Agent
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'agentimages']


class PropertyImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        property_id = self.context['property_id']
        return PropertyImage.objects.create(property_id=property_id, **validated_data)

    class Meta:
        model = PropertyImage
        fields = ['id', 'image']


class AgentImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        property_id = self.context['agent_id']
        return AgentImage.objects.create(agent_id=property_id, **validated_data)

    class Meta:
        model = AgentImage
        fields = ['id', 'image']


class PropertySerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(many=True, read_only=True)

    class Meta:
        model = Property
        fields = ['id', 'name', 'price', 'description', 'location', 'agent', 'images']

    location = LocationSerializer()
    agent = AgentSerializer()


