from rest_framework import serializers
from .models import Location, Property, Agent, PropertyImage, AgentImage


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['location_name', 'longitude', 'latitude']


class PropertyImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        property_id = self.context['property_id']
        return PropertyImage.objects.create(property_id=property_id, **validated_data)

    class Meta:
        model = PropertyImage
        fields = ['image']


class AgentImageSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        agent_id = self.context['agent_id']
        return AgentImage.objects.create(agent_id=agent_id, **validated_data)

    class Meta:
        model = AgentImage
        fields = ['image']


class AgentSerializer(serializers.ModelSerializer):
    agentimages = AgentImageSerializer(many=True, read_only=True)

    class Meta:
        model = Agent
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'agentimages']


class PropertySerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(many=True, read_only=True)
    print(Property.PROPERTY_TYPES)

    class Meta:
        model = Property
        fields = ['id', 'name', 'price', 'description', 'location', 'agent', 'images', 'bedrooms', 'property_type']

    location = LocationSerializer()
    agent = AgentSerializer()

