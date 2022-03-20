from django.urls import path
from . import views

urlpatterns = [
    path('', views.properties_list, name='properties_list')
]
