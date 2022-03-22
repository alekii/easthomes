from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views


router = SimpleRouter()
router.register('', views.PropertyList)

urlpatterns = [
    path('agents/', views.AgentList.as_view()),
    path('agents/<int:pk>/', views.AgentDetail.as_view()),
    path('', include(router.urls)),
    path('property/<int:pk>/', views.PropertyDetail.as_view())
    ]
