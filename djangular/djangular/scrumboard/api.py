from rest_framework.viewsets import ModelViewSet
from rest_framework import views,status
from rest_framework.response import Response
from django.contrib.auth import authenticate, login,logout

from .models import List,Card,Users
from .Serializers import ListSerisalizer,CardSerializer,UserSerializer

class ListViewSet(ModelViewSet):
    queryset= List.objects.all()
    serializer_class = ListSerisalizer

class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class LoginView(views.APIView):

     def post(self,request):
         user= authenticate(
             username=request.data.get("username"),
             pasword=request.data.get("password")
         )

         if user is None or not user.is_active:
             return Response({
                 'status':'Unauthorized',
                 'message':'Username or password incorrect'
             },status=status.HTTP_401_UNAUTHORIZED)
         login(request,user)
         return  Response(UserSerializer(user).data)

class Logout(views.APIView):

    def get(self,request):
        logout(request)
        return Response({},status=status.HTTP_204_NO_CONTENT)
