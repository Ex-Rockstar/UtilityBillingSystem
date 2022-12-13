from django.db import models

# Create your models here.
class contact(models.Model):
    name = models.CharField(max_length=122)
    email = models.CharField(max_length=122)
    phoneno = models.CharField(max_length=50)
    query = models.TextField()
    date = models.DateField()