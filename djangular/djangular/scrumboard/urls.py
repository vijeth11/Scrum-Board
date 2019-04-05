from django.urls import path
from django.conf.urls import url
from .api import ListViewSet,CardViewSet,Login
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'lists',ListViewSet)
router.register(r'cards',CardViewSet)

urlpatterns= [
    url(r'^login',Login.as_view())
]
urlpatterns+=router.urls