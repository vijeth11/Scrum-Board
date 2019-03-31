from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.

@python_2_unicode_compatible
class List (models.Model):
    name= models.CharField(max_length=50)

    def __str__(self):
        return "List: {}".format(self.name)


@python_2_unicode_compatible
class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=True)
    list = models.ForeignKey(List, related_name="cards",on_delete=None)
    story_points = models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True,blank=True)

    def __str__(self):
        return "card: {}".format(self.title)