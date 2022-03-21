from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from .models import Property as Prop
from .serializers import PropertySerializer


class PropertyList(ListCreateAPIView):
    queryset = Prop.objects.select_related('location').all()
    serializer_class = PropertySerializer

    def get_serializer_context(self):
        return {'request': self.request}


class PropertyDetail(RetrieveUpdateDestroyAPIView):
    queryset = Prop.objects.all()
    serializer_class = PropertySerializer

    def delete(self, request, property_id):
        property_ = get_object_or_404(Prop, pk=property_id)
        property_.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
