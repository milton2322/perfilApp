from django.db import models
from django.db.models.fields import Field

# Create your models here.

class Rols(models.Model):
    rolId = models.AutoField(primary_key=True)
    rolName = models.CharField(max_length = 200)

class Users(models.Model):
    userId = models.AutoField(primary_key=True)
    userName = models.CharField(max_length = 200)
    rol = models.CharField(max_length = 200)
    photoFileName = models.CharField(max_length = 200)
    
    
    
    
    
    