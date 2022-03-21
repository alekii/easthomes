from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Property as Prop
from .serializers import PropertySerializer


@api_view()
def properties_list(request):
    queryset = Prop.objects.select_related('location').all()
    serializer = PropertySerializer(queryset, many=True)
    return Response(serializer.data)


@api_view()
def property_detail(request, property_id):
    property_ = get_object_or_404(Prop, pk=property_id)
    serializer = PropertySerializer(property_)
    print(serializer.data)
    return Response(serializer.data)
