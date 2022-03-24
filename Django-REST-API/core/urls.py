from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views


router = SimpleRouter()
router.register('agents', views.AgentList)
router.register('', views.PropertyList)

urlpatterns = router.urls
