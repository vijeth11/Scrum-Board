from rest_framework.viewsets import ModelViewSet

from .models import List,Card
from .Serializers import ListSerisalizer,CardSerializer

class ListViewSet(ModelViewSet):
    queryset= List.objects.all()
    serializer_class = ListSerisalizer

class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

