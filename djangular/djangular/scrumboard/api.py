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

    def get_queryset(self):
        user = self.request.query_params.get('user',None)
        queryset = Card.objects.filter(user=user)
        return queryset

    def update(self, request):
        pass

    def partial_update(self, request):
        pass

    def destroy(self, request):
        pass
    serializer_class = CardSerializer

class Login(APIView):

    def post(self,request):
        username=request.data.get("username")
        password = request.data.get("password")
        user={"username":username,"password":password}
        users=Users.objects.values_list('id','username','password',named=True).get(username=username,password=password)
        print(users)
        if user==None:
            return Response({'status':'Unauthorized','message':'Username or password error'},status=status.HTTP_410_UNAUTHORIZED)
        return Response(UserSerializer(users).data)