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
        id= request.query_params.get('pk')
        data = request.data;
        queryset = Card.objects.get(id=id);
        serialiser=CardSerializer(queryset,data=data)
        if serialiser.is_valid():
            serialiser.save()
            return Response(serialiser.data)
        return Response(status,status.HTTP_400_BAD_REQUEST)

    def destroy(self, request):
        id= request.query_params.get('pk')
        queryset = Card.objects.filter(id=id).delete()
        serializer = CardSerializer(queryset);
        return Response({"deleted":"sucessfully"})

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