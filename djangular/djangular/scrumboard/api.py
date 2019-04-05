from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework import views,status
from rest_framework.response import Response


from .models import List,Card,Users
from .Serializers import ListSerisalizer,CardSerializer,UserSerializer

class ListViewSet(ModelViewSet):
    queryset= List.objects.all()
    serializer_class = ListSerisalizer

class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class Login(APIView):

    def post(self,request):
        username=request.data.get("username")
        password = request.data.get("password")

        user=Users.objects.all()
        for u in user:
            print(u)
        if user==None:
            return Response({'status':'Unauthorized','message':'Username or password error'},status=status.HTTP_410_UNAUTHORIZED)
        print(user)
        return Response({})