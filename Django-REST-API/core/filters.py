from django_filters import rest_framework as filters
from .models import Property


class PropertyFilter(filters.FilterSet):
    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')
    location = filters.CharFilter(field_name="location__location_name")

    class Meta:
        model = Property
        fields = ['location', 'min_price', 'max_price']