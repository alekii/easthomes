from django.db import models


class Agent(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=255)


# Create your models here.
class Property(models.Model):
    TYPE_BUNGALOW = 'B'
    TYPE_MANSION = 'M'
    TYPE_APARTMENT = 'A'

    PROPERTY_TYPES = [
        (TYPE_BUNGALOW, 'Bungalow'),
        (TYPE_MANSION, 'Mansion'),
        (TYPE_APARTMENT, 'Apartment')
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.IntegerField()
    agent = models.ForeignKey(Agent, on_delete=models.PROTECT, related_name="properties")
    property_type = models.CharField(max_length=1, choices=PROPERTY_TYPES, default=TYPE_BUNGALOW)


class Location(models.Model):
    location_name = models.CharField(max_length=255)
    property = models.OneToOneField(Property, on_delete=models.CASCADE, primary_key=True)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self) -> str:
        return self.location_name.__str__()
