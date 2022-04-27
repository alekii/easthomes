from django.db import models


class Agent(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'

    class Meta:
        ordering = ['first_name']


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
    bedrooms = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ['-price']


class Location(models.Model):
    location_name = models.CharField(max_length=255)
    property = models.OneToOneField(Property, on_delete=models.CASCADE, primary_key=True)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self) -> str:
        return self.location_name.__str__()


class PropertyImage(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to='core/images')

    def __str__(self) -> str:
        return self.property.__str__()


class AgentImage(models.Model):
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE, related_name="agentimages")
    image = models.ImageField(upload_to='core/agent/images')

    def __str__(self) -> str:
        return self.agent.__str__()
