from django.urls import path
from .api import ListApi,CardApi
from django.views.generic import TemplateView

urlpatterns =[
    path('lists',ListApi.as_view()),
    path('cards',CardApi.as_view()),
    path('',TemplateView.as_view(template_name="index.html"))
]