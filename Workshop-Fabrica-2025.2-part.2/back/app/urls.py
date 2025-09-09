from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('button-signal/', views.button_signal, name='button_signal'),
]
