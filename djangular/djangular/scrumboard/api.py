from rest_framework.generics import ListAPIView

from .models import List,Card
from .Serializers import ListSerisalizer,CardSerializer

class ListApi(ListAPIView):
    queryset= List.objects.all()
    serializer_class = ListSerisalizer

class CardApi(ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

