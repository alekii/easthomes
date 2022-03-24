from django.db.models import Count, F
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .filters import PropertyFilter
from .models import Property as Prop, Agent
from .serializers import PropertySerializer, AgentSerializer
from .permissions import IsAdminOrReadOnly


class PropertyList(ModelViewSet):
    queryset = Prop.objects.select_related('location').all()
    serializer_class = PropertySerializer
    filter_backends = [SearchFilter, DjangoFilterBackend, OrderingFilter]
    filterset_class = PropertyFilter
    search_fields = ['name']
    ordering_fields = ['price']
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        queryset = Prop.objects.select_related('location').all()
        return queryset

    def get_serializer_context(self):
        return {'request': self.request}


class AgentList(ModelViewSet):
    queryset = Agent.objects.annotate(properties_count=Count('properties')).all()
    serializer_class = AgentSerializer
    permission_classes = [IsAdminUser]

    def get_serializer_context(self):
        return {'request': self.request}

    def destroy(self, request, *args, **kwargs):
        if Agent.objects.filter(id=kwargs['pk']).count() > 0:
            return Response({"Agent cannot be deleted as is associated with property"})
        return super().destroy(request, *args, **kwargs)
