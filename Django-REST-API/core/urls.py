from rest_framework_nested import routers
from . import views


router = routers.DefaultRouter()
router.register('agents', views.AgentList)
router.register('', views.PropertyList)


property_router = routers.NestedDefaultRouter(router, '', lookup="property")
property_router.register('images', views.PropertyImageViewSet, basename="property-images")

urlpatterns = router.urls + property_router.urls
