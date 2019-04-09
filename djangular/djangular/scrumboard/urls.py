from django.urls import path
from django.conf.urls import url
from .api import ListViewSet,CardViewSet,Login
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'lists',ListViewSet)

urlpatterns= [
    url(r'^login',Login.as_view()),
    url(r'cards',CardViewSet.as_view({'get':'list','post':'create','put':'update','delete':'destroy'}))
]
urlpatterns+=router.urls