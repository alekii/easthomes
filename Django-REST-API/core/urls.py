from django.urls import path
from . import views

urlpatterns = [
    path('', views.properties_list, name='properties_list'),
    path('property/<property_id>/', views.property_detail)
]
