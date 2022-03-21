from django.urls import path
from . import views

urlpatterns = [
    path('', views.PropertyList.as_view()),
    path('property/<property_id>/', views.ProductDetail.as_view())
]
