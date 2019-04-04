from django.urls import path
from django.conf.urls import url
from .api import ListViewSet,CardViewSet,LoginView,Logout
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register(r'lists',ListViewSet)
router.register(r'cards',CardViewSet)

urlpatterns =[
    url(r'^login/$',LoginView.as_view()),
    url(r'^logout/$',Logout.as_view())
]

urlpatterns+=router.urls