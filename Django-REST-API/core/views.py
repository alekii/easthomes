from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .filters import PropertyFilter
from .models import Property as Prop, Agent, PropertyImage, AgentImage
from .serializers import PropertySerializer, AgentSerializer, PropertyImageSerializer, AgentImageSerializer
from .permissions import IsAdminOrReadOnly


class PropertyList(ModelViewSet):
    queryset = Prop.objects \
        .prefetch_related('images') \
        .prefetch_related('agent__agentimages') \
        .select_related('agent') \
        .select_related('location') \
        .all()
    serializer_class = PropertySerializer
    filter_backends = [SearchFilter, DjangoFilterBackend, OrderingFilter]
    filterset_class = PropertyFilter
    search_fields = ['name']
    ordering_fields = ['price']
    permission_classes = [IsAdminOrReadOnly]

    def get_serializer_context(self):
        return {'request': self.request}


class AgentList(ModelViewSet):
    queryset = Agent.objects.prefetch_related('agentimages')
    serializer_class = AgentSerializer
    permission_classes = [IsAdminUser]

    def get_serializer_context(self):
        return {'request': self.request}

    def destroy(self, request, *args, **kwargs):
        if Agent.objects.filter(id=kwargs['pk']).count() > 0:
            return Response({"Agent cannot be deleted as is associated with property"})
        return super().destroy(request, *args, **kwargs)


class PropertyImageViewSet(ModelViewSet):
    serializer_class = PropertyImageSerializer

    def get_serializer_context(self):
        return {'property_id': self.kwargs['property_pk']}

    def get_queryset(self):
        return PropertyImage.objects.filter(property_id=self.kwargs['property_pk'])


class AgentImageViewSet(ModelViewSet):
    serializer_class = AgentImageSerializer

    def get_serializer_context(self):
        return {'agent_id': self.kwargs['agent_pk']}

    def get_queryset(self):
        return AgentImage.objects.filter(agent_id=self.kwargs['agent_pk'])
