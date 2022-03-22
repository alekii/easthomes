from django.db.models import Count
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .filters import PropertyFilter
from .models import Property as Prop, Agent
from .serializers import PropertySerializer, AgentSerializer


class PropertyList(ModelViewSet):
    queryset = Prop.objects.select_related('location').all()
    serializer_class = PropertySerializer
    filter_backends = [SearchFilter, DjangoFilterBackend, OrderingFilter]
    filterset_class = PropertyFilter
    search_fields = ['name']
    ordering_fields = ['price']

    def get_queryset(self):
        queryset = Prop.objects.select_related('location').all()
        return queryset

    def get_serializer_context(self):
        return {'request': self.request}


class PropertyDetail(RetrieveUpdateDestroyAPIView):
    queryset = Prop.objects.all()
    serializer_class = PropertySerializer

    def delete(self, request, *args, **kwargs):
        property_ = get_object_or_404(Prop, pk=kwargs['pk'])
        property_.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AgentList(ListCreateAPIView):
    queryset = Agent.objects.annotate(properties_count=Count('properties')).all()
    serializer_class = AgentSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class AgentDetail(RetrieveUpdateDestroyAPIView):
    queryset = Agent.objects.annotate(properties_count=Count('properties')).all()
    serializer_class = AgentSerializer

    def delete(self, request, *args, **kwargs):
        agent = get_object_or_404(Agent, pk=kwargs['pk'])
        if agent.properties.count() > 0:
            return Response({"Agent cannot be deleted as is associated with property"})
        agent.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
